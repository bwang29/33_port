/* Zhengshan Kitty Shit Home Page 2013 */
var cur_tab_name = "home";

$(document).ready(function(){
	schedule(init_left);
	schedule(init_right);
	schedule(attach_tab_clicks);
});

function init_left(){
	var template = make_template("meta");
	$("#left").html(template(meta));
}

function init_right(){
	var tab_name = cur_tab_name.toLowerCase();
	console.log("rendering : "+tab_name);
	var template = make_template(tab_name);
	$("#right").html(template(eval(tab_name)));
}

function attach_tab_clicks(){
	$(".tab").first().addClass("active");
	$(".tab").click(function(){
		cur_tab_name = $(this).data("tab");
		$(".tab").removeClass("active");
		$(this).addClass("active");
		init_right();
	});
}

function schedule(func){
	setTimeout(func,0);
}

function make_template(id){
	return Handlebars.compile($("#"+id).html());
}
