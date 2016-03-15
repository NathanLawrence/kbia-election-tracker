var data = {
	labels: ["Trump", "Rubio", "Cruz", "Kasich"],
	datasets: [
		{
			label: "Dataset 1",
			fillColor: "rgba(0,53,121,0.5)",
            strokeColor: "rgba(0,53,121,0.5)",
            highlightFill: "rgba(0,53,121,0.75)",
            highlightStroke: "rgba(0,53,121,1)",
            data: [4389, 54149, 11413, 15000]
		}
	]
};

var gopNom = document.getElementById("gop-nom").getContext("2d");


Chart.defaults.global.responsive = true;

new Chart(gopNom).Bar(data, {
	barShowStroke: false,
	scaleShowGridLines: true
});