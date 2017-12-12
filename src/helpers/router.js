import history from 'helpers/history';
import HomePage from 'pages/HomePage/HomePage';
import FormsPage from 'pages/FormsPage/FormsPage';
import SearchTVPage from 'pages/SearchTVPage/SearchTVPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import StaticPage from 'pages/StaticPage/StaticPage';
import TodoPage from 'pages/TodoPage/TodoPage';
import UsersListPage from 'pages/UsersListPage/UsersListPage';


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
  '/todo': TodoPage,
  '/users': UsersListPage,
};

const patternToComponentMap = {
  '/users/:id': TodoPage,
};

/**
 * Match with params, returns data to be accepted by child component
 * Example: matchPath('/users/:id', '/users/12'); // => { id: '12' }
 * Example: matchPath('/users/me', '/users/me'); // => true
 * Example: matchPath('/users/:id', '/user');     // => false;
 * @param {string} [pattern] [Human readable route definition]
 * @param {string} [pathname] [A pathname to match and extract params from]
 * @return {Object|boolean} [A hash with params if matched, true if exact match, false if not matched]
 */
export function matchPath( pattern, pathname ) {
  if ( !pattern || !pathname ) return false;

  let params = null;

  // If exact match, return
  if ( pattern === pathname ) {
    return true;
  }

  // generateRE for pattern
  let patternRegexStr = pattern.replace(/:\w+/g, '(\\w+)');
  patternRegexStr = `^${patternRegexStr}\/$`;
  let patternRegex = new RegExp(patternRegexStr, 'g');

  // Exit if no pattern match
  if ( !patternRegex.test(pathname) ) return false;

  // get `:matches` in pattern, to get param keys
  const paramMatches = pattern.match(/:\w+/g);
  if ( !paramMatches ) {
    return false;
  }

  // remove the `:` from paramMatches
  const paramKeys = paramMatches.map(( paramKey ) => ( paramKey.slice(1) ));

  // Extract regex parenthesized substring matches to get param values
  // Reset regex state for exec
  patternRegex = new RegExp(patternRegexStr, 'g');
  const result = patternRegex.exec(pathname);
  if ( result ) {
    if ( paramKeys.length ) params = {};
    paramKeys.forEach(( key, index ) => {
      params[paramKeys[index]] = result[index + 1];
    });
  }
  return {
    pattern,
    params,
  };
}

/**
 * Add listener to path change
 */
const onPathChangeListeners = [];
export function onPathChange( fn ) {
  onPathChangeListeners.push( fn );
}

/**
 * Router state,
 */
let currentPattern;
let currentParams;
let currentPageClass;
export function getRouteData() {
  return {
    pattern: currentPattern,
    params: currentParams,
    page: currentPageClass,
  };
}

function updatePatternAndParams() {
  // check matches path
  if ( pathToComponentMap[history.location.pathname] ) {
    currentPageClass = pathToComponentMap[history.location.pathname];
    currentPattern = history.location.pathname;
    currentParams = null;
    return;
  }
  // check matches pattern
  // eslint-disable-next-line
  for ( let pattern in patternToComponentMap ) {
    const component = patternToComponentMap[pattern];
    const match =  matchPath(pattern, history.location.pathname);
    if ( match ) {
      currentPageClass = component;
      currentPattern = pattern;
      currentParams = match.params ? match.params : null;
      return;
    }
  }
  // Not Found
  currentPageClass = NotFoundPage;
  currentPattern = history.location.pathname;
  currentParams = null;
}

/**
 * Initialize router
 */
let lastPath = history.location;
// initialize state
updatePatternAndParams();
// listen and react to route change
history.listen((location /* , action */) => {
  // location is an object like window.location
  const pathChanged = ( location.pathname !== lastPath );
  if ( pathChanged ) {
    lastPath = location.pathname;
    updatePatternAndParams();
    onPathChangeListeners.forEach( (listener) => listener() );
  }
});
