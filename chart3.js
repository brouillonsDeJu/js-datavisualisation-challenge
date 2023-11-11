const points = []

const config = {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Donnees',
        data: points,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }],
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: 'X-Axis',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Y-Axis',
          },
        },
      },
    },
  };

const graph3 = document.createElement('canvas');
const context = graph3.getContext('2d');
const liveGraph = new Chart(context, config);

async function getGraph3Data(x, y) {
    const response = await fetch(`https://canvasjs.com/services/data/datapoints.php?xstart=${x}&ystart=${y}`);
    const graph3 = await response.json();

    return graph3.map(p => {
        points.push({
            x: p[0],
            y: p[1],
          })
    })
  }

async function renderGraph() {
    const xstart = points.length > 0 ? points[points.length - 1].x + 1 : 1;
    const ystart = points.length > 0 ? points[points.length - 1].y : 0;
    
    getGraph3Data(xstart, ystart).then(() => {
        liveGraph.update();
    })
}

const title = document.querySelector("h1");
title.insertAdjacentElement('beforebegin', graph3);  

setInterval(renderGraph, 1000);





        
