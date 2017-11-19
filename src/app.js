import PageLayout from './components/PageLayout/PageLayout';
import HomePage from './pages/HomePage/HomePage';
// import domSerialize from 'dom-serialize';


const rootNode = document.getElementById('root');
let layout = null;

function bootstrap() {
  layout = new PageLayout({
    Page: HomePage,
    container: rootNode,
  });
  layout.renderToDOM();
}

bootstrap();

// Global handler, causes
if ( module.hot ) {
  module.hot.accept([
    './pages/HomePage/HomePage',
    './components/PageLayout/PageLayout',
  ], () => {
    bootstrap();
  });
}
