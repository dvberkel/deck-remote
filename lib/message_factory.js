var _ = {
    "extend" : function(target, extension){
	var result = target || {};
	for (var key in extension) {
	    if (result[key] == undefined) {
		result[key] = extension[key];
	    }
	};
	return result;
    }
};

var does = function(an_array) {
    return {
	"contain": function(element){
	    return an_array.indexOf(element) != -1;
	}
    };
};

var factory = function(options){
    var options = _.extend(options, {
	"known_commands" : ["next", "previous"],
	"exception" : "unknown command",
	"verb" : "action"
    });
    var is_known = does(options.known_commands).contain;
    return function(command){
	if (!is_known(command)) {
	    throw options.exception;
	}
	var result = {};
	result[options.verb] = command;
	return result;
    }
};

module.exports = factory;