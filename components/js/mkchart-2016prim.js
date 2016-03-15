var gopdata = {
    labels: ["Cruz", "Kasich", "Rubio", "Trump"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [65, 59, 80, 81]
        }]
};

var gopnom = document.getElementById("gop-nom").getContext("2d");


Chart.defaults.global.responsive = true;

new Chart(gopnom).Bar(gopdata, {
    barShowStroke: false
});