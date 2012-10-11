(function(_, $, dr, undefined){
    var presentations = new dr.Presentations();

    $.ajax({
	"url": "/",
	"success" : function(data){
	    _.each(data, function(proto){ presentations.add(proto); });
	},
	"error": function(){
	    console.log("unable to retrieve data");
	}
    });

    $(function(){
	new dr.PresentationsView({ "el": $("#presentations"), "model": presentations })
    });
})(_, jQuery, dr);