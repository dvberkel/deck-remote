(function(Backbone, dr, undefined){
    var Presentation = Backbone.Model.extend({
	"defaults" : {
	    "_id" : null
	},
    });

    var Presentations = Backbone.Collection.extend({
	model : Presentation
    });
    
    dr.Presentation = Presentation;
    dr.Presentations = Presentations;
})(Backbone, dr);
