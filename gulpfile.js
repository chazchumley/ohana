'use strict';

// Include gulp helpers.
const { series, parallel, watch } = require('gulp');

// Include Pattern Lab and config.
const config = require('./patternlab-config.json');
const patternlab = require('@pattern-lab/core')(config);

// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
const { compileSass, compileJS } = require('./gulp-tasks/compile');
const { cleanCSS, cleanFonts, cleanImages, cleanJS } = require('./gulp-tasks/clean');
const { copyFonts } = require('./gulp-tasks/copy');
const { compressAssets } = require('./gulp-tasks/compress');
const { lintJS, lintSass } = require('./gulp-tasks/lint');
const { concatCSS, concatJS } = require('./gulp-tasks/concat');
const { minifyCSS, minifyJS } = require('./gulp-tasks/minify');
const server = require('browser-sync').create();

// Clean all directories.
exports.clean = parallel(cleanCSS, cleanFonts, cleanImages, cleanJS);

// Copy our fonts.
exports.copy = copyFonts;

// Compress Files.
exports.compress = compressAssets;

// Lint Sass and JavaScript.
exports.lint = parallel(lintSass, lintJS);

// Compile Our Sass and JS.
exports.compile = parallel(compileSass, compileJS);

// Concat all CSS and JS files into a master bundle.
exports.concat = parallel(concatCSS, concatJS);

// Minify all CSS and JS files.
exports.minify = parallel(minifyCSS, minifyJS);

/**
 * Start browsersync server.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function serve(done) {
  // See https://browsersync.io/docs/options for more options.
  server.init({
    // We want to serve both the patternlab directory, so it gets
    // loaded by default AND three directories up which is the
    // Drupal core directory. This allows urls that reference
    // Drupal core JS files to resolve correctly.
    // i.e. /core/misc/drupal.js
    server: ['./patternlab/', '../../../'],
    notify: false,
    open: false
  });
  done();
}

/**
 * Start Pattern Lab build watch process.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function watchPatternlab(done) {
  patternlab
    .build({
      cleanPublic: config.cleanPublic,
      watch: true
    })
    .then(() => {
      done();
    });
}

/**
 * Build Pattern Lab.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function buildPatternlab(done) {
  patternlab
    .build({
      cleanPublic: config.cleanPublic,
      watch: false
    })
    .then(() => {
      done();
    });
}

/**
 * Watch Sass and JS files.
 * @returns {undefined}
 */
function watchFiles() {
  // Watch all my sass files and compile sass if a file changes.
  watch(
    './src/patterns/**/**/*.scss',
    series(parallel(lintSass, compileSass), concatCSS, minifyCSS, (done) => {
      server.reload('*.css');
      done();
    })
  );

  // Watch all my JS files and compile if a file changes.
  watch(
    './src/patterns/**/**/*.js',
    series(
      parallel(cleanJS, lintJS, compileJS), concatJS, minifyJS, (done) => {
        server.reload('*.js');
        done();
      }
    )
  );

  // Watch all my images and SVG files and compile if a file changes.
  watch(
    './src/patterns/**/**/*{.png,.jpg,.svg}',
    series(
      parallel(compressAssets), (done) => {
        server.reload('*{.png,.jpg,.svg,.html}');
        done();
      }
    )
  );

  // Watch all my patterns and compile if a file changes.
  watch(
    './src/patterns/**/**/*{.twig,.yml}',
    series(
      parallel(buildPatternlab), (done) => {
        server.reload('*{.html}');
        done();
      }
    )
  );

  // Reload the browser after patternlab updates.
  patternlab.events.on('patternlab-build-end', () => {
    server.reload('*.html');
  });
}

// Watch task that runs a browsersync server.
exports.watch = series(
  parallel(cleanCSS, cleanJS),
  parallel(copyFonts),
  parallel(compressAssets),
  parallel(lintSass, lintJS),
  parallel(compileSass, compileJS),
  parallel(concatCSS, concatJS),
  parallel(minifyCSS, minifyJS),
  series(watchPatternlab, serve, watchFiles)
);

// Build task for Pattern Lab.
exports.styleguide = buildPatternlab;

// Default Task
exports.default = series(
  parallel(cleanCSS, cleanJS),
  parallel(copyFonts),
  parallel(compressAssets),
  parallel(lintSass, lintJS),
  parallel(compileSass, compileJS),
  parallel(concatCSS, concatJS),
  parallel(minifyCSS, minifyJS),
  buildPatternlab
);
