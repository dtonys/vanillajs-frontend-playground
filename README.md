# vanillajs-frontend-playground

Boilerplate for pure JS projects.

- Features
  - [x] **ES6**
    - [x] Transpilation via webpack + babel
  - [x] **ESLint**
    - [x] Extending `eslint-config-airbnb-base`, targeting modern ES6
  - [x] **CSS**
    - [x] Local scope css via webpack + css-modules
    - [x] Hot module replacement via explicit `module.hot` opt in
    - [ ] Sass ( .scss ) integration
      - [ ] Color variables
      - [ ] Example mixins
    - [ ] Autoprefixer
  - [x] **Express Server**
    - [x] Serving webpack-(dev|hot)-middleware, and static assets
  - [ ] **Class Based Component System**
    - [ ] Layout -> Page -> Component setup
  - [ ] **Forms**
    - [ ] Integrate all standard input types
    - [ ] Validation + Normalization utils
    - [ ] Submit and error handling
  - [ ] **AJAX**
    - [ ] Setup 3rd party public API
    - [ ] Integrate standard `fetch` API
    - [ ] Demonstrate async / await functionality
  - [ ] **Single Page App Routing**
    - [ ] Dynamic import with code splitting
  - [ ] **Cookie**
    - [ ] Get and set cookie
  - [ ] **DOM Utils**
  - [ ] **Webpack enhancements**
    - [ ] Better developer experience: Colors, Progress, etc...
    - [ ] Modular webpack setup via webpack.parts.js, webpack-merge, etc

Experiment ideas:
  - Isomorphic rendering
  - Non trivial authentication and redirection
  - Component styleguide