# About Ohana

Ohana is a custom Drupal theme which is compatible with Drupal 9 & 10.

Ohana is built using [Storybook](https://storybook.js.org/) and [Vite](https://vitejs.dev/)
with the help of many NodeJS packages to improve automation and make use of the latest Front-End tooling.

## Useful commands

There are several custom npm commands that allows developers to build and run different
tasks during and after development. These commands can be found in `package.json`.
The most common ones to use include:

* `npm run build-storybook`: This will run `vite build` and `storybook build`. Together this command wipes out any existing compiled assets and recompiles the theme with fresh assets.
  * Compress assets to optimize images.
  * Linting tasks for both CSS and JS.
  * Compiles CSS and JS and pretify them.
  * Combines CSS and JS assets respectively for improved performance.
  * Builds a static storybook instance

* `npm run start`: This is the command used the most as it allows developers to run it in the background to watch for file changes, compile the code and perform hot reloads along with a Storybook instance in the browser. File changes include CSS, JS, Twig, YAML.

## Design system
Ohana uses [Storybook](https://storybook.js.org/) as its design system and that's where all components on the sites are originally built and maintained.  Storybook can be accessed on its own by running `npm run storybook` and navigating to `http://localhost:6006`.

## Development approach
Ohana is built using the latest development practices for CSS, JS, Twig, and React.  Within Ohana's Storybook, all components are built using BEM methodology for selector classes and ES6 for Javascript.  Components are built using the Atomic Design methodology but not necessarily using the same naming convention like atoms, molecules, organisms, etc.  Instead, it uses more friendly names like elements, components, collections, layouts, and pages.

## About Drupal Theming
For more information, see Drupal.org [theming guide](https://www.drupal.org/docs/develop/theming-drupal).
