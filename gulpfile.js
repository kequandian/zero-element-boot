const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('babel', () => {
  return gulp.src(['./src/components/**/*.js', './src/components/**/*.jsx'])
    .pipe(babel({
      presets: ['@babel/preset-react'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['module-resolver', {
          root: ['.'],
          alias: {
            '@': './src/'
          }
        }]
      ]
    }))
    .pipe(gulp.dest('lib/components'))
});

gulp.task('copy-css', function () {
  return gulp.src('./src/components/**/*.css').pipe(gulp.dest('./lib/components'));
});
gulp.task('copy-less', function () {
  return gulp.src('./src/components/**/*.less').pipe(gulp.dest('./lib/components'));
});
gulp.task('copy-png', function () {
  return gulp.src('./src/components/**/*.png').pipe(gulp.dest('./lib/components'));
});
gulp.task('copy-mjs', function () {
  return gulp.src('./src/components/**/*.mjs').pipe(gulp.dest('./lib/components'));
});
gulp.task('copy-assets', function () {
  return gulp.src('./src/assets/').pipe(gulp.dest('./lib'));
});

const copyResources = gulp.parallel('copy-css', 'copy-less', 'copy-png', 'copy-mjs');

gulp.task('concat-css', () => {
  return gulp.src('./src/components/**/*.css')
    .pipe(concat('index.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default',
  gulp.series(
    'babel',
    copyResources,
    // 'concat-css',
  ));