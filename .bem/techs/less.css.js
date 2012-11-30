var BEM = require('bem'),
    Q = BEM.require('q');

exports.baseTechName = 'css';

exports.techMixin = {

    getSuffixes : function() {
        return ['css'];
    },

    storeBuildResults: function(prefix, res) {
        var _this = this;
        return Q.when(res, function(res) {
            return Q.all(_this.getBuildSuffixes().map(function(suffix) {
                return _this.storeBuildResult(_this.getPath(prefix, suffix), suffix, res[suffix]);
            })).get(0);
        });
    }

};

