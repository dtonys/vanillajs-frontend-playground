import PageLayout from './components/pageLayout/pageLayout';

const rootEl = document.getElementById('root');
const PageLayoutInstance = new PageLayout();
PageLayoutInstance.setContainer(rootEl);
PageLayoutInstance.renderToDOM();
