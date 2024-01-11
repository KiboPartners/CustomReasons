var path = require('path');
module.exports = function(grunt) {
    grunt.registerMultiTask('manifest', 'Compiles the `functions.json` manifest for the Mozu Actions Framework to read which custom functions are extended.', function () {
        var manifest = this.files.reduce(function (functionsManifest, conf) {
            var manifestName = conf.orig.src[0].replace(/\.js$/,'')
            console.log('manifestName', manifestName)
            var index = require("../"+manifestName);
            return functionsManifest.concat(Object.keys(index).map(function (key) {
                return {
                    id: key,
                    virtualPath: conf.orig.dist,
                    actionId: index[key].actionName
                };
            }));
        }, []);
        grunt.file.write('./assets/functions.json', JSON.stringify({ exports: manifest }, null, 2));
        grunt.log.ok('Wrote ' + manifest.length + ' custom functions to functions.json');
    });
};