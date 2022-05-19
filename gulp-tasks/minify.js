'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const rename = require('gulp-rename');
const gulpCleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Export our tasks.
module.exports = {

  // Minify CSS
  minifyCSS: function() {
    return src('./dist/css/all.css', {"allowEmpty": true})
      .pipe(gulpCleanCSS({compatibility: 'ie8'}))
      .pipe(rename('all.min.css'))
      .pipe(dest('./dist/css'));
  },

  // Minify JS
  minifyJS: function() {
    return src('./dist/js/all.js', {"allowEmpty": true})
      .pipe(uglify())
      .pipe(rename('all.min.js'))
      .pipe(dest('./dist/js'));
  }
};
