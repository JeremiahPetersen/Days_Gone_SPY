const { spyFULLALL } = require("./spyFULLALL.js");

const spyFULLALLReverse = spyFULLALL.reverse();

const spyFULLALLlast200 = spyFULLALLReverse.slice(0, 200);

const spyFULLHOLDER1 = spyFULLALLlast200.map(({ Close, ...rest }) => ({
  ...rest,
  Close: +Close,
}));

const spyFULLHOLDER2 = spyFULLHOLDER1.reduce(
  (total, obj) => obj.Close + total,
  0
);

const MovingAverage200Day = spyFULLHOLDER2 / 200;

const MovingAverage200DayS =
  Math.round((MovingAverage200Day + Number.EPSILON) * 100) / 100;

//console.log(MovingAverage200DayS);

document.getElementById("MovingAverage").innerHTML = MovingAverage200DayS;
