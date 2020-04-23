var gulp = require('gulp');
var watch = require('gulp-watch');
var exec = require('child_process').exec;
var gutil = require('gulp-util');

var src = "D:/dev/codingGame/oceanOfCode/src/main/java/oceanOfCode";
var playerPath = src + "/Player.java";
var dest = "D:\\dev\\codingGame\\oceanOfCode\\target";
var filebuilder = "java -jar ../../../target/filebuilder.jar ";


gulp.task('build', function () { return console.log('Finish!'); });

gulp.task('concat', function() {
	exec(filebuilder + ' "' + playerPath + '" "' + dest +'"', 
        function cb(err, stdout, stderr) {
            gutil.log('concat:' + stdout); // outputs the normal messages
            gutil.log('concat error:' + (stderr == null)); // outputs the error messages
        }	
	);

    
});

gulp.task('compile', function() {
	exec('javac "' + dest + '\\Player.java" -d "'+ dest +'\\compiled"', function cb(err, stdout, stderr) {
		gutil.log('compile:' + stdout); // outputs the normal messages
        gutil.log('compile error:' +stderr); // outputs the error messages 
	}	
	);
    
   
});


gulp.task('default', function() {
   gutil.log('Watching ' + src +'/**/*.java'); 
   return watch(src +'/**/*.java*', gulp.series('concat', 'compile', 'build'));
});