var gopData = {
	labels: ["Trump", "Rubio", "Cruz", "Kasich"],
	gopDatasets: [
		{
			label: "gopDataset 1",
			fillColor: "rgba(0,53,121,0.5)",
            strokeColor: "rgba(0,53,121,0.5)",
            highlightFill: "rgba(0,53,121,0.75)",
            highlightStroke: "rgba(0,53,121,1)",
            gopData: [4389, 54149, 11413, 15000]
		}
	]
};

var gopNom = document.getElementById("gop-nom").getContext("2d");


Chart.defaults.global.responsive = true;

new Chart(gopNom).Bar(gopData, {
	barShowStroke: false,
	scaleShowGridLines: true
});