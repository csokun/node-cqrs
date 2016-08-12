var path = require('path');

module.exports.loader = function (domain) {       
    var root = path.join(__dirname, domain);
    var commandsPath = path.join(root, 'Commands');
    var queriesPath =   path.join(root, 'Queries');

    return {
        Commands: loadFrom(commandsPath),
        Queries: loadFrom(queriesPath)
    };
};

function loadFrom(dirname) {
    var fs = require('fs');
    var actions = {};

    var files = fs.readdirSync(dirname);
    for(var i = 0; i < files.length; i++) {
        var _mod = require( path.join(dirname, files[i].replace('.js', '')));
        
        actions[_mod.actionName] = _mod.execute;
    }

    return actions;
}
