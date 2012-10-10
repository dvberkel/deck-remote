var assert = require("assert");
var factory = require("../lib/message_factory");

describe("A Message Factory", function(){
    it("should create a message for 'next'", function(){
	var message_for = factory();

	var message = message_for("next");

	assert.deepEqual(message, { "action": "next" });
    });

    it("should create a message for 'previous'", function(){
	var message_for = factory();

	var message = message_for("previous");

	assert.deepEqual(message, { "action": "previous" });
    });

    it("should throw on unrecognized commands", function(){
	var message_for = factory();

	assert.throws(function(){
	    message_for("unknown command")
	}, "unknown command");
    });

    it("should allow configuration of known command", function(){
	var message_for = factory({ "known_commands": [ "up" ] });


	var message = message_for("up");

	assert.deepEqual(message, { "action": "up" });
    });

    it("should allow configuration of thrown exception", function(){
	var message_for = factory({ "exception": "custom exception" });

	assert.throws(function(){
	    message_for("unknown command")
	}, "custom exception");
    });

    it("should allow configuration of verb used", function(){
	var message_for = factory({ "verb": "command" });


	var message = message_for("next");

	assert.deepEqual(message, { "command": "next" });
    });
});