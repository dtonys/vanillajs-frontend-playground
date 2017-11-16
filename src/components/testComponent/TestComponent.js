import styles from './testComponent.css';

const render = ({ text }) => {
  return `
    <div class="${styles.testComponent}" >
      <div>${text} </div>
    </div>
  `;
};

export default ( el, text ) => {
  el.innerHTML = render({ text });
};

// hot reload css explicitely
if ( module.hot ) {
  module.hot.accept('./testComponent.css');
}
