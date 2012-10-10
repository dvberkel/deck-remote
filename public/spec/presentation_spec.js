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
});
