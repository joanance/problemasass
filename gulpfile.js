const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass ({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout(function() {
        console.log("executando via Gulp");
        callback();
    }, 2000);
}

function dizOi(callback) {
    setTimeout(function() {
        console.log("Olá gulp");
        dizTchau();
        callback();
    }, 1000);
}

function dizTchau() {
    console.log("tchau gulp")
}

exports.default = gulp.parallel (funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass =  compilaSass;