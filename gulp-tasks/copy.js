'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Export our tasks.
module.exports = {

  // Copy vendor JS to library
  copyVendorJS: function() {
    return src([
      './core/assets/vendor/domready/ready.min.js',
      './core/assets/vendor/jquery/jquery.min.js',
      './core/assets/vendor/jquery-once/jquery.once.min.js',
      './core/misc/drupalSettingsLoader.js',
      './core/misc/drupal.js',
      './core/misc/drupal.init.js'
      ])
      .pipe(dest('dist/vendor'));
  },

  // Copy vendor Fonts to library
  copyVendorFonts: function() {
    return src(['']).pipe(dest('dist/fonts'));
  },

  // Copy vendor Images to library
  copyVendorImages: function() {
    return src(['']).pipe(dest('dist/img'));
  },

  // Copy vendor CSS to library
  copyVendorCSS: function() {
    return src(['']).pipe(dest('dist/css'));
  }
};
