var gopdata = {
    labels: ["Cruz", "Kasich", "Rubio", "Trump"],
    datasets: [
        {
            label: "GOP Presidential Nomination",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [41, 8, 5, 43]
        }]
};

var demdata = {
    labels: ["Clinton", "Sanders"],
    datasets: [
        {
            label: "Dem. Presidential Nomination",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [47, 52]
        }]
};

var propdata = {
    labels: ["Yes", "No"],
    datasets: [
        {
            label: "City of Columbia Proposition One",
            fillColor: "rgba(0, 38, 86, 0.5)",
            strokeColor: "rgba(0, 38, 86, 0.8)",
            highlightFill: "rgba(0, 38, 86, 0.75)",
            highlightStroke: "rgba(0, 38, 86, 1)",
            data: [56, 43]
        }]
};

var gopnom = document.getElementById("gop-nom").getContext("2d");
var demnom = document.getElementById("dem-nom").getContext("2d");
var prop = document.getElementById("prop").getContext("2d");

Chart.defaults.global.responsive = true;

var options = {
        tooltipTemplate: "<%if (label){%><%=label %> - <%}%><%= value + '%' %>",
        scaleLabel : "<%= value + '%'%>",
        barShowStroke: false
};

new Chart(gopnom).Bar(gopdata, options);

new Chart(demnom).Bar(demdata, options);

new Chart(prop).Bar(propdata, options);