// npm install --seve-dev para instalar las dependencias!

// Aqui importamos las dependencias necesarias!
const gulp = require('gulp'),
	pug = require('gulp-pug'),
	//sass = require('gulp-sass'),
	//autoprefixer = require('gulp-autoprefixer'),
	//cssnano = require('gulp-cssnano'),
	browserSync = require('browser-sync').create();

const { watch, series, src, dest } = require('gulp');

function pugToHTML(cb) {
	src('./pug/*.pug')
	.pipe(pug({
		pretty: true //boolean false por defecto modo comprimido
	}))
	.pipe(dest('./')) //esta es guardada en la carpeta ./dist/ en este mismo directorio
  cb();
}

// function javascript(cb) {
//   // body omitted
//   cb();
// }



exports.default = function() {
	browserSync.init({
		server: './'
	});
	// You can use a single task
	watch('./css/*.css').on('change',browserSync.reload);
	// Or a composed task
	watch('pug/*.pug', series(pugToHTML));
	// watch('src/*.js', series(javascript));
};