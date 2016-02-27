var dest = './dist';
var src = './src';
var gutil = require('gulp-util');
var historyApiFallback = require('connect-history-api-fallback');

switch (process.env.PENNEO_ENV) {
    case "production":
        dest = './dist-prod';
        break;
    case "sandbox":
        dest = './dist-sandbox';
        break;
    case "development":
        dest = './dist';
        break;
    default:
        dest = './dist';
}

if (process.env.PENNEO_DEV) {
    dest = './dist';
}

module.exports = {
    vars: {
        dest: dest,
        src: src
    },
    clean: {
        target: dest
    },
    rev: {
        src: dest,
        base: dest,
        index: dest + '/index.html',
        dist: dest,
        js: {
            app: dest + '/js/index.js',
            vendor: dest + '/js/vendor.js',
            dest: dest + '/js'
        },
        styles: {
            src: dest + '/styles/main.css',
            dest: dest + '/styles'
        }
    },
    // @see : https://www.browsersync.io/docs/options/
    sync: {
        port: 9000,
        // Open the localhost URL
        open: "local",
        // management UI for connected devices.
        ui: {
            port: 9999,
            weinre: {
                port: 9191
            }
        },
        server: {
            baseDir: dest,
            proxy: 'localhost:9000',
            middleware: [historyApiFallback()]
        },
        // mirrored features on connected devices.
        ghostMode: {
            clicks: false,
            forms: false,
            scroll: true
        },
        // Log connections
        logConnections: true,
        // Log information about changed files
        logFileChanges: true,
        // Don't show any notifications in the browser.
        notify: false
    },
    docs: {
        dest: dest + '/docs/',
        root: dest + '/docs/',
        host: 'localhost',
        port: 8081,
        groups: {
            colors: 'Color Scheme',
            sizing: 'Sizing & Spacing',
            inputs: 'Inputs',
            fonts: 'Font Settings',
            breakpoints: 'Breakpoints'
        }
    },
    sass: {
        src: src + '/styles/**/*.{sass,scss,css}',
        dest: dest + '/styles',
        settings: {
            errLogToConsole: true,
            indentedSyntax: false, // Enable .sass syntax?
            imagePath: '/images' // Used by the image-url helper
        }
    },
    browserify: {
        settings: {
            transform: ['babelify', 'reactify']
        },
        src: src + '/js/index.jsx',
        dest: dest + '/js',
        outputName: 'index.js',
        debug: gutil.env.type === 'dev'
    },
    html: {
        src: 'src/index.html',
        dest: dest
    },
    fonts: {
        src: [
            'src/fonts/**/**.*'
        ],
        dest: dest + '/fonts'
    },
    wiredep: {
        src: 'src/index.html',
        dest: dest
    },
    scripts: {
        src: ['bower_components/**/**.js'],
        dest: dest + '/lib'
    },
    images: {
        src: 'src/images/**/**.*',
        dest: dest + '/images'
    },
    watch: {
        styles: {
            src: src + '/styles/**/*.{sass,scss,css}',
            tasks: ['styles'] // skip reloading for live styling updates.
        },
        html: {
            src: src + '/*.html',
            tasks: ['reload:html']
        },
        scripts: {
            src: src + '/js/**/*.*',
            tasks: ['reload:scripts']
        },
        images: {
            src: src + '/images/**/*.*',
            tasks: ['reload:images']
        },
        fonts: {
            src: src + '/fonts/**/*.*',
            tasks: ['reload:fonts']
        }
    },
    build: {
        css: dest + '/styles',
        js: dest + '/js'
    }
};
