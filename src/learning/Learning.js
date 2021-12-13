import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
);

function generateExpCurve(slope, max) {
  let arr = [];
  for (let i = 0; i < 250; i++) {
    arr.push({ x: i, y: max * (1 - Math.exp(-i * slope)) });
  }
  return [...new Set(arr)];
}

let firstRawData = generateExpCurve(0.009, 3.5)

function createDataSet(label, data) {
  return {
    label: 'Working on my own',
    data: firstRawData,
    borderColor: function (context) {
      const chart = context.chart;
      const { ctx, chartArea } = chart;

      if (!chartArea) {
        // This case happens on initial chart load
        return;
      }
      return getGradient(ctx, chartArea);
    },
    tension: 0.4,
    cubicInterpolationMode: 'monotone',
    pointRadius: 0
  }
}

const data = {
  datasets: [
    createDataSet('Working on my own', firstRawData),
    createDataSet('When working with others', generateExpCurve(0.012, 4.2)),
    createDataSet('With frequent use and working with others', generateExpCurve(0.015, 5))
  ]
};

let width, height, gradient;
function getGradient(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgb(255,94,99)');
    gradient.addColorStop(.55, 'rgb(110,64,170)');
    gradient.addColorStop(.70, 'rgb(93,173,251)');
    gradient.addColorStop(.80, 'rgb(26,199,194)');
    gradient.addColorStop(.95, 'rgb(175,240,91)');
    gradient.addColorStop(1, 'rgb(6,164,42');
  }

  return gradient;
}

var xDelayed;
var yDelayed;
const totalDuration = 3000;
const delayBetweenPoints = totalDuration / firstRawData.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: NaN, // the point is initially skipped
    onComplete: () => {
      xDelayed = true;
    },
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }

      ctx.xStarted = true;
      let delay = ctx.index * delayBetweenPoints;

      if (ctx.type === 'data' && ctx.mode === 'default' && !xDelayed) {
        delay += ctx.datasetIndex * 1500;
      }

      return delay;
    },
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: delayBetweenPoints,
    from: previousY,
    onComplete: () => {
      yDelayed = true;
    },
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      let delay = ctx.index * delayBetweenPoints;

      if (ctx.type === 'data' && ctx.mode === 'default' && !yDelayed) {
        delay += ctx.datasetIndex * 1500;
      }

      return delay;
    },
  },
};

const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
    tooltipEl.style.borderRadius = '3px';
    tooltipEl.style.color = 'white';
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.transform = 'translate(-50%, 0)';
    tooltipEl.style.transition = 'all .1s ease';

    const table = document.createElement('table');
    table.style.margin = '0px';

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    const bodyLines = tooltip.body.map(b => b.lines);

const tableHead = document.createElement('thead');

titleLines.forEach(title => {
  const tr = document.createElement('tr');
  tr.style.borderWidth = 0;

  const th = document.createElement('th');
  th.style.borderWidth = 0;
  const text = document.createTextNode(title);

  th.appendChild(text);
  tr.appendChild(th);
  tableHead.appendChild(tr);
});

const tableBody = document.createElement('tbody');
bodyLines.forEach((body, i) => {
  const colors = tooltip.labelColors[i];

  const span = document.createElement('span');
  span.style.background = colors.backgroundColor;
  span.style.borderColor = colors.borderColor;
  span.style.borderWidth = '2px';
  span.style.marginRight = '10px';
  span.style.height = '10px';
  span.style.width = '10px';
  span.style.display = 'inline-block';

  const tr = document.createElement('tr');
  tr.style.backgroundColor = 'inherit';
  tr.style.borderWidth = 0;

  const td = document.createElement('td');
  td.style.borderWidth = 0;

  const text = document.createTextNode(body);

  td.appendChild(span);
  td.appendChild(text);
  tr.appendChild(td);
  tableBody.appendChild(tr);
});

const tableRoot = tooltipEl.querySelector('table');

// Remove old children
while (tableRoot.firstChild) {
  tableRoot.firstChild.remove();
}

// Add new children
tableRoot.appendChild(tableHead);
tableRoot.appendChild(tableBody);
  }

const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

