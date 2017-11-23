import morphdom from 'morphdom';


function callFunctionOnAllChildren( functionName ) {

  return function callFunctionOnChild( child ) {
    if ( !child ) return;
    // If array, recurse through children
    if ( Array.isArray(child) ) {
      child.forEach( callFunctionOnChild );
      return;
    }
    // If object, recurse through children
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

  constructor() {
    this.containerId = this.generateContainerId();
    this.rendered = false;
    this.hydrated = false;
  }

  generateContainerId() {
    const childClassName = this.constructor.name;

    Component.idCounters[childClassName] =
      Component.idCounters[childClassName]
        ? Component.idCounters[childClassName] + 1
        : 1;

    return `${childClassName}_${Component.idCounters[childClassName]}`;
  }

  renderToString() {
    this.rendered = true;
    return `<div class="${this.containerId}" >
      ${this.render()}
    </div>`;
  }

  hydrate() {
    // hydrate component
    this.container = document.querySelector(`.${this.containerId}`);
    if ( this.setupEvents ) this.setupEvents();

    // hydrate component's children
    if ( this.children ) callFunctionOnAllChildren('hydrate')(this.children);
    this.hydrated = true;

    // post hydrate hook
    if ( this.postHydrate ) this.postHydrate();
  }

  updateDom() {
    morphdom(this.container, this.renderToString());

    // post update hook
    if ( this.postUpdate ) this.postUpdate();
  }
}

export default Component;
