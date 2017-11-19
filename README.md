# vanillajs-frontend-playground

Boilerplate for pure JS projects.

### Run

`npm run dev` // Run in dev mode

`npm run build` // Compile production assets

`npm run start` // Run in production mode


### Foundation

  * ES6 Javascript transpilation(`babel-loader` + `.babelrc`)
  * ESLint extending (`eslint-config-airbnb-base` + `.eslintrc.js`)


  * SASS(SCSS) with variables and mixins
  * Local scope css via css modules (`css-loader` with `modules: true`)
  * Autoprefix cross browser CSS (`postcss-loader` + `autoprefixer`)


  * Hot Module Replacement via explicit hooks(`module.hot`)


  * Minification for CSS(`OptimizeCSSAssetsPlugin`)
  * Minification for JS(`BabelMinifyWebpackPlugin`)
  * Vendor assets extracted(`CommonsChunkPlugin`)
  * Clear dist directory before build(`CleanWebpackPlugin`)


  * `index.html` with assets injected via `HtmlWebpackPlugin`
  * Express serving webpack-(dev|hot)-middleware in dev mode
  * Express serving `public/dist/index.html` in production


### Features
  * Class Based Component System
    * Layout -> Page -> Component setup

  * **Forms**
    * Integrate all standard input types
    * Validation + Normalization utils
    * Submit and error handling

  * **AJAX**
    * Setup 3rd party public API
    * Integrate standard `fetch` API
    * Demonstrate async / await functionality

  * **Single Page App Routing**
    * Dynamic import with code splitting

  * **Cookie**
    * Get and set cookie

  * **DOM Utils**


### Ideas
  - Isomorphic rendering
  - Authentication and redirection based on user roles
  - Component styleguide
  - Redux integration

