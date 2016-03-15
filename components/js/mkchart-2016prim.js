var gopdata = {
    labels: ["Cruz", "Kasich", "Rubio", "Trump"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [0, 0, 0, 0]
        }]
};

var demdata = {
    labels: ["Clinton", "Sanders"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [0, 0]
        }]
};

var propdata = {
    labels: ["Yes", "No"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [0, 0]
        }]
};

var gopnom = document.getElementById("gop-nom").getContext("2d");
var demnom = document.getElementById("dem-nom").getContext("2d");
var prop = document.getElementById("prop").getContext("2d");

Chart.defaults.global.responsive = true;

new Chart(gopnom).Bar(gopdata, {
    barShowStroke: false
});

new Chart(demnom).Bar(demdata, {
    barShowStroke: false
});

new Chart(prop).Bar(propdata, {
    barShowStroke: false
});