# Getting Started

## System Requirements
The following Drupal contributed modules are required:
* _components_
* _twig_tweak_
* _twig_field_value_

## Browser Support
Autoprefixer & Babel is set to support the last 2 versions of modern browsers

These can be updated at any time within the `package.json`.

## Initialize a custom theme from Ohana by running this command within this directory:
`php ohana.php "[Theme Name]"` (where `[Theme Name]` is the name of your custom theme, e.g. `"My Theme"`)
This will result in a clone of this theme located at `themes/custom/[theme-name]` where `[theme-name]` is the machine-readable version of `"[Theme Name]"` entered above (which in the `"My Theme"` example would result in a machine name of `my-theme`). Use that theme to create any customizations for your site and refer back to this Ohana theme for any necessary updates in the future.

## Run the following commands from the theme directory
If you haven't yet, install nvm:
https://github.com/creationix/nvm

### Use the right version of node with:
`nvm use`

_This command will look at your `.nvmrc` file and use the version node.js specified in it. This ensures all developers use the same version of node for consistency._

### If that version of node isn't installed, install it with:
`nvm install`

### Install npm dependencies with
`npm install`

_This command looks at `package.json` and installs all the npm dependencies specified in it.  Some of the dependencies include gulp, autoprefixer, gulp-sass and others._

### Runs default task
`npm run build`

_This will run whatever the default task is._

### Compiles Sass
`npm run compile`

_This will perform a one-time Sass compilation._

### Runs the watch command
`npm run watch`

_This is ideal when you are doing a lot of Sass changes and you want to make sure every time a change is saved it automatically gets compiled to CSS_

### Cleans complied directory
`npm run clean`

_This will perform a one-time deletion of all compiled files within the dist/ directory._
