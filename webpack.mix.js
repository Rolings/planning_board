const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JSs files.
 |
 */

mix.js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/admin/main.scss', 'public/css/admin');
mix.sass('resources/sass/main.scss', 'public/css');
mix.styles('resources/css/background.css', 'public/css/background.css');



mix.browserSync({
    proxy: 'http://plannin.gboard.loc'
});
if (mix.config.inProduction) {
    mix.version()
}
