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

exports.specific = function(req, res){
    var presentation = presentations.retrieve(req.params.id) || {};
    res.json(presentation);
}

exports.command = function(req, res){
    var presentation = presentations.retrieve(req.params.id) || {};
    console.log(req.query);
    res.json({ "status" : "ok" })
}