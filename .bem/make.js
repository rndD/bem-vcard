process.env.YENV = 'production';
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
            'bemhtml',
            'less.css',
            'less.ie.css',
            'i18n',
            'i18n.js',
            'html'
        ];
    },
    // for i18n.js.js technology optimization(to get files with underscore)
    'create-i18n.js-optimizer-node': function(tech, sourceNode, bundleNode) {

        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);

    }

});
