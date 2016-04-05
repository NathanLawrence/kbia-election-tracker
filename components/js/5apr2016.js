function viewMore(){
	$(".view-more").remove();
	$(".view-prompt-row").append('<div class="view-prompt view-less"><a href="#" onclick="viewLess();"><h3><span class="glyphicon glyphicon-menu-up"></span> View Less Results <span class="glyphicon glyphicon-menu-up"></span></h3></a></div>');
}

function viewLess(){
	$(".view-less").remove();
	$(".view-prompt-row").append('<div class="view-prompt view-more"><a href="#" onclick="viewMore();"><h3><span class="glyphicon glyphicon-menu-down"></span> View More Results <span class="glyphicon glyphicon-menu-down"></span></h3></a></div>');
}