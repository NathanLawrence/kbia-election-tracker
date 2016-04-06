var pymChild;

$(window).load(function() {
	pymChild = new pym.Child({});
	pymChild.sendHeight();
});


var mayordata = {
    labels: ["Walther", "Treece"],
    datasets: [
        {
            label: "Columbia Mayoral Race",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [47,53]
        }]
};

var schooldata = {
    labels: ["Rainsberger", "Whitt", "Dubbert", "Toepke", "Mees"],
    datasets: [
        {
            label: "Columbia School Board",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [13,23,19,9,36]
        }]
};

var wardthreedata = {
    labels: ["Skala", "Leuther"],
    datasets: [
        {
            label: "Columbia Ward Three",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [57,43]
        }]
};

var options = {
        tooltipTemplate: "<%if (label){%><%=label %> - <%}%><%= value + '%' %>",
        scaleLabel : "<%= value + '%'%>",
        barShowStroke: false
};

Chart.defaults.global.responsive = true;

var mayorchart = document.getElementById("co-mayor").getContext("2d");
var schoolchart = document.getElementById("co-boe").getContext("2d");
var wardthreechart = document.getElementById("co-ward-3").getContext("2d");

new Chart(mayorchart).Bar(mayordata, options);
new Chart(schoolchart).Bar(schooldata, options);
new Chart(wardthreechart).Bar(wardthreedata, options);




function viewMore(){
	$(".view-more").remove();
	$(".view-prompt-row").append('<div class="view-prompt view-less"><a href="#" onclick="viewLess();"><h3><span class="glyphicon glyphicon-menu-up hidden-xs"></span> View Less Results <span class="glyphicon glyphicon-menu-up hidden-xs"></span></h3></a></div>');
	$(".below-fold").removeClass('hidden');
	pymChild.sendHeight();
}

function viewLess(){
	$(".view-less").remove();
	$(".view-prompt-row").append('<div class="view-prompt view-more"><a href="#" onclick="viewMore();"><h3><span class="glyphicon glyphicon-menu-down hidden-xs"></span> View More Results <span class="glyphicon glyphicon-menu-down hidden-xs"></span></h3></a></div>');
	$(".below-fold").addClass('hidden');
	pymChild.sendHeight();
}