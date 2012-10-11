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

    var PresentationView = Backbone.View.extend({
	template : _.template("<span><%= _id %></span>"),

	initialize : function(){
	    this.model.bind("change", this.render, this);
	    this.render();
	},
	
	render : function(){
	    this.$el.empty();
	    this.$el.append(this.template(this.model.toJSON()));
	}
    });

    dr.Presentation = Presentation;
    dr.Presentations = Presentations;
    dr.PresentationsView = PresentationsView;
    dr.PresentationView = PresentationView;
})(_, Backbone, dr);
