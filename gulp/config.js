// Name: Gulp devstack configuration module
// Description: external config file for gulpfile.js
//  or external task files

// Distribution folder
const dist = 'build';

// Task settings
module.exports = {

  // new-task
  newTask: {
    source: './gulp/utility/new-task.template.js',
    filename: 'empty-task.js',
    target: './gulp/tasks/'
  },

  // browsersync
  browserSync: {
    url: 'http://website-example.test',
    browser: 'default'
  },

  // clean
  clean: {
    target: {
      files: `${dist}/**/*.*`,
      folders: `${dist}/**/`
      }
  },

  // css
  css: {
    source: './source/sass/main.scss',
    target: `${dist}/css/`,
    filename: 'style.css',
    watch: [
      './source/sass/**/*.scss',
      './source/components/**/*.scss'
    ],
    components: [
      './source/sass/**/*.scss',
      './source/components/**/*.scss']
  },

  // js
  js: {
    source: './source/js/script.js',
    target: `${dist}/js/`,
    filename: 'script.js',
    watch: './source/js/**/*.js'
  },

  // html
  html: {
    source: './source/components/pages/*.{html,htm,php}',
    target: `${dist}/`,
    watch: './source/components/**/*.{html,htm,php,njk}',
    components: './source/components/'
  },

  // images
  img: {
    source: './source/images/**/*.{gif,jpg,jpeg,png}',
    target: `${dist}/images/`
  }
};
