'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Export our tasks.
module.exports = {

  // Copy Fonts
  copyFonts: function() {
    return src([
      './src/patterns/01-core/fonts/**/*',
      '!./src/patterns/01-core/fonts/*.scss'
    ])
      .pipe(dest('dist/fonts'));
  }
};
