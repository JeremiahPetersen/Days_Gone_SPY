// ONLY USE TO GET SPY FULL OLD DATA (BEFORE ADDING 0'S IN FRONT OF VOLUME NUMBERS IN GOOGLE SHEETS)

const { spyFULLALL } = require("./spyFULLALL.js");
//console.log(spyFULLALL.length);

const { spyFULLALLOLD } = require("./spyFULLALLOLD.js");
//console.log(spyFULLALL.length);

const spyStatusArray3 = spyFULLALLOLD.filter(function (el) {
  return el.Status === "SPY-1, DXY+1, tenY+1, Vol-2, PCT_0-1-";
});
console.log(spyStatusArray3.length - 1);
console.dir(spyStatusArray3, { maxArrayLength: null });

const spyStatusNEXTUP2 = spyStatusArray3.filter(function (el) {
  return el.Close < el.Next1;
});
console.log(spyStatusNEXTUP2.length);

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArray4 = spyStatusNEXTUP2.length / (spyStatusArray3.length - 1);
//console.log(spyStatusArray4);

const spyStatusArrayResult2 =
  Math.round((spyStatusArray4 * 100 + Number.EPSILON) * 100) / 100;
console.log(spyStatusArrayResult2);
