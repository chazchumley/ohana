// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins.
const concat = require('gulp-concat');
const order = require('gulp-order');
var sourcemaps = require('gulp-sourcemaps');

// Export our tasks.
module.exports = {

  // Concat all CSS into a master bundle.
  concatCSS: function () {
    return (
      src([
        './dist/css/*.css',
        '!./dist/css/all.css',
        '!./dist/css/pattern-scaffolding.css'
      ])
        .pipe(sourcemaps.init())
        .pipe(order([
          'dist/css/global.css',
          'dist/css/*.css'
        ], { base: './' }))
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(dest('./dist/css'))
    );
  },

  // Concat all JS into a master bundle.
  concatJS: function() {
    return (
      src([
        './dist/js/*.js',
        '!./dist/js/all.js'
      ])
        .pipe(concat('all.js'))
        .pipe(dest('./dist/js'))
    );
  }
};
