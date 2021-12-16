'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const rename = require('gulp-rename');

// Export our tasks.
module.exports = {

  // Move any fonts to where Pattern Lab is lookinging for them.
  moveFonts: function() {
    return src(
      [
        './src/patterns/02-base/fonts/**/*.woff',
        './src/patterns/02-base/fonts/**/*.woff2',
        './src/patterns/02-base/fonts/**/*.eot',
        './src/patterns/02-base/fonts/**/*.ttf',
        './src/patterns/02-base/fonts/**/*.svg'
      ],
      { base: './' }
    )
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('./dist/fonts'));
  }
};
