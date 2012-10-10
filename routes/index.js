var repository = require("../lib/repository");

var presentations = repository();

exports.all = function(req, res){
    var all = [];
    presentations.each(function(presentation){
	all.push(presentation);
    });
    res.json(all);
}

exports.add = function(req, res){
    var presentation = {};
    var id = presentations.store(presentation);
    res.json({ "id" : id });
}