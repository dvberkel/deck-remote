var assert = require("assert");
var repository = require("../lib/repository");

describe("A Repository", function(){
    it("should not hold any objects to start with", function(){
	var repo = repository();
	var count = 0;

	repo.each(function(object){ count++ });

	assert.equal(count, 0);
    });

    it("should store any object", function(){
	var repo = repository({
	    "uid" : function(){ return -1; }
	});

	var id = repo.store({ "any" : "object" });
	
	assert.deepEqual(repo.retrieve(id), { "any" : "object", "_id" : -1 });
    });

    it("should return undefined for unknown id", function(){
	var repo = repository();
	
	assert.ok(repo.retrieve("unknown id") === undefined);
    });
});