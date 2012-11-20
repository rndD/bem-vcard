var extend = require('bem/lib/util').extend,
    PRJ_TECHS = '../../',
    PATH = require('path'),
    CUSTOM_TECHS = '../../bem-techs/';
    BEMBL_TECHS = '../../bem-bl/blocks-common/i-bem/bem/techs';

exports.getTechs = function() {
    return {
        'bemjson.js': '',
        'bemdecl.js': 'bemdecl.js',
        'deps.js': 'deps.js',
        'js': 'js-i',
        //'css': PATH.join(CUSTOM_TECHS, 'css.js'),
        //'ie.css': PATH.join(CUSTOM_TECHS, 'ie.css.js'),
        'css': 'css',
        'ie.css': 'ie.css',
        'bemhtml': PATH.join(BEMBL_TECHS, 'bemhtml.js'),
        'html': PATH.join(BEMBL_TECHS, 'html.js')
    }
}

exports.getConfig = function() {
    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../blocks',
        ])
    });

};
