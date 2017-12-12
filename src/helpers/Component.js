import morphdom from 'morphdom';


function callFunctionOnObject( functionName ) {

  return function callFunctionOnChild( child ) {
    if ( !child ) return;
    // If array, recurse through children
    if ( Array.isArray(child) ) {
      child.forEach( callFunctionOnChild );
      return;
    }
    // If plain object, recurse through children
    if ( child.constructor && child.constructor.name === 'Object' ) {
      Object.keys(child).forEach(( key ) => {
        callFunctionOnChild(child[key]);
      });
      return;
    }
    // Call function on the child
    child[functionName]();
  };

}

class Component {
  static idCounters = {};

  /**
   * Initialization
   */
  constructor() {
    this.containerId = this.generateContainerId();
    this.rendered = false;
    this.hydrated = false;

    this.eventMap = {};
  }

  generateContainerId() {
    const childClassName = this.constructor.name;

    Component.idCounters[childClassName] =
      Component.idCounters[childClassName]
        ? Component.idCounters[childClassName] + 1
        : 1;

    return `${childClassName}_${Component.idCounters[childClassName]}`;
  }


  /**
   * Rendering && Lifecycle
   */
  renderToString() {
    this.rendered = true;
    return `<div class="${this.containerId}" >
      ${this.render()}
    </div>`;
  }

  hydrate() {
    // hydrate component
    this.container = document.querySelector(`.${this.containerId}`);

    // hydrate component's children, recursively
    if ( this.children ) callFunctionOnObject('hydrate')(this.children);
    this.hydrated = true;

    // post hydrate hook
    if ( this.postHydrate ) this.postHydrate();
  }

  // Replace the content at the container node
  // DOM is destroyed and re-created via `innerHTML`
  replaceDom( container ) {
    const div = document.createElement('div');
    div.innerHTML = this.renderToString();
    container.parentNode.replaceChild( div.firstChild, container );
    if ( this.postUpdate ) this.postUpdate();
  }

  // Update the content at the container node
  // Morphdom will re-use existing DOM nodes
  updateDom() {
    morphdom(this.container, this.renderToString());
    // post update hook
    if ( this.postUpdate ) this.postUpdate();
  }

  /**
   * Event handling
   */
  onEvent( eventType, useCapture ) {
    const { classToAction } = this.eventMap[eventType];
    const _this = this;


    const cssMatch = Object.keys(classToAction)
      .join(', ');

    // Find the matched classes and execute corresponding action handlers
    function executeActions( target, event ) {
      Object.keys(classToAction).forEach(( classKey ) => {
        if ( target.matches(classKey) ) {
          const action = classToAction[classKey];
          // Call the event handler function, passing extra argument `target` as the
          // DOM node which matched the css search.
          action.call( _this, event, target );
        }
      });
    }

    // eslint-disable-next-line
    return function ( event ) {
      // Implement event delegation by walking up the tree from the event.target,
      // Looking for any css matches, as defined in
      //   `createEvent('', {cssClass1: fn_1, cssClass2: fn_2})`
      // CSS modules classnames should ensure that separate components do not share
      // any class names.
      for (
        let target = event.target;
        target && target !== event.currentTarget;
        target = target.parentNode
      ) {
        // NOTE: Use precomputed `cssMatch` string to check for match,
        // avoid additional CPU cycles if match is not found.
        if ( target.matches(cssMatch) ) {
          executeActions(target, event);
        }
        // Captured elements do not bubble, skip checking up the tree
        if ( useCapture ) {
          break;
        }
      }
    };
  }

  createEvent( eventType, _classToAction ) {
    // Initialize event map
    if ( !this.eventMap[eventType] ) {
      this.eventMap[eventType] = {
        classToAction: _classToAction,
        listener: null,
      };
    }
    // merge new events in if called second time
    else {
      this.eventMap[eventType].classToAction = {
        ...this.eventMap[eventType].classToAction,
        ..._classToAction,
      };
    }

    const useCaptureEvents = [
      // input
      'focus',
      'blur',
      // HTML frame/object
      'load',
      'unload',
      'scroll',
    ];
    const useCapture = (useCaptureEvents.indexOf(eventType) !== -1);

    // remove the previous event handler for this eventType
    // ( avoids more than one event being set )
    this.container.removeEventListener(eventType, this.eventMap[eventType].listener);
    // generate a new onEvent handler, attach to container,
    // processing newly merged events.
    const onEvent = this.onEvent( eventType, useCapture );
    // pointer to listener function ref, so it can be removed.
    this.eventMap[eventType].listener = onEvent;
    // Only one event added per event type, all events are delegated.
    this.container.addEventListener(eventType, onEvent, useCapture);
  }

}

export default Component;
