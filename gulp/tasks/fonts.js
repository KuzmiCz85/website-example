// Gulp task: fonts
// Description: copy fonts to target folder
// Dependecies: none

const config = require('../config');

module.exports = function(gulp, plugins) {
  return function() {
    const stream =
    // Stream definition
      gulp.src(config.fonts.source)
      .pipe(gulp.dest(config.fonts.target));

    return stream;
  };
};
