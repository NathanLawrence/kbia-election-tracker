var mayorCand = ["Walther", "Treece"],
	mayorResults = [0,0];

var schoolCand = ["Rainsberger", "Whitt", "Dubbert", "Toepke", "Mees"],
	schoolResults = [0,0,0,0,0];

var colq1 = ["Yes", "No"],
	colq1R = [0,0];

var colq2 = ["Yes", "No"],
	colq2R = [0,0];

var fourthWCand = ["Dudley", "Thomas"],
	fourthWResults = [0,0];

var thirdWCand = ["Skala", "Leuther"],
	thirdWResults = [0,0];

var jeffWard2Cand = ["Mihalevich", "Fisher"],
	jeffWard2Results = [0,0];

var jeffWard4Cand = ["Costales", "Durbin"],
	jeffWard4Results = [0,0];

var ashlandBondQ = ["Yes", "No"],
	ashlandBondResults = [0,0];

var fillColorG = "rgba(0, 38, 86, 0.5)",
	strokeColorG =  "rgba(0, 38, 86, 0.8)",
	highlightFillG = "rgba(0, 38, 86, 0.75)",
	highlightStrokeG = "rgba(0, 38, 86, 1)";

function viewMore(){
	$(".view-more").remove();
	$(".view-prompt-row").append('<div class="view-prompt view-less"><a href="#" onclick="viewLess();"><h3><span class="glyphicon glyphicon-menu-up"></span> View Less Results <span class="glyphicon glyphicon-menu-up"></span></h3></a></div>');
	$(".below-fold").removeClass('hidden');
}

function viewLess(){
	$(".view-less").remove();
	$(".view-prompt-row").append('<div class="view-prompt view-more"><a href="#" onclick="viewMore();"><h3><span class="glyphicon glyphicon-menu-down"></span> View More Results <span class="glyphicon glyphicon-menu-down"></span></h3></a></div>');
	$(".below-fold").addClass('hidden');
}