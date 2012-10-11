(function(_, Backbone, dr, undefined){
    var Presentation = Backbone.Model.extend({
	"defaults" : {
	    "_id" : null
	},
    });

    var Presentations = Backbone.Collection.extend({
	model : Presentation
    });

    var ShortPresentationView = Backbone.View.extend({
	template : _.template("<li><%= _id %></li>"),

	initialize : function(){
	    this.render();
	},

	render : function(){
	    this.$el.append(this.template(this.model.toJSON()));
	}
    });

    var PresentationsView = Backbone.View.extend({
	initialize : function(){
	    this.model.bind("add", this.render, this);
	    this.model.bind("remove", this.render, this);
	    this.render();
	},

	render : function(){
	    this.$el.empty();
	    var list = $("<ul></ul>");
	    this.model.each(function(element){
		new ShortPresentationView({ "el": list, "model": element });
	    });
	    list.appendTo(this.$el);
	}
    });
    
    dr.Presentation = Presentation;
    dr.Presentations = Presentations;
    dr.PresentationsView = PresentationsView;
})(_, Backbone, dr);
