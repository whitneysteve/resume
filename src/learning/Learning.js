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

/**
 * Learning renders the blurb about how I pick up new skills.
 */
class Learning extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      inView: false,
    };

    this.showGraphWhenScrollIntoView = this.showGraphWhenScrollIntoView.bind(this);
  }

  componentDidMount() {
    if (isGraphScrolledIntoView('learning-canvas')) {
      renderGraph();
    } else {
      window.addEventListener('scroll', this.showGraphWhenScrollIntoView);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showGraphWhenScrollIntoView);
  }

  showGraphWhenScrollIntoView() {
    if (this.state.inView) {
      return;
    }

    if (isGraphScrolledIntoView('learning-canvas')) {
      if (this.state.inView) { return; }
      this.setState({ inView: true });
      window.removeEventListener('scroll', this.showGraphWhenScrollIntoView);
      renderGraph();
    }
  }

  render() {
    return (
      <div className="Section Learning">
        <div className="dev-grid">
          <div className="dev-grid-cell-three-quarters-height learning-graph-container">
            <div className="dev-grid-measurement-right" />
            <canvas id="learning-canvas" />
          </div>
          <div className="dev-grid-cell-one-quarter-height Learning__Text-Container">
            <div className="dev-grid-measurement-bottom" />
            <p>
              I can usually pick things up very quickly, faster with focus, frequency and teamwork.
            </p>
            <p>
              I like to help others learn too <i aria-label="Heart" className={"fas fa-heart"} role="presentation"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Learning;

/**
 * Render the graph. It's only rendered when it's fully in the viewport as that kicks off the animations.
 */
function renderGraph() {
  new ChartJS(document.getElementById("learning-canvas").getContext("2d"), {
    type: 'line',
    data: {
      datasets: [
        createDataset('Working on my own', firstRawData),
        createDataset('When working with others', generateExpCurve(0.012, 4.2)),
        createDataset('With frequent use and working with others', generateExpCurve(0.015, 5)),
      ],
    },
    options,
  });
}

/**
 * Check if the learning panel is in the viewpane.
 *
 * @param {String} canvasId the ID of the canvas element the graph is rendered in.
 * @returns
 */
function isGraphScrolledIntoView(canvasId) {
  let rect = document?.getElementById(canvasId)?.getBoundingClientRect();

  return (
    rect &&
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Generate an exponential curve to represent learning progress.
 *
 * @param {Number} slope the slope of the curve to generate data for.
 * @param {Number} position the maximum value of the curve.
 * @return array containing the y-values for the exponential curve.
 */
function generateExpCurve(slope, max) {
  let arr = [];
  for (let i = 0; i < 250; i++) {
    arr.push({ x: i, y: max * (1 - Math.exp(-i * slope)) });
  }
  return [...new Set(arr)];
}

/**
 * Create a dataset to render on the graph. Each dataset represents the progress of learning under certain conditions.
 *
 * @param {String} label a description of the learning conditions.
 * @param {Array} data data representing the learning curve.
 * @returns configured dataset object for rendering in ChartJS.
 */
function createDataset(label, data) {
  return {
    borderColor: function (context) {
      const chart = context.chart;
      const { ctx, chartArea } = chart;
      if (!chartArea) {
        return;
      }
      return buildGradient(ctx, chartArea);
    },
    cubicInterpolationMode: 'monotone',
    data,
    label,
    pointRadius: 0,
    tension: 0.4,
  };
}

/**
 * The first dataset in the graph. This is used as a template for generating animations and whatnot.
 */
let firstRawData = generateExpCurve(0.009, 3.5);

/**
 *
 * @param {Object} ctx the chart context.
 * @param {Rectangle} chartArea the chart area rectanlge.
 * @returns gradient object describing the gradient of the line we're plotting on the graph - a slightly jumbled
 * rainbow gradient.
 */
function buildGradient(ctx, chartArea) {
  const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, 'rgb(255,94,99)');
  gradient.addColorStop(.55, 'rgb(110,64,170)');
  gradient.addColorStop(.70, 'rgb(93,173,251)');
  gradient.addColorStop(.80, 'rgb(26,199,194)');
  gradient.addColorStop(.95, 'rgb(175,240,91)');
  gradient.addColorStop(1, 'rgb(6,164,42');
  return gradient;
}

/**
 * Build the graph tooltip.
 *
 * @param {Object} context  the chart context.
 */
function buildTooltip(context) {
  let tooltipElement = document.getElementById('chartjs-tooltip');

  // Create element on first render
  if (!tooltipElement) {
    const tooltipId = "chartjs-tooltip";
    tooltipElement = document.createElement('div');
    tooltipElement.className = tooltipId;
    tooltipElement.id = tooltipId;
    tooltipElement.innerHTML = '<div></div>';
    document.body.appendChild(tooltipElement);
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip;
  if (tooltipModel.opacity === 0) {
    tooltipElement.style.opacity = 0;
    return;
  }

  const position = context.chart.canvas.getBoundingClientRect();
  const distanceToRight = position.width - tooltipModel.caretX;
  const rightAlign = distanceToRight < 250;

  if (rightAlign) {
    tooltipElement.classList.add('right-pointer');
  } else {
    tooltipElement.classList.remove('right-pointer');
  }

  if (tooltipModel.body) {
    const bodyLines = tooltipModel.body.map((bodyItem) => bodyItem.lines);

    let innerHtml = "";

    bodyLines.forEach(function (body, i) {
      const elements = body[0].split(":");
      const value = parseFloat(elements[1]);

      innerHtml += `<p>${elements[0]}</p>`;
      let stars = "";

      let j = 0;
      while (j < value - 0.3) {
        stars += "<i class='fas fa-star'></i>";
        j += 1;
      }
      while (j < 5) {
        stars += "<i class='far fa-star'></i>";
        j += 1;
      }
      innerHtml += `<p>${stars}</p>`;
    });

    tooltipElement.querySelector('div').innerHTML = innerHtml;
  }

  tooltipElement.style.opacity = 1;
  tooltipElement.style.position = 'absolute';
  tooltipElement.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
  tooltipElement.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
  tooltipElement.style.pointerEvents = 'none';

  if (rightAlign) {
    tooltipElement.style.right = position.right - tooltipModel.caretX + 'px';
    tooltipElement.style.left = 'unset';
  } else {
    tooltipElement.style.right = 'unset';
    tooltipElement.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
  }
}

/**
 * Build the graph animation.
 */
function buildAnimation() {
  let xComplete;
  let yComplete;

  const totalDuration = 3000;
  const delayBetweenPoints = totalDuration / firstRawData.length;
  const previousY = (ctx) => {
    if (ctx.index === 0) {
      return ctx.chart.scales.y.getPixelForValue(100);
    } else {
      return ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
    }
  };

  const axisAnimation = (from, onComplete) => {
    return {
      duration: delayBetweenPoints,
      easing: 'linear',
      from,
      onComplete,
      type: 'number',
    };
  };

  const xAnimation = axisAnimation(NaN, () => { xComplete = true; });
  const yAnimation = axisAnimation(previousY, () => { yComplete = true; });
  xAnimation.delay = (ctx) => {
    if (ctx.type !== 'data' || ctx.xStarted) {
      return 0;
    }

    ctx.xStarted = true;
    let delay = ctx.index * delayBetweenPoints;

    if (ctx.type === 'data' && ctx.mode === 'default' && !xComplete) {
      delay += ctx.datasetIndex * 1500;
    }

    return delay;
  };

  yAnimation.delay = (ctx) => {
    if (ctx.type !== 'data' || ctx.yStarted) {
      return 0;
    }

    ctx.yStarted = true;
    let delay = ctx.index * delayBetweenPoints;

    if (ctx.type === 'data' && ctx.mode === 'default' && !yComplete) {
      delay += ctx.datasetIndex * 1500;
    }

    return delay;
  };

  return{
    x: xAnimation,
    y: yAnimation,
  };
}

/**
 * ChartJS configuration options.
 */
const options = {
  animation: buildAnimation(),
  interaction: {
    intersect: false,
  },
  layout: {
    padding: 25,
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
      external: buildTooltip,
    },
  },
  responsive: true,
  scales: {
    x: {
      type: 'linear',
      ticks: {
        display: false,
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

