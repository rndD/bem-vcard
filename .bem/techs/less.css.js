var BEM = require('bem'),
    Q = BEM.require('q');

exports.baseTechName = 'css';

exports.techMixin = {

    getBuildSuffixes : function() {
        return ['css'];
    },
};

