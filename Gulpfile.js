var gulp     = require('gulp'),
sass         = require('gulp-ruby-sass'),
plumber      = require('gulp-plumber'),
autoprefixer = require('gulp-autoprefixer'),
browserSync  = require('browser-sync'),
reload       = browserSync.reload;

var name     = 'flexo',
src          = 'src/',
dist         = 'test/';


gulp.task('styles', function(){
	gulp.src(['./*.scss', 'libs/*.scss', 'partials/*.scss'])
	.pipe(plumber())
	.pipe(sass({style: 'compressed', "sourcemap=none": true }))
	.pipe(sass({style: 'compressed'}))
	.pipe(autoprefixer('last 2 version'))
	.pipe(gulp.dest(dist + 'css/'))
	.pipe(reload({stream:true}));
});


gulp.task('html', function () {
	gulp.src(dist+'*.html')
	.pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./test"
		}
	});
});


gulp.task('watch', function(){
	gulp.watch(['./*.scss', 'libs/*.scss', 'partials/*.scss'], ['styles']);
	gulp.watch('test/*.html', ['html']);
});

gulp.task('default', ['styles', 'watch', 'browser-sync']);
