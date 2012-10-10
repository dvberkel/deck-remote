exports.extend = function(target, extension){
    var result = target || {};
    for (var key in extension) {
	if (result[key] == undefined) {
	    result[key] = extension[key];
	}
    };
    return result;
};
