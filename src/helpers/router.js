import history from 'helpers/history';
import HomePage from 'pages/HomePage/HomePage';
import FormsPage from 'pages/FormsPage/FormsPage';
import SearchTVPage from 'pages/SearchTVPage/SearchTVPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import StaticPage from 'pages/StaticPage/StaticPage';


// https://github.com/ReactTraining/history#listening
export const HISTORY_PUSH = 'PUSH';
export const HISTORY_POP = 'POP';
export const HISTORY_REPLACE = 'REPLACE';

// map routes to pageComponents
const pathToComponentMap = {
  '/': HomePage,
  '/form': FormsPage,
  '/search-tv': SearchTVPage,
  '/static': StaticPage,
};

/**
 * Get the component corresponding to the current path
 */
export function getCurrentPageFromPath() {
  let Page = pathToComponentMap[history.location.pathname];
  if ( !Page ) {
    Page = NotFoundPage;
  }
  return Page;
}

/**
 * Add listener to path change
 */
const onPathChangeListeners = [];
export function onPathChange( fn ) {
  onPathChangeListeners.push( fn );
}


/**
 * Initialize router
 */
let lastPath = history.location;
history.listen((location /* , action */) => {
  // location is an object like window.location
  const pathChanged = ( location.pathname !== lastPath );
  if ( pathChanged ) {
    lastPath = location.pathname;
    onPathChangeListeners.forEach( (listener) => listener() );
  }
});

/**
 * Link helpers
 */
function setupLinkOnDOMNode( node, fullReload ) {
  node.addEventListener('click', (event) => {
    // Allow ctr + click (mac) to open a new tab for <a> tags
    if ( event.defaultPrevented || event.metaKey || event.ctrlKey ) {
      return;
    }
    event.preventDefault();
    const href = event.target.getAttribute('href');
    if ( fullReload ) {
      window.location.href = href;
      return;
    }
    history.push(href);
  });
}

export function setupLinks( nodes, fullReload ) {
  let nodeArray = nodes;
  if ( !Array.isArray(nodes) ) {
    nodeArray = [ nodes ];
  }
  nodeArray.forEach(( node ) => {
    setupLinkOnDOMNode(node, fullReload);
  });
}

export function setupLinksOnHrefChildren( containerNode ) {
  setupLinks([
    ...containerNode.querySelectorAll('[href]'),
  ]);
}
