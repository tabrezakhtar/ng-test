var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var minifyCss = require('gulp-minify-css');
var htmlReplace = require('gulp-html-replace');
var dir = require('node-dir');
var os = require('os');
var isWin = os.platform() === 'win32';
var slash = isWin ? '\\' : '\x2F';
var forwardSlashWeb = '\x2F';

gulp.task('minify-app-scripts', function() {
  return gulp.src(['public/scripts/app/**/*.js'])
  	.pipe(concat('dist.js'))
  	.pipe(uglify())
    .pipe(gulp.dest('public/scripts/dist/'));
});

//for dev, point src to separate unminified scripts for easier debugging
gulp.task('create-dev-script-tags', function() {
    return dir.files('public/scripts/app',
	    function(err, files) {
	    	var filesList = [];
            if (err) throw err;
        
            for (var i = 0; i < files.length; i++) { 	
   				var splitter = files[i].split(slash);
   				splitter.splice(0, 1);
   				filesList.push(splitter.join(forwardSlashWeb));
   			}

			gulp.src(['public/music-player.html'])
		    .pipe(htmlReplace({
					js: filesList
				},
				{		
					keepBlockTags: true
				})
			)
    		.pipe(gulp.dest('public'));
	    });	
});

gulp.task('replace-dist-scripts', function(){
  gulp.src(['public/music-player.html'])
    .pipe(htmlReplace({
			js: 'scripts/dist/dist.js'
		},
		{		
			keepBlockTags: true
		})
	)
    .pipe(gulp.dest('public'));
});

gulp.task('build-release', function() {
  runSequence('minify-app-scripts','replace-dist-scripts');
});

gulp.task('build-dev', function() {
  runSequence('create-dev-script-tags');
});

gulp.task('default', function() {  
  gulp.start('build-dev', function() {
    console.log('Dev Build complete.');
  });
});