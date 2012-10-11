(function(_, $, dr, undefined){
    var id = $.url().param("id") || -1;

    var presentation = new dr.Presentation();
    $.ajax({
	"url": "/" + id,
	"success" : function(data){
	    presentation.set(data);
	},
	"error": function(){
	    console.log("unable to retrieve data");
	}
    });

    $(function(){
	new dr.PresentationView({ "el" : $("#presentation"), "model": presentation });
    });

})(_, jQuery, dr);