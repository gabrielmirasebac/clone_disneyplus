const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles(){
    return gulp.src('./src/styles/*.scss') //recupera os arquivos desejados para compilacao
    .pipe(sass({ outputStyle:'compressed'})) //estilo de saido do sass vai ser comprimido
    .pipe(gulp.dest('./dist/css')) //destino dos arquivos comprimidos
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel([styles]))
}