const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles(){
    return gulp.src('./src/styles/*.scss') //recupera os arquivos desejados para compilacao
        .pipe(sass({ outputStyle:'compressed'})) //estilo de saido do sass vai ser comprimido
        .pipe(gulp.dest('./dist/css')); //destino dos arquivos comprimidos
}

function images(){
    return gulp.src('./src/images/**/*') //recupera os arquivos desejados para compilacao
        .pipe(imagemin()) //estilo de saido do sass vai ser comprimido
        .pipe(gulp.dest('./dist/images')); //destino dos arquivos comprimidos
}

exports.default = gulp.parallel(styles,images, scripts);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*js', gulp.parallel(scripts))
}