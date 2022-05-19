'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

// Export our tasks.
module.exports = {

  // Compress svg/png/jpg files.
  compressAssets: function() {
    return src([
      './src/patterns/{03-layouts,04-components}/**/*{.gif,.png,.jpg,.svg}'
    ])
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
          plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
          ]
        })
      ]))
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('./dist/img'));
  }
};
