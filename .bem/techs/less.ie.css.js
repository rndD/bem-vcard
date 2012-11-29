var BEM = require('bem');

exports.baseTechPath = require.resolve('./less.css');

exports.techMixin = {

    getSuffixes : function() {
        return ['ie.css'];
    }

};

