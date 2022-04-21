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
        './src/patterns/01-core/fonts/*.woff',
        './src/patterns/01-core/fonts/*.woff2',
        './src/patterns/01-core/fonts/*.eot',
        './src/patterns/01-core/fonts/*.ttf',
        './src/patterns/01-core/fonts/*.svg'
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