// Display, position, and set styles for font
tooltipEl.style.opacity = 1;
tooltipEl.style.left = positionX + tooltip.caretX + 'px';
tooltipEl.style.top = positionY + tooltip.caretY + 'px';
tooltipEl.style.font = tooltip.options.bodyFont.string;
tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};


export const options = {
  animation: animation,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    // plugins: {
    deferred: {
      xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
      yOffset: '75%', // defer until 50% of the canvas height are inside the viewport
      delay: 500,      // delay of 500 ms after the canvas is considered inside the viewport
    },
    // },
    tooltip: {
      // Disable the on-canvas tooltip
      enabled: false,

      external: function (context) {
        // Tooltip Element
        let tooltipEl = document.getElementById('chartjs-tooltip');

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.className = "chartjs-tooltip"
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<div></div>';
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        const tooltipModel = context.tooltip;
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        const position = context.chart.canvas.getBoundingClientRect();

        const distanceToRight = position.width - tooltipModel.caretX;
        const rightAlign = distanceToRight < 190;

        if (rightAlign) {
          tooltipEl.classList.add('right-pointer');
        } else {
          tooltipEl.classList.remove('right-pointer');
        }


        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }



        // Set Text
        if (tooltipModel.body) {
          const bodyLines = tooltipModel.body.map(getBody);



          let innerHtml = "";

          bodyLines.forEach(function (body, i) {
            let elements = body[0].split(":");
            let value = parseFloat(elements[1])

            // const colors = tooltipModel.labelColors[i];
            // let style = 'background:' + colors.backgroundColor;
            // style += '; border-color:' + colors.borderColor;
            // style += '; border-width: 2px';
            // const span = '<span style="' + style + '"></span>';
            // innerHtml += '<tr><td>' + span + body + '</td></tr>';
            innerHtml += `<p>${elements[0]}</p>`;
            let stars = "";
            let j = 0;
            while (j < value - 0.9) {
              stars += "<i class='fas fa-star'></i>"
              j += 1;
            }
            while (j < 5) {
              stars += "<i class='far fa-star'></i>"
              j += 1;
            }
            innerHtml += `<p>${stars}</p>`;
          });
          // innerHtml += '</tbody>';

          let tableRoot = tooltipEl.querySelector('div');
          tableRoot.innerHTML = innerHtml;
        }


        // const bodyFont = ChartJS.helpers.toFont(tooltipModel.options.bodyFont);

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';



        if (rightAlign) {
          tooltipEl.style.right = position.right - tooltipModel.caretX + 'px';
          tooltipEl.style.left = 'unset';
        } else {
          tooltipEl.style.right = 'unset'
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
        }

        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
        // tooltipEl.style.font = bodyFont.string;
        tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
        tooltipEl.style.pointerEvents = 'none';
      },
    },
  },
  layout: {
    padding: 25,
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      type: 'linear',
      // display: false
      ticks: {
        display: false, //this will remove only the label
      },
      title: {
        display: true,
        text: "Time",
      },
    },

    y: {
      display: false,
      grid: {
        drawTicks: false,
      },
    },
  },
};

var inView = false;

function isScrolledIntoView(elem) {
  var docViewTop = window.scrollY;
  var docViewBottom = docViewTop + window.innerHeight;

  let rect = document.getElementsByTagName(elem)[0].getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}

window.addEventListener('scroll', function () {
  if (inView) {
    return;
  }
  if (isScrolledIntoView('canvas')) {
    if (inView) { return; }
    inView = true;
    new ChartJS(document.getElementsByTagName("canvas")[0].getContext("2d"), { type: 'line', data, options });
  } else {
    inView = false;
  }
});

/**
 * Learning renders the blurb about how I pick up new skills.
 */
class Learning extends Component {
  render() {
    return (
      <div className="Section" id="learning">
        <div className="dev-grid">
          <div className="dev-grid-cell-three-quarters-height learning-graph-container">
            <div className="dev-grid-measurement-right" />
            {renderChart()}
          </div>
          <div className="dev-grid-cell-one-quarter-height learning-text-container">
            <div className="dev-grid-measurement-bottom" />
            <p>
              I can usually pick things up very quickly.
            </p>
            <p>
              I learn more and faster with focus, frequency and teamwork.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Learning;

function renderChart() {
  return (<canvas />)
}
