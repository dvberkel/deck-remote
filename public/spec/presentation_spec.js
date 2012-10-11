describe("A Presentation", function(){
    it("should be a constructor", function(){
	var presentation = new dr.Presentation();

	expect(presentation).toBeDefined();
    });

    it("should have a default '_id'", function(){
	var presentation = new dr.Presentation();

	expect(presentation.get("_id")).toBe(null);
    })
});

describe("Presentations", function(){
    it("should be a constructor", function(){
	var presentations = new dr.Presentations();

	expect(presentations).toBeDefined();
    });

    it("should accept naked objects and turn them into Presentations", function(){
	var presentations = new dr.Presentations();

	presentations.add({ "_id" : "peanut butter"})

	expect(presentations.at(0).get("_id")).toBe("peanut butter");
    });
});

describe("PresentationsView", function(){
    var presentations;

    beforeEach(function(){
	presentations = new dr.Presentations();
	presentations.add({ "_id" : 0 });
	presentations.add({ "_id" : 1 });
	presentations.add({ "_id" : 2 });
    });

    beforeEach(function(){
	loadFixtures("presentation-fixture.html");
    });

    it("should create an unordered list", function(){
	new dr.PresentationsView({ "el" : $("#presentations"), "model" : presentations });

       expect($("#presentations")).toContain("ul");
    });

    it("should create a list item for each model", function(){
	new dr.PresentationsView({ "el" : $("#presentations"), "model" : presentations });

	expect($("#presentations ul li").size()).toBe(3);
    });

    it("should rerender when an model is added", function(){
	new dr.PresentationsView({ "el" : $("#presentations"), "model" : presentations });

	presentations.add({ "_id" : 4 })

	expect($("#presentations ul li").size()).toBe(4);
    });

    it("should rerender when an model is removed", function(){
	new dr.PresentationsView({ "el" : $("#presentations"), "model" : presentations });

	presentations.pop();
	
	expect($("#presentations ul li").size()).toBe(2);
    });
    
    describe("a list item", function(){
	it("should hold the id", function(){
	    new dr.PresentationsView({ "el" : $("#presentations"), "model" : presentations });

	    expect($("#presentations ul li").first()).toHaveText("0");
	});
    });
});

describe("A PresentationView", function(){
    var presentation;

    beforeEach(function(){
	presentation = new dr.Presentation({ "_id" : 1 });
    });

    beforeEach(function(){
	loadFixtures("presentation-fixture.html");
    });

    it("should create a span", function(){
	new dr.PresentationView({ el : $("#presentations"), model: presentation });

	expect($("#presentations")).toContain("span");
    });

    describe("span", function(){
	it("should hold id", function(){
	    new dr.PresentationView({ el : $("#presentations"), model: presentation });

	    expect($("#presentations span")).toHaveText("1");
	});
    });
});
