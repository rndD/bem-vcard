var extend = require('bem/lib/util').extend,
    PRJ_TECHS = '../../',
    PATH = require('path'),
    CUSTOM_TECHS = '../../.bem/techs',
    BEMBL_TECHS = '../../bem-bl/blocks-common/i-bem/bem/techs';

exports.getTechs = function() {
    return {
        'bemjson.js': '',
        'bemdecl.js': 'bemdecl.js',
        'deps.js': 'deps.js',
        'bemhtml': PATH.join(BEMBL_TECHS, 'bemhtml.js'),
        'i18n': PATH.join(BEMBL_TECHS, 'i18n.js'),
        'i18n.js': PATH.join(BEMBL_TECHS, 'i18n.js.js'),
        'less.css': PATH.join(CUSTOM_TECHS, 'less.css.js'),
        'less.ie.css': PATH.join(CUSTOM_TECHS, 'less.ie.css.js'),
        'html': PATH.join(BEMBL_TECHS, 'html.js')
    }
}

exports.getConfig = function() {
    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
        ])
    });

};
