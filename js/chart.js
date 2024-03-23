// bar chart Annual Review

let barDataAnnual = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [
    {
      fillColor: "#48A497",
      strokeColor: "#48A4D1",
      data: [456, 479, 324, 569, 702, 600, 450, 340],
    },
    {
      fillColor: "rgba(73,188,170,0.4)",
      strokeColor: "rgba(72,174,209,0.4)",
      data: [364, 504, 605, 400, 345, 320, 550, 660],
    },
  ],
};

// bar chart Productivity
let barData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      fillColor: "#48A497",
      strokeColor: "#48A4D1",
      data: [456, 479, 324, 569, 702, 600, 770],
    },
    {
      fillColor: "rgba(73,188,170,0.4)",
      strokeColor: "rgba(72,174,209,0.4)",
      data: [364, 504, 605, 400, 345, 320, 440],
    },
  ],
};

// get bar chart canvas
let income = document.getElementById("income").getContext("2d");
// draw bar chart
new Chart(income).Bar(barData);

let income2 = document.getElementById("income2").getContext("2d");
// draw bar chart
new Chart(income2).Bar(barDataAnnual);
