import './helpers/history';
import PageLayout from './components/PageLayout/PageLayout';
import {
  onPathChange,
  getRouteData,
} from 'helpers/router';


const rootNode = document.getElementById('root');
let layout = null;


const renderPageAndLayout = () => {
  const { page } = getRouteData();

  // Initialize objects
  layout = new PageLayout({ Page: page });

  // Rendering phase
  const htmlString = layout.renderToString();
  rootNode.innerHTML = htmlString;
  // Hydration phase
  layout.hydrate();
};

const switchPage = () => {
  const { page } = getRouteData();
  layout.switchPage(page);
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
