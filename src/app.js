import './helpers/history';
import PageLayout from './components/PageLayout/PageLayout';
import {
  onPathChange,
  getCurrentPageFromPath,
} from 'helpers/router';


const rootNode = document.getElementById('root');
let layout = null;

// renderToString();

const renderPageAndLayout = () => {
  const pageComponent = getCurrentPageFromPath();

  // Initialize objects
  layout = new PageLayout({ Page: pageComponent });
  // Rendering phase
  const htmlString = layout.renderToString();
  rootNode.innerHTML = htmlString;
  // Hydration phase
  layout.hydrate();
};

const switchPage = () => {
  const pageComponent = getCurrentPageFromPath();
  layout.switchPage(pageComponent);
};

onPathChange( switchPage );
renderPageAndLayout();

// Global handler, causes
if ( module.hot ) {
  module.hot.accept([
    // includes all page components
    'helpers/router',
    // include all layout components
    './components/PageLayout/PageLayout',
  ], () => {
    renderPageAndLayout();
  });
}
