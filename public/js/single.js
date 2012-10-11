(function(_, $, dr, undefined){
    var id = $.url().param("id") || -1;
    var enabled = false;

    var presentation = new dr.Presentation();
    $.ajax({
	"url": "/" + id,
	"success" : function(data){
	    presentation.set(data);
	    enabled = true;
	},
	"error": function(){
	    console.log("unable to retrieve data");
	}
    });
    
    var query = function(params) {
	var pairs = [];
	for (var key in params) {
	    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
	}
	return pairs.join("&");
    }

    var post = function(command) {
	return function(){
	    if (enabled) {
		$.ajax({
		    "type" : "POST",
		    "url" : "/" + id + "?" + query({ "command" : command })
		});
	    }
	};
    };
    
    $(function(){
	new dr.PresentationView({ "el" : $("#presentation"), "model": presentation });
	$("#previous").click(post("previous"));
	$("#next").click(post("next"));
    });

})(_, jQuery, dr);