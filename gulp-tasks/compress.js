'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const rename = require('gulp-rename');
const squoosh = require('gulp-libsquoosh');

// Export our tasks.
module.exports = {

  // Compress svg/png/jpg files.
  compressAssets: function() {
    return src([
      './src/patterns/{03-layouts,04-components}/**/*{.gif,.png,.jpg,.svg}'
    ])
      .pipe(squoosh())
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('dist/images'));
  }
};
