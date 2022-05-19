'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const gulpCleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

/**
 * Error handler function so we can see when errors happen.
 * @param {object} err error that was thrown
 * @returns {undefined}
 */
function handleError(err) {
  // eslint-disable-next-line no-console
  console.error(err.toString());
  this.emit('end');
}

// Export our tasks.
module.exports = {

  // Compile Sass.
  compileSass: function() {
    return src([
        './src/patterns/**/**/*.scss',
        './src/styleguide/*.scss'
      ])
      .pipe(sass.sync({
        includePaths: ['node_modules'],
        outputStyle: 'expanded'
      }).on('error', handleError))
      .pipe(prefix({ cascade: false }))
      .pipe(rename(function(path) { path.dirname = ''; return path;}))
      .pipe(dest('./dist/css'));
  },

  minifyCSS: function() {
    return src('./dist/css/all.css', {"allowEmpty": true})
      .pipe(gulpCleanCSS({compatibility: 'ie8'}))
      .pipe(rename('all.min.css'))
      .pipe(dest('./dist/css'));
  },

  // Compile JavaScript.
  compileJS: function() {
    return src(['./src/patterns/**/**/*.js'], { base: './' })
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(rename(function(path) { path.dirname = ''; return path; }))
      .pipe(sourcemaps.write('./'))
      .pipe(dest('./dist/js'));
  },

  minifyJS: function() {
    return src('./dist/js/all.js', {"allowEmpty": true})
      .pipe(uglify())
      .pipe(rename('all.min.js'))
      .pipe(dest('./dist/js'));
  }
};
