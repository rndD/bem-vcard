//process.env.YENV = 'production';
MAKE.decl('Arch', {


    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            }
        };

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'less.css',
            'less.ie.css',
            'bemhtml',
            'i18n',
            'i18n.js',
            'html'
        ];
    },

    'create-i18n.js-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);

    },

    'create-less.css-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-css-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);
    },

    'create-html-optimizer-node': function(tech, sourceNode, bundleNode) {
        return this.createBorschikOptimizerNode('.borschik/techs/html', sourceNode, bundleNode);
    },

    'create-less.ie.css-optimizer-node': function(tech, sourceNode, bundleNode) {

        sourceNode.getFiles().forEach(function(f) {
            this['create-css-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);

    }
});
