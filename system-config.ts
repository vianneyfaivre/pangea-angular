/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
declare var System: any;

System.config({
  paths: {
    // paths serve as alias
    'npm:': 'node_modules/'
  },
  // map tells the System loader where to look for things
  map: {
    // our app is within the app folder
    'app': 'app',
    '@angular': 'node_modules/@angular',
    'main': 'app/main.js',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',

    // other libraries
    'rxjs': 'npm:rxjs',
    'class-transformer': 'npm:class-transformer',
  },
  // packages tells the System loader how to load when no filename and/or no extension
  packages: {
    'app': { main: './main.js' },
    'api' : {},
    'rxjs': {},
    'class-transformer': { main: 'index.js' },

    // barrels https://angular.io/docs/ts/latest/glossary.html#!#barrel
    'app/model':   { main: 'index'},
    'app/service':   { main: 'index'},
    'app/util':   { main: 'index'},
  }
});