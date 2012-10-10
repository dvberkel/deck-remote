var extend = require("./util").extend;

var Repository = function(options){
    this._uid = options.uid;
    this._objects = {};
};

Repository.prototype.each = function(callback){
    var self = this;
    Object.keys(self._objects).forEach(function(id){
	callback.call(null, self._objects[id]);
    });
};

Repository.prototype.store = function(object, forced_id){
    var id = forced_id || this._uid();
    object["_id"] = id;
    this._objects[id] = object;
    return id;
};

Repository.prototype.retrieve = function(id){
    return this._objects[id];
};

module.exports = function(options){
    options = extend(options, { "uid" : (function(){
	var id = 0;
	return function(){
	    return id++;
	}
    })() });
    return new Repository(options);
}