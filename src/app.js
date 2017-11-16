import PageLayout from './components/PageLayout/PageLayout';
import HomePage from './pages/HomePage/HomePage';

const layout = new PageLayout({
  Page: HomePage,
  container: document.getElementById('root'),
});
layout.renderToDOM();
