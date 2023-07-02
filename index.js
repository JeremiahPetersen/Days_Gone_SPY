const { spyFULLALL } = require("./spyFULLALL.js");

// RAW DATA LENGTH

//console.log(spyFULLALL.length);
//console.log(spyALL.length);
//console.log(dxyALL.length);
//console.log(tenYearALL.length);
//console.log(cpiALL.length);
//console.log(futuresALL.length);
//console.log(cesALL.length);

// ^^ RAW DATA ^^

// INDEX

//spyALL
//dxyALL
//tenYearALL
//cpiALL
//SPYup1
//SPYup2
//SPYup3
//SPYup4
//SPYup5
//SPYup6
//SPYup7
//SPYdown1
//SPYdown2
//SPYdown3
//SPYdown4
//SPYdown5
//SPYdown6
//SPYdown7
//spy50-75
//spy75-100
//spy100+
//spyBelow50
//spyUpAbove50
//spyUpAbove75
//spyUpAbove100
//spyDownAb50
//spyDownAb75
//spyDownAb100
//spyUpBel50
//spyUpBel75
//spyUpBel100
//spyDownBel50
//spyDownBel75
//spyDownBel100
//volUP1
//volUP2
//volUP3
//volDOWN1
//volDOWN2
//volDOWN3
//volUP1spyUP
//volUP2spyUP
//volUP3spyUP
//volUP1spyDOWN
//volUP2spyDOWN
//volUP3spyDOWN
//volDOWN1spyUP
//volDOWN2spyUP
//volDOWN3spyUP
//volDOWN1spyDOWN
//volDOWN2spyDOWN
//volDOWN3spyDOWN
//spyUp0-1%
//spyUp1-2%
//spyUp2-3%
//spyUp3-4%
//spyUp4%+
//spyDown0-1%
//spyDown1-2%
//spyDown2-3%
//spyDown3-4%
//spyDown4%+
//spyUPafter0-1%+
//spyUPafter1-2%+
//spyUPafter2-3%+
//spyUPafter3-4%+
//spyUPafter4%+
//spyUPafter0-1%-
//spyUPafter1-2%-
//spyUPafter2-3%-
//spyUPafter3-4%-
//spyUPafter4%-
//tenYearUp1
//tenYearUp2
//tenYearUp3
//tenYearDown1
//tenYearDown2
//tenYearDown3
//tenYearUpSpyUp
//tenYearUp2SpyUp
//tenYearUp3SpyUp
//tenYearDownSpyUp
//tenYearDown2SpyUp
//tenYearDown3SpyUp
//tenYearUpspyUpNext1
//tenYearUp2spyUpNext1
//tenYearUp3spyUpNext1
//tenYearDownspyUpNext1
//tenYearDown2spyUpNext1
//tenYearDown3spyUpNext1
//dxyUP1
//dxyUP2
//dxyUP3
//dxyDown1
//dxyDown2
//dxyDown3
//dxyUP1spyUp
//dxyUP2spyUp
//dxyUP3spyUp
//dxyDown1spyUp
//dxyDown2spyUp
//dxyDown3spyUp
//dxyUp1SPyUpNext1
//dxyUp2SPyUpNext1
//dxyUp3SPyUpNext1
//dxyDown1SPyUpNext1
//dxyDown2SPyUpNext1
//dxyDown3SPyUpNext1
//SPYup1nextUP
//SPYup2nextUP
//SPYup3nextUP
//SPYup4nextUP
//SPYup5nextUP
//SPYup6nextUP
//SPYup7nextUP
//SPYdown1nextUP
//SPYdown2nextUP
//SPYdown3nextUP
//SPYdown4nextUP
//SPYdown5nextUP
//SPYdown6nextUP
//SPYdown7nextUP
//volUP1spyUPnext
//volUP2spyUPnext
//volUP3spyUPnext
//volDOWN1spyUPnext
//volDOWN2spyUPnext
//volDOWN3spyUPnext

// MAIN ALGO TREE

//GET CURRENT SPY OBJECT
//const currentSPY = spyFULLALL.at(-1);

const currentSPY = spyFULLALL;
//console.log(currentSPY);
const spyFullAllLength = spyFULLALL.length;
console.log("Total SPY Days = " + spyFullAllLength);

//const currentDate = currentSPY.Date;
//console.log(currentDate);

//const allDate = spyFULLALL.Date;

const currentSPY3 = spyFULLALL.at(-1);
//console.log(currentSPY3);

const currentDate = currentSPY3.Date;
console.log("Date = " + currentDate);

const currentDayType = currentSPY3.DayType;
console.log("Today = " + currentDayType);

const nextDayType = currentSPY3.NextDayType;
console.log("Next Day = " + nextDayType);

// LAST CLOSE

const lastClose = currentSPY3.Close;
console.log("Last Close = " + lastClose);

// 200 DAY MOVING AVERAGE

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

console.log("200 Day Moving Average = " + MovingAverage200DayS);

// SPY +- 1-7 DAYS

const spyUP = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous;
});

const spyDOWN = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous;
});

const volUP = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1;
});

const volDOWN = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1;
});

const tenYUP = spyFULLALL.filter(function (el) {
  return el.tenYClose > el.tenYPrevious1;
});

const tenYDOWN = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1;
});

const dxyUP = spyFULLALL.filter(function (el) {
  return el.dxyClose > el.dxyPrevious1;
});

const dxyDOWN = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1;
});

// UP 1 DAY

const up1 = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous;
});
//console.dir(up1, {'maxArrayLength': null});
//console.log(up1.length);

// UP 2 DAY

const up2 = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous && el.Previous >= el.Previous2;
});
//console.dir(up2, {'maxArrayLength': null});
//console.log(up2.length);

// UP 3 DAY

const up3 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3
  );
});
//console.dir(up3, {'maxArrayLength': null});
//console.log(up3.length);

// UP 4 DAY

const up4 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4
  );
});
//console.dir(up4, {'maxArrayLength': null});/
//console.log(up4.length);

// UP 5 DAY

const up5 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5
  );
});
//console.dir(up5, {'maxArrayLength': null});
//console.log(up5.length);

// UP 6 DAY

const up6 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Previous5 >= el.Previous6
  );
});
//console.dir(up6, {'maxArrayLength': null});
//console.log(up6.length);

// UP 7 DAY

const up7 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Previous5 >= el.Previous6 &&
    el.Previous6 >= el.Previous7
  );
});
//console.dir(up7, {'maxArrayLength': null});
//console.log(up7.length);

// DOWN 1 DAY

const down1 = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous;
});
//console.dir(down1, {'maxArrayLength': null});
//console.log(down1.length);

// DOWN 2 DAY

const down2 = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous && el.Previous < el.Previous2;
});
//console.dir(down2, {'maxArrayLength': null});
//console.log(down2.length);

// DOWN 3 DAY

const down3 = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3
  );
});
//console.dir(down3, {'maxArrayLength': null});
//console.log(down3.length);

// DOWN 4 DAY

const down4 = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4
  );
});
//console.dir(down4, {'maxArrayLength': null});
//console.log(down4.length);

// DOWN 5 DAY

const down5 = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5
  );
});
//console.dir(down5, {'maxArrayLength': null});
//console.log(down5.length);

// DOWN 6 DAY

const down6 = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Previous5 < el.Previous6
  );
});
//console.dir(down6, {'maxArrayLength': null});
//console.log(down6.length);

// DOWN 7 DAY

const down7 = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Previous5 < el.Previous6
  );
});
//console.dir(down7, {'maxArrayLength': null});
//console.log(down7.length);

// VOLUME +-

// SPY VOL +50,000,000 - +75,000,000

const volAbove50 = spyFULLALL.filter(function (el) {
  return el.Volume > 50000000 && el.Volume < 75000000;
});
//console.dir(volAbove50, {'maxArrayLength': null});
//console.log(volAbove50.length);

// SPY VOL +75,000,000 - +100,000,000

const volAbove75 = spyFULLALL.filter(function (el) {
  return el.Volume > 75000000 && el.Volume < 100000000;
});
//console.dir(volAbove75, {'maxArrayLength': null});
//console.log(volAbove75.length);

// SPY VOL +100,000,000

const volAbove100 = spyFULLALL.filter(function (el) {
  return el.Volume > 100000000;
});
//console.dir(volAbove100, {'maxArrayLength': null});
//console.log(volAbove100.length);

// SPY VOL -50,000,000

const volBelow50 = spyFULLALL.filter(function (el) {
  return el.Volume < 50000000;
});
//console.dir(volBelow50, {'maxArrayLength': null});
//console.log(volBelow50.length);

// SPY UP VOL +50,000,000

const spyUpvolAbove50 = spyFULLALL.filter(function (el) {
  return (
    el.Volume > 50000000 && el.Volume < 75000000 && el.Close >= el.Previous
  );
});
//console.dir(spyUpvolAbove50, {'maxArrayLength': null});
//console.log(spyUpvolAbove50.length);

// SPY UP VOL +75,000,000

const spyUpvolAbove75 = spyFULLALL.filter(function (el) {
  return (
    el.Volume > 75000000 && el.Volume < 100000000 && el.Close >= el.Previous
  );
});
//console.dir(spyUpvolAbove75, {'maxArrayLength': null});
//console.log(spyUpvolAbove75.length);

// SPY UP VOL +100,000,000

const spyUpvolAbove100 = spyFULLALL.filter(function (el) {
  return el.Volume > 100000000 && el.Close >= el.Previous;
});
//console.dir(spyUpvolAbove100, {'maxArrayLength': null});
//console.log(spyUpvolAbove100.length);

// SPY DOWN VOL +50,000,000

const spyDownvolAbove50 = spyFULLALL.filter(function (el) {
  return el.Volume > 50000000 && el.Volume < 75000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolAbove50, {'maxArrayLength': null});
//console.log(spyDownvolAbove50.length);

// SPY DOWN VOL +75,000,000

const spyDownvolAbove75 = spyFULLALL.filter(function (el) {
  return (
    el.Volume > 75000000 && el.Volume < 100000000 && el.Close < el.Previous
  );
});
//console.dir(spyDownvolAbove75, {'maxArrayLength': null});
//console.log(spyDownvolAbove75.length);

// SPY DOWN VOL +100,000,000

const spyDownvolAbove100 = spyFULLALL.filter(function (el) {
  return el.Volume > 100000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolAbove100, {'maxArrayLength': null});
//console.log(spyDownvolAbove100.length);

// SPY UP VOL -50,000,000

const spyUpvolBelow50 = spyFULLALL.filter(function (el) {
  return el.Volume < 50000000 && el.Close >= el.Previous;
});
//console.dir(spyUpvolBelow50, {'maxArrayLength': null});
//console.log(spyUpvolBelow50.length);

// SPY UP VOL -75,000,000

const spyUpvolBelow75 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < 75000000 && el.Volume > 50000000 && el.Close >= el.Previous
  );
});
//console.dir(spyUpvolBelow75, {'maxArrayLength': null});
//console.log(spyUpvolBelow75.length);

// SPY UP VOL -100,000,000

const spyUpvolBelow100 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < 100000000 && el.Volume > 75000000 && el.Close >= el.Previous
  );
});
//console.dir(spyUpvolBelow100, {'maxArrayLength': null});
//console.log(spyUpvolBelow100.length);

// SPY DOWN VOL -50,000,000

const spyDownvolBelow50 = spyFULLALL.filter(function (el) {
  return el.Volume < 50000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolBelow50, {'maxArrayLength': null});
//console.log(spyDownvolBelow50.length);

// SPY DOWN VOL -75,000,000

const spyDownvolBelow75 = spyFULLALL.filter(function (el) {
  return el.Volume < 75000000 && el.Volume > 50000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolBelow75, {'maxArrayLength': null});
//console.log(spyDownvolBelow75.length);

// SPY DOWN VOL -100,000,000

const spyDownvolBelow100 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < 100000000 && el.Volume > 75000000 && el.Close < el.Previous
  );
});
//console.dir(spyDownvolBelow100, {'maxArrayLength': null});
//console.log(spyDownvolBelow100.length);

// VOLUME COMPARED TO PREVIOUS VOLUME

// VOLUME UP 1 DAY

const volUP1 = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1;
});
//console.dir(volUP1, {'maxArrayLength': null});
//console.log(volUP1.length);

// VOLUME UP 2 DAY

const volUP2 = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1 && el.PreviousVol1 >= el.PreviousVol2;
});
//console.dir(volUP2, {'maxArrayLength': null});
//console.log(volUP2.length);

// VOLUME UP 3 DAY

const volUP3 = spyFULLALL.filter(function (el) {
  return (
    el.Volume >= el.PreviousVol1 &&
    el.PreviousVol1 >= el.PreviousVol2 &&
    el.PreviousVol2 >= el.PreviousVol3
  );
});
//console.dir(volUP3, {'maxArrayLength': null});
//console.log(volUP3.length);

// VOLUME DOWN 1 DAY

const volDOWN1 = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1;
});
//console.dir(volDOWN1, {'maxArrayLength': null});
//console.log(volDOWN1.length);

// VOLUME DOWN 2 DAY

const volDOWN2 = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.PreviousVol1 < el.PreviousVol2;
});
//console.dir(volDOWN2, {'maxArrayLength': null});
//console.log(volDOWN2.length);

// VOLUME DOWN 3 DAY

const volDOWN3 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3
  );
});
//console.dir(volDOWN3, {'maxArrayLength': null});
//console.log(volDOWN3.length);

// VOLUME UP 1 DAY SPY UP

const volUP1spyUP = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1 && el.Close >= el.Previous;
});
//console.dir(volUP1spyUP, {'maxArrayLength': null});
//console.log(volUP1spyUP.length);

// VOLUME UP 2 DAY SPY UP

const volUP2spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume >= el.PreviousVol1 &&
    el.PreviousVol1 >= el.PreviousVol2 &&
    el.Close >= el.Previous
  );
});
//console.dir(volUP2spyUP, {'maxArrayLength': null});
//console.log(volUP2spyUP.length);

// VOLUME UP 3 DAY SPY UP

const volUP3spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume >= el.PreviousVol1 &&
    el.PreviousVol1 >= el.PreviousVol2 &&
    el.PreviousVol2 >= el.PreviousVol3 &&
    el.Close >= el.Previous
  );
});
//console.dir(volUP3spyUP, {'maxArrayLength': null});
//console.log(volUP3spyUP.length);

// VOLUME DOWN 1 DAY SPY UP

const volDOWN1spyUP = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Close >= el.Previous;
});
//console.dir(volDOWN1spyUP, {'maxArrayLength': null});
//console.log(volDOWN1spyUP.length);

// VOLUME DOWN 2 DAY SPY UP

const volDOWN2spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.Close >= el.Previous
  );
});
//console.dir(volDOWN2spyUP, {'maxArrayLength': null});
//console.log(volDOWN2spyUP.length);

// VOLUME DOWN 3 DAY SPY UP

const volDOWN3spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3 &&
    el.Close >= el.Previous
  );
});
//console.dir(volDOWN3spyUP, {'maxArrayLength': null});
//console.log(volDOWN3spyUP.length);

//console.log(volDOWN3spyDOWN.length);

// SPY PCT

// SPY +0-1%

const upPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "1.00%" && el.PCT > "0.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct1, { maxArrayLength: null });
//console.log(upPerct1.length);

// SPY +1-2%

const upPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "2.00%" && el.PCT > "1.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct2, { maxArrayLength: null });
//console.log(upPerct2.length);

// SPY +2-3%

const upPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "3.00%" && el.PCT > "2.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct3, { maxArrayLength: null });
//console.log(upPerct3.length);

// SPY +3-4%

const upPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "4.00%" && el.PCT > "3.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct4, { maxArrayLength: null });
//console.log(upPerct4.length);

// SPY +4%+

const upPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT > "4.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct5, { maxArrayLength: null });
//console.log(upPerct5.length);

// SPY -0-(-1%)

const downPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "-1.00%" && el.PCT > "-0.00%" && el.Close < el.Previous;
});
//console.dir(downPerct1, { maxArrayLength: null });
//console.log(downPerct1.length);

// SPY -1-(-2%)

const downPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "-2.00%" && el.PCT > "-1.00%" && el.Close < el.Previous;
});
//console.dir(downPerct2, { maxArrayLength: null });
//console.log(downPerct2.length);

// SPY -2-(-3%)

const downPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "-3.00%" && el.PCT > "-2.00%" && el.Close < el.Previous;
});
//console.dir(downPerct3, { maxArrayLength: null });
//console.log(downPerct3.length);

// SPY -3-(-4%)

const downPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "-4.00%" && el.PCT > "-3.00%" && el.Close < el.Previous;
});
//console.dir(downPerct4, { maxArrayLength: null });
//console.log(downPerct4.length);

// SPY -4%+

const downPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT < "-50.00%" && el.PCT > "-4.00%" && el.Close < el.Previous;
});
//console.dir(downPerct5, { maxArrayLength: null });
//console.log(downPerct5.length);

// SPY UP/DOWN AFTER PCT UP/DOWN

// SPY UP AFTER +0-1%

const spyUPPerct1 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "1.00%" &&
    el.PCT > "0.00%" &&
    el.Close >= el.Previous &&
    el.Next1 >= el.Close
  );
});
//console.dir(spyUPPerct1, { maxArrayLength: null });
//console.log(spyUPPerct1.length);

// SPY UP AFTER +1-2%

const spyUPPerct2 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "2.00%" &&
    el.PCT > "1.00%" &&
    el.Close >= el.Previous &&
    el.Next1 >= el.Close
  );
});
//console.dir(spyUPPerct2, { maxArrayLength: null });
//console.log(spyUPPerct2.length);

// SPY UP AFTER +2-3%

const spyUPPerct3 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "3.00%" &&
    el.PCT > "2.00%" &&
    el.Close >= el.Previous &&
    el.Next1 >= el.Close
  );
});
//console.dir(spyUPPerct3, { maxArrayLength: null });
//console.log(spyUPPerct3.length);

// SPY UP AFTER +3-4%

const spyUPPerct4 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "4.00%" &&
    el.PCT > "3.00%" &&
    el.Close >= el.Previous &&
    el.Next1 >= el.Close
  );
});
//console.dir(spyUPPerct4, { maxArrayLength: null });
//console.log(spyUPPerct4.length);

// SPY UP AFTER +4%+

const spyUPPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT > "4.00%" && el.Close >= el.Previous && el.Next1 >= el.Close;
});
//console.dir(spyUPPerct5, { maxArrayLength: null });
//console.log(spyUPPerct5.length);

// SPY UP AFTER -0-(-1%)

const spyUPdownPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "-1.00%" && el.PCT > "-0.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct1, { maxArrayLength: null });
//console.log(spyUPdownPerct1.length);

// SPY UP AFTER -1-(-2%)

const spyUPdownPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "-2.00%" && el.PCT > "-1.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct2, { maxArrayLength: null });
//console.log(spyUPdownPerct2.length);

// SPY UP AFTER -2-(-3%)

const spyUPdownPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "-3.00%" && el.PCT > "-2.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct3, { maxArrayLength: null });
//console.log(spyUPdownPerct3.length);

// SPY UP AFTER -3-(-4%)

const spyUPdownPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "-4.00%" && el.PCT > "-3.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct4, { maxArrayLength: null });
//console.log(spyUPdownPerct4.length);

// SPY UP AFTER -4%+

const spyUPdownPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT < "-50.00%" && el.PCT > "-4.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct5, { maxArrayLength: null });
//console.log(spyUPdownPerct5.length);

// SPY WITH TENYEAR

// TEN YEAR 1 DAY UP

const uptenYear1 = spyFULLALL.filter(function (el) {
  return el.tenYClose >= el.tenYPrevious1;
});
//console.dir(uptenYear1, {'maxArrayLength': null});
//console.log(uptenYear1.length);

// TEN YEAR 2 DAY UP

const uptenYear2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 && el.tenYPrevious1 >= el.tenYPrevious2
  );
});
//console.dir(uptenYear2, {'maxArrayLength': null});
//console.log(uptenYear2.length);

// TEN YEAR 3 DAY UP

const uptenYear3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 &&
    el.tenYPrevious1 >= el.tenYPrevious2 &&
    el.tenYPrevious2 >= el.tenYPrevious3
  );
});
//console.dir(uptenYear3, {'maxArrayLength': null});
//console.log(uptenYear3.length);

// TEN YEAR 1 DAY DOWN

const downtenYear1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1;
});
//console.dir(downtenYear1, {'maxArrayLength': null});
//console.log(downtenYear1.length);

// TEN YEAR 2 DAY DOWN

const downtenYear2 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.tenYPrevious1 < el.tenYPrevious2;
});
//console.dir(downtenYear2, {'maxArrayLength': null});
//console.log(downtenYear2.length);

// TEN YEAR 3 DAY DOWN

const downtenYear3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.tenYPrevious2 < el.tenYPrevious3
  );
});
//console.dir(downtenYear3, {'maxArrayLength': null});
//console.log(downtenYear3.length);

// TEN YEAR UP 1 DAY & SPY UP

const uptenYearUp1 = spyFULLALL.filter(function (el) {
  return el.tenYClose >= el.tenYPrevious1 && el.Close >= el.Previous;
});
//console.dir(uptenYearUp1, {'maxArrayLength': null});
//console.log(uptenYearUp1.length);

// TEN YEAR UP 2 DAY & SPY UP

const uptenYearUp2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 &&
    el.tenYPrevious1 >= el.tenYPrevious2 &&
    el.Close >= el.Previous
  );
});
//console.dir(uptenYearUp2, {'maxArrayLength': null});
//console.log(uptenYearUp2.length);

// TEN YEAR UP 3 DAY & SPY UP

const uptenYearUp3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 &&
    el.tenYPrevious1 >= el.tenYPrevious2 &&
    el.tenYPrevious2 >= el.tenYPrevious3 &&
    el.Close >= el.Previous
  );
});
//console.dir(uptenYearUp3, {'maxArrayLength': null});
//console.log(uptenYearUp3.length);

// TEN YEAR DOWN 1 DAY & SPY UP

const downtenYearUp1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.Close >= el.Previous;
});
//console.dir(downtenYearUp1, {'maxArrayLength': null});
//console.log(downtenYearUp1.length);

// TEN YEAR DOWN 2 DAY & SPY UP

const downtenYearUp2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.Close >= el.Previous
  );
});
//console.dir(downtenYearUp2, {'maxArrayLength': null});
//console.log(downtenYearUp2.length);

// TEN YEAR DOWN 3 DAY & SPY UP

const downtenYearUp3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.tenYPrevious2 < el.tenYPrevious3 &&
    el.Close >= el.Previous
  );
});
//console.dir(downtenYearUp3, {'maxArrayLength': null});
//console.log(downtenYearUp3.length);

//tenYearUpSPyUpNext1

const uptenYearspyUpNext1 = spyFULLALL.filter(function (el) {
  return el.tenYClose >= el.tenYPrevious1 && el.Close <= el.Next1;
});
//console.dir(uptenYearspyUpNext1, {'maxArrayLength': null});
//console.log(uptenYearspyUpNext1.length);

//tenYearUp2SPyUpNext1

const uptenYearspyUpNext2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 &&
    el.tenYPrevious1 >= el.tenYPrevious2 &&
    el.Close <= el.Next1
  );
});
//console.dir(uptenYearspyUpNext2, {'maxArrayLength': null});
//console.log(uptenYearspyUpNext2.length);

//tenYearUp3SPyUpNext1

const uptenYearspyUpNext3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 &&
    el.tenYPrevious1 >= el.tenYPrevious2 &&
    el.tenYPrevious2 >= el.tenYPrevious3 &&
    el.Close <= el.Next1
  );
});
//console.dir(uptenYearspyUpNext3, {'maxArrayLength': null});
//console.log(uptenYearspyUpNext3.length);

//tenYearDownSPyUpNext1

const downtenYearspyUpNext1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.Close <= el.Next1;
});
//console.dir(downtenYearspyUpNext1, {'maxArrayLength': null});
//console.log(downtenYearspyUpNext1.length);

//tenYearDown2SPyUpNext1

const downtenYearspyUpNext2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.Close <= el.Next1
  );
});
//console.dir(downtenYearspyUpNext2, { maxArrayLength: null });
//console.log(downtenYearspyUpNext2.length);

//tenYearDown3SPyUpNext1

const downtenYearspyUpNext3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.tenYPrevious2 < el.tenYPrevious3 &&
    el.Close <= el.Next1
  );
});
//console.dir(downtenYearspyUpNext3, {'maxArrayLength': null});
//console.log(downtenYearspyUpNext3.length);

// DXY AND SPY

//dxyUP1

const upDXY1 = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1;
});
//console.dir(upDXY1, {'maxArrayLength': null});
//console.log(upDXY1.length);

//dxyUP2

const upDXY2 = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1 && el.dxyPrevious1 >= el.dxyPrevious2;
});
//console.dir(upDXY2, {'maxArrayLength': null});
//console.log(upDXY2.length);

//dxyUP3

const upDXY3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose >= el.dxyPrevious1 &&
    el.dxyPrevious1 >= el.dxyPrevious2 &&
    el.dxyPrevious2 >= el.dxyPrevious3
  );
});
//console.dir(upDXY3, {'maxArrayLength': null});
//console.log(upDXY3.length);

//dxyDown1

const downDXY1 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1;
});
//console.dir(downDXY1, {'maxArrayLength': null});
//console.log(downDXY1.length);

//dxyDown2

const downDXY2 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.dxyPrevious1 < el.dxyPrevious2;
});
//console.dir(downDXY2, {'maxArrayLength': null});
//console.log(downDXY2.length);

//dxyDown3

const downDXY3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3
  );
});
//console.dir(downDXY3, {'maxArrayLength': null});
//console.log(downDXY3.length);

//dxyUP1spyUp

const upDXYspyUP1 = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1 && el.Close >= el.Previous;
});
//console.dir(upDXYspyUP1, {'maxArrayLength': null});
//console.log(upDXYspyUP1.length);

//dxyUP2spyUp

const upDXYspyUP2 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose >= el.dxyPrevious1 &&
    el.dxyPrevious1 >= el.dxyPrevious2 &&
    el.Close >= el.Previous
  );
});
//console.dir(upDXYspyUP2, {'maxArrayLength': null});
//console.log(upDXYspyUP2.length);

//dxyUP3spyUp

const upDXYspyUP3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose >= el.dxyPrevious1 &&
    el.dxyPrevious1 >= el.dxyPrevious2 &&
    el.dxyPrevious2 >= el.dxyPrevious3 &&
    el.Close >= el.Previous
  );
});
//console.dir(upDXYspyUP3, {'maxArrayLength': null});
//console.log(upDXYspyUP3.length);

//dxyDown1spyUp

const downDXYspyUP1 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.Close >= el.Previous;
});
//console.dir(downDXYspyUP1, {'maxArrayLength': null});/
//console.log(downDXYspyUP1.length);

//dxyDown2spyUp

const downDXYspyUP2 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.Close >= el.Previous
  );
});
//console.dir(downDXYspyUP2, {'maxArrayLength': null});
//console.log(downDXYspyUP2.length);

//dxyDown3spyUp

const downDXYspyUP3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3 &&
    el.Close >= el.Previous
  );
});
//console.dir(downDXYspyUP3, {'maxArrayLength': null});
//console.log(downDXYspyUP3.length);

//dxyUp1SPyUpNext1

const upDXY1spyUpNext = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1 && el.Close <= el.Next1;
});
//console.dir(upDXY1spyUpNext, {'maxArrayLength': null});
//console.log(upDXY1spyUpNext.length);

//dxyUp2SPyUpNext1

const upDXY2spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose >= el.dxyPrevious1 &&
    el.dxyPrevious1 >= el.dxyPrevious2 &&
    el.Close <= el.Next1
  );
});
//console.dir(upDXY2spyUpNext, {'maxArrayLength': null});
//console.log(upDXY2spyUpNext.length);

//dxyUp3SPyUpNext1

const upDXY3spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose >= el.dxyPrevious1 &&
    el.dxyPrevious1 >= el.dxyPrevious2 &&
    el.dxyPrevious2 >= el.dxyPrevious3 &&
    el.Close <= el.Next1
  );
});
//console.dir(upDXY3spyUpNext, {'maxArrayLength': null});
//console.log(upDXY3spyUpNext.length);

//dxyDown1SPyUpNext1

const downDXY1spyUpNext = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.Close <= el.Next1;
});
//console.dir(downDXY1spyUpNext, {'maxArrayLength': null});
//console.log(downDXY1spyUpNext.length);

//dxyDown2SPyUpNext1

const downDXY2spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.Close <= el.Next1
  );
});
//console.dir(downDXY2spyUpNext, {'maxArrayLength': null});
//console.log(downDXY2spyUpNext.length);

//dxyDown3SPyUpNext1

const downDXY3spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.Close <= el.Next1 &&
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3
  );
});
//console.dir(downDXY3spyUpNext, {'maxArrayLength': null});
//console.log(downDXY3spyUpNext.length);

//SPYup1nextUP

const up1nextUP = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous && el.Next1 >= el.Close;
});
//console.dir(up1nextUP, {'maxArrayLength': null});
//console.log(up1nextUP.length);

//SPYup2nextUP

const up2nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Next1 >= el.Close
  );
});
//console.dir(up2nextUP, {'maxArrayLength': null});
//console.log(up2nextUP.length);

//SPYup3nextUP

const up3nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Next1 >= el.Close
  );
});
//console.dir(up3nextUP, {'maxArrayLength': null});
//console.log(up3nextUP.length);

//SPYup4nextUP

const up4nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Next1 >= el.Close
  );
});
//console.dir(up4nextUP, {'maxArrayLength': null});
//console.log(up4nextUP.length);

//SPYup5nextUP

const up5nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Next1 >= el.Close
  );
});
//console.dir(up5nextUP, {'maxArrayLength': null});
//console.log(up5nextUP.length);

//SPYup6nextUP

const up6nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Previous5 >= el.Previous6 &&
    el.Next1 >= el.Close
  );
});
//console.dir(up6nextUP, {'maxArrayLength': null});/
//console.log(up6nextUP.length);

//SPYup7nextUP

const up7nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Previous5 >= el.Previous6 &&
    el.Previous6 >= el.Previous7 &&
    el.Next1 >= el.Close
  );
});
//console.dir(up7nextUP, {'maxArrayLength': null});
//console.log(up7nextUP.length);

//SPYdown1nextUP

const down1nextUP = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous && el.Next1 >= el.Close;
});
//console.dir(down1nextUP, {'maxArrayLength': null});
//console.log(down1nextUP.length);

//SPYdown2nextUP

const down2nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous && el.Previous < el.Previous2 && el.Next1 >= el.Close
  );
});
//console.dir(down2nextUP, {'maxArrayLength': null});
//console.log(down2nextUP.length);

//SPYdown3nextUP

const down3nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Next1 >= el.Close
  );
});
//console.dir(down3nextUP, {'maxArrayLength': null});
//console.log(down3nextUP.length);

//SPYdown4nextUP

const down4nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Next1 >= el.Close
  );
});
//console.dir(down4nextUP, {'maxArrayLength': null});
//console.log(down4nextUP.length);

//SPYdown5nextUP

const down5nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Next1 >= el.Close
  );
});
//console.dir(down5nextUP, {'maxArrayLength': null});
//console.log(down5nextUP.length);

//SPYdown6nextUP

const down6nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Previous5 < el.Previous6 &&
    el.Next1 >= el.Close
  );
});
//console.dir(down6nextUP, {'maxArrayLength': null});
//console.log(down6nextUP.length);

//SPYdown7nextUP

const down7nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Previous5 < el.Previous6 &&
    el.Previous6 < el.Previous7 &&
    el.Next1 >= el.Close
  );
});
//console.dir(down7nextUP, {'maxArrayLength': null});
//console.log(down7nextUP.length);

//volUP1spyUPnext

const volUP1spyUPnext = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1 && el.Next1 >= el.Close;
});
//console.dir(volUP1spyUPnext, {'maxArrayLength': null});
//console.log(volUP1spyUPnext.length);

//volUP2spyUPnext

const volUP2spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume >= el.PreviousVol1 &&
    el.PreviousVol1 >= el.PreviousVol2 &&
    el.Next1 >= el.Close
  );
});
//console.dir(volUP2spyUPnext, {'maxArrayLength': null});
//console.log(volUP2spyUPnext.length);

//volUP3spyUPnext

const volUP3spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume >= el.PreviousVol1 &&
    el.PreviousVol1 >= el.PreviousVol2 &&
    el.PreviousVol2 >= el.PreviousVol3 &&
    el.Next1 >= el.Close
  );
});
//console.dir(volUP3spyUPnext, {'maxArrayLength': null});
//console.log(volUP3spyUPnext.length);

//volDOWN1spyUPnext

const volDOWN1spyUPnext = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Next1 >= el.Close;
});
//console.dir(volDOWN1spyUPnext, {'maxArrayLength': null});
//console.log(volDOWN1spyUPnext.length);

//volDOWN2spyUPnext

const volDOWN2spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.Next1 >= el.Close
  );
});
//console.dir(volDOWN2spyUPnext, {'maxArrayLength': null});
//console.log(volDOWN2spyUPnext.length);
//volDOWN3spyUPnext
const volDOWN3spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3 &&
    el.Next1 >= el.Close
  );
});
//console.dir(volDOWN3spyUPnext, {'maxArrayLength': null});
//console.log(volDOWN3spyUPnext.length);

// STARTCURRENT SPY STATUS

//spyUpDown
//dxyUpDown
//tenYearUpDown
//volumeUpDown
//pctUpDown

// SPY +-

// START TOP 100

const top100UP = spyFULLALL.filter(function (el) {
  return el.PCT > "2.91%" && el.Close > el.Previous;
});
//console.dir(top100UP, { maxArrayLength: null });
//console.log(top100UP.length);

const top100DOWN = spyFULLALL.filter(function (el) {
  return el.PCT > "-2.5%" && el.Close < el.Previous;
});
//console.dir(top100DOWN, { maxArrayLength: null });
//console.log(top100DOWN.length);

// END TOP 100

const spyUpDown = (function () {
  if (
    currentSPY3.Close > currentSPY3.Previous &&
    currentSPY3.Previous < currentSPY3.Previous2
  ) {
    return "SPY+1";
  } else if (
    currentSPY3.Close > currentSPY3.Previous &&
    currentSPY3.Previous > currentSPY3.Previous2 &&
    currentSPY3.Previous2 < currentSPY3.Previous3
  ) {
    return "SPY+2";
  } else if (
    currentSPY3.Close > currentSPY3.Previous &&
    currentSPY3.Previous > currentSPY3.Previous2 &&
    currentSPY3.Previous2 > currentSPY3.Previous3 &&
    currentSPY3.Previous3 < currentSPY3.Previous4
  ) {
    return "SPY+3";
  } else if (
    currentSPY3.Close > currentSPY3.Previous &&
    currentSPY3.Previous > currentSPY3.Previous2 &&
    currentSPY3.Previous2 > currentSPY3.Previous3 &&
    currentSPY3.Previous3 > currentSPY3.Previous4 &&
    currentSPY3.Previous4 < currentSPY3.Previous5
  ) {
    return "SPY+4";
  } else if (
    currentSPY3.Close > currentSPY3.Previous &&
    currentSPY3.Previous > currentSPY3.Previous2 &&
    currentSPY3.Previous2 > currentSPY3.Previous3 &&
    currentSPY3.Previous3 > currentSPY3.Previous4 &&
    currentSPY3.Previous4 > currentSPY3.Previous5 &&
    currentSPY3.Previous5 < currentSPY3.Previous6
  ) {
    return "SPY+5";
  } else if (
    currentSPY3.Close > currentSPY3.Previous &&
    currentSPY3.Previous > currentSPY3.Previous2 &&
    currentSPY3.Previous2 > currentSPY3.Previous3 &&
    currentSPY3.Previous3 > currentSPY3.Previous4 &&
    currentSPY3.Previous4 > currentSPY3.Previous5 &&
    currentSPY3.Previous5 > currentSPY3.Previous6 &&
    currentSPY3.Previous6 < currentSPY3.Previous7
  ) {
    return "SPY+6";
  } else if (
    currentSPY3.Close > currentSPY3.Previous &&
    currentSPY3.Previous > currentSPY3.Previous2 &&
    currentSPY3.Previous2 > currentSPY3.Previous3 &&
    currentSPY3.Previous3 > currentSPY3.Previous4 &&
    currentSPY3.Previous4 > currentSPY3.Previous5 &&
    currentSPY3.Previous5 > currentSPY3.Previous6 &&
    currentSPY3.Previous6 > currentSPY3.Previous7
  ) {
    return "SPY+7";
  } else if (
    currentSPY3.Close < currentSPY3.Previous &&
    currentSPY3.Previous > currentSPY3.Previous2
  ) {
    return "SPY-1";
  } else if (
    currentSPY3.Close < currentSPY3.Previous &&
    currentSPY3.Previous < currentSPY3.Previous2 &&
    currentSPY3.Previous2 > currentSPY3.Previous3
  ) {
    return "SPY-2";
  } else if (
    currentSPY3.Close < currentSPY3.Previous &&
    currentSPY3.Previous < currentSPY3.Previous2 &&
    currentSPY3.Previous2 < currentSPY3.Previous3 &&
    currentSPY3.Previous3 > currentSPY3.Previous4
  ) {
    return "SPY-3";
  } else if (
    currentSPY3.Close < currentSPY3.Previous &&
    currentSPY3.Previous < currentSPY3.Previous2 &&
    currentSPY3.Previous2 < currentSPY3.Previous3 &&
    currentSPY3.Previous3 < currentSPY3.Previous4 &&
    currentSPY3.Previous4 > currentSPY3.Previous5
  ) {
    return "SPY-4";
  } else if (
    currentSPY3.Close < currentSPY3.Previous &&
    currentSPY3.Previous < currentSPY3.Previous2 &&
    currentSPY3.Previous2 < currentSPY3.Previous3 &&
    currentSPY3.Previous3 < currentSPY3.Previous4 &&
    currentSPY3.Previous4 < currentSPY3.Previous5 &&
    currentSPY3.Previous5 > currentSPY3.Previous6
  ) {
    return "SPY-5";
  } else if (
    currentSPY3.Close < currentSPY3.Previous &&
    currentSPY3.Previous < currentSPY3.Previous2 &&
    currentSPY3.Previous2 < currentSPY3.Previous3 &&
    currentSPY3.Previous3 < currentSPY3.Previous4 &&
    currentSPY3.Previous4 < currentSPY3.Previous5 &&
    currentSPY3.Previous5 < currentSPY3.Previous6 &&
    currentSPY3.Previous6 > currentSPY3.Previous7
  ) {
    return "SPY-6";
  } else {
    return "SPY-7";
  }
})();
//console.log(spyUpDown);
// DXY +-

const dxyUpDown = (function () {
  if (
    currentSPY3.dxyClose > currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 < currentSPY3.dxyPrevious2
  ) {
    return "DXY+1";
  } else if (
    currentSPY3.dxyClose > currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 > currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 < currentSPY3.dxyPrevious3
  ) {
    return "DXY+2";
  } else if (
    currentSPY3.dxyClose > currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 > currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 > currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 < currentSPY3.dxyPrevious4
  ) {
    return "DXY+3";
  } else if (
    currentSPY3.dxyClose > currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 > currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 > currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 > currentSPY3.dxyPrevious4 &&
    currentSPY3.dxyPrevious4 < currentSPY3.dxyPrevious5
  ) {
    return "DXY+4";
  } else if (
    currentSPY3.dxyClose > currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 > currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 > currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 > currentSPY3.dxyPrevious4 &&
    currentSPY3.dxyPrevious4 > currentSPY3.dxyPrevious5 &&
    currentSPY3.dxyPrevious5 < currentSPY3.dxyPrevious6
  ) {
    return "DXY+5";
  } else if (
    currentSPY3.dxyClose > currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 > currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 > currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 > currentSPY3.dxyPrevious4 &&
    currentSPY3.dxyPrevious4 > currentSPY3.dxyPrevious5 &&
    currentSPY3.dxyPrevious5 > currentSPY3.dxyPrevious6 &&
    currentSPY3.dxyPrevious6 < currentSPY3.dxyPrevious7
  ) {
    return "DXY+6";
  } else if (
    currentSPY3.dxyClose > currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 > currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 > currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 > currentSPY3.dxyPrevious4 &&
    currentSPY3.dxyPrevious4 > currentSPY3.dxyPrevious5 &&
    currentSPY3.dxyPrevious5 > currentSPY3.dxyPrevious6 &&
    currentSPY3.dxyPrevious6 > currentSPY3.dxyPrevious7
  ) {
    return "DXY+7";
  } else if (
    currentSPY3.dxyClose < currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 > currentSPY3.dxyPrevious2
  ) {
    return "DXY-1";
  } else if (
    currentSPY3.dxyClose < currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 < currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 > currentSPY3.dxyPrevious3
  ) {
    return "DXY-2";
  } else if (
    currentSPY3.dxyClose < currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 < currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 < currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 > currentSPY3.dxyPrevious4
  ) {
    return "DXY-3";
  } else if (
    currentSPY3.dxyClose < currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 < currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 < currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 < currentSPY3.dxyPrevious4 &&
    currentSPY3.dxyPrevious4 > currentSPY3.dxyPrevious5
  ) {
    return "DXY-4";
  } else if (
    currentSPY3.dxyClose < currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 < currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 < currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 < currentSPY3.dxyPrevious4 &&
    currentSPY3.dxyPrevious4 < currentSPY3.dxyPrevious5 &&
    currentSPY3.dxyPrevious5 > currentSPY3.dxyPrevious6
  ) {
    return "DXY-5";
  } else if (
    currentSPY3.dxyClose < currentSPY3.dxyPrevious1 &&
    currentSPY3.dxyPrevious1 < currentSPY3.dxyPrevious2 &&
    currentSPY3.dxyPrevious2 < currentSPY3.dxyPrevious3 &&
    currentSPY3.dxyPrevious3 < currentSPY3.dxyPrevious4 &&
    currentSPY3.dxyPrevious4 < currentSPY3.dxyPrevious5 &&
    currentSPY3.dxyPrevious5 < currentSPY3.dxyPrevious6 &&
    currentSPY3.dxyPrevious6 > currentSPY3.dxyPrevious7
  ) {
    return "DXY-6";
  } else {
    return "DXY-7";
  }
})();
//console.log(dxyUpDown);

// TEN YEAR +-

const tenYearUpDown = (function () {
  if (
    currentSPY3.tenYClose > currentSPY3.tenYPrevious1 &&
    currentSPY3.tenYPrevious1 < currentSPY3.tenYPrevious2
  ) {
    return "tenY+1";
  } else if (
    currentSPY3.tenYClose > currentSPY3.tenYPrevious1 &&
    currentSPY3.tenYPrevious1 > currentSPY3.tenYPrevious2 &&
    currentSPY3.tenYPrevious2 < currentSPY3.tenYPrevious3
  ) {
    return "tenY+2";
  } else if (
    currentSPY3.tenYClose > currentSPY3.tenYPrevious1 &&
    currentSPY3.tenYPrevious1 > currentSPY3.tenYPrevious2 &&
    currentSPY3.tenYPrevious2 > currentSPY3.tenYPrevious3
  ) {
    return "tenY+3";
  } else if (
    currentSPY3.tenYClose < currentSPY3.tenYPrevious1 &&
    currentSPY3.tenYPrevious1 > currentSPY3.tenYPrevious2
  ) {
    return "tenY-1";
  } else if (
    currentSPY3.tenYClose < currentSPY3.tenYPrevious1 &&
    currentSPY3.tenYPrevious1 < currentSPY3.tenYPrevious2 &&
    currentSPY3.tenYPrevious2 > currentSPY3.tenYPrevious3
  ) {
    return "tenY-2";
  } else {
    return "tenY-3";
  }
})();
//console.log(tenYearUpDown);

// VOL +-

const volumeUpDown = (function () {
  if (
    currentSPY3.Volume > currentSPY3.PreviousVol1 &&
    currentSPY3.PreviousVol1 < currentSPY3.PreviousVol2
  ) {
    return "Vol+1";
  } else if (
    currentSPY3.Volume > currentSPY3.PreviousVol1 &&
    currentSPY3.PreviousVol1 > currentSPY3.PreviousVol2 &&
    currentSPY3.PreviousVol2 < currentSPY3.PreviousVol3
  ) {
    return "Vol+2";
  } else if (
    currentSPY3.Volume > currentSPY3.PreviousVol1 &&
    currentSPY3.PreviousVol1 > currentSPY3.PreviousVol2 &&
    currentSPY3.PreviousVol2 > currentSPY3.PreviousVol3
  ) {
    return "Vol+3";
  } else if (
    currentSPY3.Volume < currentSPY3.PreviousVol1 &&
    currentSPY3.PreviousVol1 > currentSPY3.PreviousVol2
  ) {
    return "Vol-1";
  } else if (
    currentSPY3.Volume < currentSPY3.PreviousVol1 &&
    currentSPY3.PreviousVol1 < currentSPY3.PreviousVol2 &&
    currentSPY3.PreviousVol2 > currentSPY3.PreviousVol3
  ) {
    return "Vol-2";
  } else {
    return "Vol-3";
  }
})();
//console.log(volumeUpDown);

// SPY PCT

const pctUpDown = (function () {
  if (
    currentSPY3.PCT < "1.00%" &&
    currentSPY3.PCT > "0.00%" &&
    currentSPY3.Close > currentSPY3.Previous
  ) {
    return "PCT_0-1+";
  } else if (
    currentSPY3.PCT < "2.00%" &&
    currentSPY3.PCT > "1.00%" &&
    currentSPY3.Close > currentSPY3.Previous
  ) {
    return "PCT_1-2+";
  } else if (
    currentSPY3.PCT < "3.00%" &&
    currentSPY3.PCT > "2.00%" &&
    currentSPY3.Close > currentSPY3.Previous
  ) {
    return "PCT_2-3+";
  } else if (
    currentSPY3.PCT < "4.00%" &&
    currentSPY3.PCT > "3.00%" &&
    currentSPY3.Close > currentSPY3.Previous
  ) {
    return "PCT_3-4+";
  } else if (
    currentSPY3.PCT > "4.00%" &&
    currentSPY3.Close > currentSPY3.Previous
  ) {
    return "PCT_4+";
  } else if (
    currentSPY3.PCT < "-1.00%" &&
    currentSPY3.PCT > "-0.00%" &&
    currentSPY3.Close < currentSPY3.Previous
  ) {
    return "PCT_0-1-";
  } else if (
    currentSPY3.PCT < "-2.00%" &&
    currentSPY3.PCT > "-1.00%" &&
    currentSPY3.Close < currentSPY3.Previous
  ) {
    return "PCT_1-2-";
  } else if (
    currentSPY3.PCT < "-3.00%" &&
    currentSPY3.PCT > "-2.00%" &&
    currentSPY3.Close < currentSPY3.Previous
  ) {
    return "PCT_2-3-";
  } else if (
    currentSPY3.PCT < "-4.00%" &&
    currentSPY3.PCT > "-3.00%" &&
    currentSPY3.Close < currentSPY3.Previous
  ) {
    return "PCT_3-4-";
  } else {
    return "PCT_4-";
  }
})();
//console.log(pctUpDown);

// SPY STATUS 1

function spyUpDown3(currentSPY) {
  if (
    currentSPY.Close >= currentSPY.Previous &&
    currentSPY.Previous < currentSPY.Previous2
  ) {
    return "SPY+1";
  } else if (
    currentSPY.Close >= currentSPY.Previous &&
    currentSPY.Previous >= currentSPY.Previous2 &&
    currentSPY.Previous2 < currentSPY.Previous3
  ) {
    return "SPY+2";
  } else if (
    currentSPY.Close >= currentSPY.Previous &&
    currentSPY.Previous >= currentSPY.Previous2 &&
    currentSPY.Previous2 >= currentSPY.Previous3 &&
    currentSPY.Previous3 < currentSPY.Previous4
  ) {
    return "SPY+3";
  } else if (
    currentSPY.Close >= currentSPY.Previous &&
    currentSPY.Previous >= currentSPY.Previous2 &&
    currentSPY.Previous2 >= currentSPY.Previous3 &&
    currentSPY.Previous3 >= currentSPY.Previous4 &&
    currentSPY.Previous4 < currentSPY.Previous5
  ) {
    return "SPY+4";
  } else if (
    currentSPY.Close >= currentSPY.Previous &&
    currentSPY.Previous >= currentSPY.Previous2 &&
    currentSPY.Previous2 >= currentSPY.Previous3 &&
    currentSPY.Previous3 >= currentSPY.Previous4 &&
    currentSPY.Previous4 >= currentSPY.Previous5 &&
    currentSPY.Previous5 < currentSPY.Previous6
  ) {
    return "SPY+5";
  } else if (
    currentSPY.Close >= currentSPY.Previous &&
    currentSPY.Previous >= currentSPY.Previous2 &&
    currentSPY.Previous2 >= currentSPY.Previous3 &&
    currentSPY.Previous3 >= currentSPY.Previous4 &&
    currentSPY.Previous4 >= currentSPY.Previous5 &&
    currentSPY.Previous5 >= currentSPY.Previous6 &&
    currentSPY.Previous6 < currentSPY.Previous7
  ) {
    return "SPY+6";
  } else if (
    currentSPY.Close >= currentSPY.Previous &&
    currentSPY.Previous >= currentSPY.Previous2 &&
    currentSPY.Previous2 >= currentSPY.Previous3 &&
    currentSPY.Previous3 >= currentSPY.Previous4 &&
    currentSPY.Previous4 >= currentSPY.Previous5 &&
    currentSPY.Previous5 >= currentSPY.Previous6 &&
    currentSPY.Previous6 > currentSPY.Previous7
  ) {
    return "SPY+7";
  } else if (
    currentSPY.Close < currentSPY.Previous &&
    currentSPY.Previous > currentSPY.Previous2
  ) {
    return "SPY-1";
  } else if (
    currentSPY.Close < currentSPY.Previous &&
    currentSPY.Previous <= currentSPY.Previous2 &&
    currentSPY.Previous2 > currentSPY.Previous3
  ) {
    return "SPY-2";
  } else if (
    currentSPY.Close < currentSPY.Previous &&
    currentSPY.Previous <= currentSPY.Previous2 &&
    currentSPY.Previous2 <= currentSPY.Previous3 &&
    currentSPY.Previous3 > currentSPY.Previous4
  ) {
    return "SPY-3";
  } else if (
    currentSPY.Close < currentSPY.Previous &&
    currentSPY.Previous <= currentSPY.Previous2 &&
    currentSPY.Previous2 <= currentSPY.Previous3 &&
    currentSPY.Previous3 <= currentSPY.Previous4 &&
    currentSPY.Previous4 > currentSPY.Previous5
  ) {
    return "SPY-4";
  } else if (
    currentSPY.Close < currentSPY.Previous &&
    currentSPY.Previous <= currentSPY.Previous2 &&
    currentSPY.Previous2 <= currentSPY.Previous3 &&
    currentSPY.Previous3 <= currentSPY.Previous4 &&
    currentSPY.Previous4 <= currentSPY.Previous5 &&
    currentSPY.Previous5 > currentSPY.Previous6
  ) {
    return "SPY-5";
  } else if (
    currentSPY.Close < currentSPY.Previous &&
    currentSPY.Previous <= currentSPY.Previous2 &&
    currentSPY.Previous2 <= currentSPY.Previous3 &&
    currentSPY.Previous3 <= currentSPY.Previous4 &&
    currentSPY.Previous4 <= currentSPY.Previous5 &&
    currentSPY.Previous5 <= currentSPY.Previous6 &&
    currentSPY.Previous6 > currentSPY.Previous7
  ) {
    return "SPY-6";
  } else {
    return "SPY-7";
  }
}
//console.log(spyUpDown);
// DXY +-

function dxyUpDown3(currentSPY) {
  if (
    currentSPY.dxyClose >= currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 < currentSPY.dxyPrevious2
  ) {
    return "DXY+1";
  } else if (
    currentSPY.dxyClose >= currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 >= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 < currentSPY.dxyPrevious3
  ) {
    return "DXY+2";
  } else if (
    currentSPY.dxyClose >= currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 >= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 >= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 < currentSPY.dxyPrevious4
  ) {
    return "DXY+3";
  } else if (
    currentSPY.dxyClose >= currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 >= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 >= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 >= currentSPY.dxyPrevious4 &&
    currentSPY.dxyPrevious4 < currentSPY.dxyPrevious5
  ) {
    return "DXY+4";
  } else if (
    currentSPY.dxyClose >= currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 >= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 >= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 >= currentSPY.dxyPrevious4 &&
    currentSPY.dxyPrevious4 >= currentSPY.dxyPrevious5 &&
    currentSPY.dxyPrevious5 < currentSPY.dxyPrevious6
  ) {
    return "DXY+5";
  } else if (
    currentSPY.dxyClose >= currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 >= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 >= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 >= currentSPY.dxyPrevious4 &&
    currentSPY.dxyPrevious4 >= currentSPY.dxyPrevious5 &&
    currentSPY.dxyPrevious5 >= currentSPY.dxyPrevious6 &&
    currentSPY.dxyPrevious6 < currentSPY.dxyPrevious7
  ) {
    return "DXY+6";
  } else if (
    currentSPY.dxyClose >= currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 >= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 >= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 >= currentSPY.dxyPrevious4 &&
    currentSPY.dxyPrevious4 >= currentSPY.dxyPrevious5 &&
    currentSPY.dxyPrevious5 >= currentSPY.dxyPrevious6 &&
    currentSPY.dxyPrevious6 >= currentSPY.dxyPrevious7
  ) {
    return "DXY+7";
  } else if (
    currentSPY.dxyClose < currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 > currentSPY.dxyPrevious2
  ) {
    return "DXY-1";
  } else if (
    currentSPY.dxyClose < currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 <= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 > currentSPY.dxyPrevious3
  ) {
    return "DXY-2";
  } else if (
    currentSPY.dxyClose < currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 <= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 <= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 > currentSPY.dxyPrevious4
  ) {
    return "DXY-3";
  } else if (
    currentSPY.dxyClose < currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 <= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 <= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 <= currentSPY.dxyPrevious4 &&
    currentSPY.dxyPrevious4 > currentSPY.dxyPrevious5
  ) {
    return "DXY-4";
  } else if (
    currentSPY.dxyClose < currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 <= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 <= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 <= currentSPY.dxyPrevious4 &&
    currentSPY.dxyPrevious4 <= currentSPY.dxyPrevious5 &&
    currentSPY.dxyPrevious5 > currentSPY.dxyPrevious6
  ) {
    return "DXY-5";
  } else if (
    currentSPY.dxyClose < currentSPY.dxyPrevious1 &&
    currentSPY.dxyPrevious1 <= currentSPY.dxyPrevious2 &&
    currentSPY.dxyPrevious2 <= currentSPY.dxyPrevious3 &&
    currentSPY.dxyPrevious3 <= currentSPY.dxyPrevious4 &&
    currentSPY.dxyPrevious4 <= currentSPY.dxyPrevious5 &&
    currentSPY.dxyPrevious5 <= currentSPY.dxyPrevious6 &&
    currentSPY.dxyPrevious6 > currentSPY.dxyPrevious7
  ) {
    return "DXY-6";
  } else {
    return "DXY-7";
  }
}
//console.log(dxyUpDown);

// TEN YEAR +-

function tenYearUpDown3(currentSPY) {
  if (
    currentSPY.tenYClose >= currentSPY.tenYPrevious1 &&
    currentSPY.tenYPrevious1 < currentSPY.tenYPrevious2
  ) {
    return "tenY+1";
  } else if (
    currentSPY.tenYClose >= currentSPY.tenYPrevious1 &&
    currentSPY.tenYPrevious1 >= currentSPY.tenYPrevious2 &&
    currentSPY.tenYPrevious2 < currentSPY.tenYPrevious3
  ) {
    return "tenY+2";
  } else if (
    currentSPY.tenYClose >= currentSPY.tenYPrevious1 &&
    currentSPY.tenYPrevious1 >= currentSPY.tenYPrevious2 &&
    currentSPY.tenYPrevious2 > currentSPY.tenYPrevious3
  ) {
    return "tenY+3";
  } else if (
    currentSPY.tenYClose < currentSPY.tenYPrevious1 &&
    currentSPY.tenYPrevious1 > currentSPY.tenYPrevious2
  ) {
    return "tenY-1";
  } else if (
    currentSPY.tenYClose < currentSPY.tenYPrevious1 &&
    currentSPY.tenYPrevious1 <= currentSPY.tenYPrevious2 &&
    currentSPY.tenYPrevious2 > currentSPY.tenYPrevious3
  ) {
    return "tenY-2";
  } else {
    return "tenY-3";
  }
}
//console.log(tenYearUpDown);

// VOL +-

function volumeUpDown3(currentSPY) {
  if (
    currentSPY.Volume >= currentSPY.PreviousVol1 &&
    currentSPY.PreviousVol1 < currentSPY.PreviousVol2
  ) {
    return "Vol+1";
  } else if (
    currentSPY.Volume >= currentSPY.PreviousVol1 &&
    currentSPY.PreviousVol1 >= currentSPY.PreviousVol2 &&
    currentSPY.PreviousVol2 < currentSPY.PreviousVol3
  ) {
    return "Vol+2";
  } else if (
    currentSPY.Volume >= currentSPY.PreviousVol1 &&
    currentSPY.PreviousVol1 >= currentSPY.PreviousVol2 &&
    currentSPY.PreviousVol2 >= currentSPY.PreviousVol3
  ) {
    return "Vol+3";
  } else if (
    currentSPY.Volume < currentSPY.PreviousVol1 &&
    currentSPY.PreviousVol1 > currentSPY.PreviousVol2
  ) {
    return "Vol-1";
  } else if (
    currentSPY.Volume < currentSPY.PreviousVol1 &&
    currentSPY.PreviousVol1 <= currentSPY.PreviousVol2 &&
    currentSPY.PreviousVol2 > currentSPY.PreviousVol3
  ) {
    return "Vol-2";
  } else {
    return "Vol-3";
  }
}
//console.log(volumeUpDown);

// SPY PCT

function pctUpDown3(currentSPY) {
  if (
    currentSPY.PCT < "1.00%" &&
    currentSPY.PCT > "0.00%" &&
    currentSPY.Close > currentSPY.Previous
  ) {
    return "PCT_0-1+";
  } else if (
    currentSPY.PCT < "2.00%" &&
    currentSPY.PCT > "1.00%" &&
    currentSPY.Close > currentSPY.Previous
  ) {
    return "PCT_1-2+";
  } else if (
    currentSPY.PCT < "3.00%" &&
    currentSPY.PCT > "2.00%" &&
    currentSPY.Close > currentSPY.Previous
  ) {
    return "PCT_2-3+";
  } else if (
    currentSPY.PCT < "4.00%" &&
    currentSPY.PCT > "3.00%" &&
    currentSPY.Close > currentSPY.Previous
  ) {
    return "PCT_3-4+";
  } else if (
    currentSPY.PCT > "4.00%" &&
    currentSPY.Close > currentSPY.Previous
  ) {
    return "PCT_4+";
  } else if (
    currentSPY.PCT < "-1.00%" &&
    currentSPY.PCT > "-0.00%" &&
    currentSPY.Close < currentSPY.Previous
  ) {
    return "PCT_0-1-";
  } else if (
    currentSPY.PCT < "-2.00%" &&
    currentSPY.PCT > "-1.00%" &&
    currentSPY.Close < currentSPY.Previous
  ) {
    return "PCT_1-2-";
  } else if (
    currentSPY.PCT < "-3.00%" &&
    currentSPY.PCT > "-2.00%" &&
    currentSPY.Close < currentSPY.Previous
  ) {
    return "PCT_2-3-";
  } else if (
    currentSPY.PCT < "-4.00%" &&
    currentSPY.PCT > "-3.00%" &&
    currentSPY.Close < currentSPY.Previous
  ) {
    return "PCT_3-4-";
  } else {
    return "PCT_4-";
  }
}
//console.log(pctUpDown);

const spyStatusALL = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status1:
    spyUpDown3(currentSPY) +
    ", " +
    dxyUpDown3(currentSPY) +
    ", " +
    tenYearUpDown3(currentSPY) +
    ", " +
    volumeUpDown3(currentSPY) +
    ", " +
    pctUpDown3(currentSPY),
}));

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALL.length);
//console.dir(spyStatusALL, { maxArrayLength: null });
//const simplePlace1 = spyStatusALL.reverse();
//console.dir(simplePlace1, { maxArrayLength: null });

//SPY STATUS NO VOLUME

const spyStatusALLnoVOL = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status2:
    spyUpDown3(currentSPY) +
    ", " +
    dxyUpDown3(currentSPY) +
    ", " +
    tenYearUpDown3(currentSPY) +
    ", " +
    pctUpDown3(currentSPY),
}));

const spyStatusALLnoVOLreverse = spyStatusALLnoVOL.reverse();

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALLnoVOL.length);
//console.dir(spyStatusALLnoVOLreverse, { maxArrayLength: null });

//SPY STATUS NO DXY

const spyStatusALLnoDXY = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status3:
    spyUpDown3(currentSPY) +
    ", " +
    tenYearUpDown3(currentSPY) +
    ", " +
    volumeUpDown3(currentSPY) +
    ", " +
    pctUpDown3(currentSPY),
}));

const spyStatusALLnoDXYreverse = spyStatusALLnoDXY.reverse();

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALLnoDXY.length);
//console.dir(spyStatusALLnoDXYreverse, { maxArrayLength: null });

//SPY STATUS NO DXY NO VOL

const spyStatusALLnoDXYnoVOL = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status4:
    spyUpDown3(currentSPY) +
    ", " +
    tenYearUpDown3(currentSPY) +
    ", " +
    pctUpDown3(currentSPY),
}));

const spyStatusALLnoDXYnoVOLreverse = spyStatusALLnoDXYnoVOL.reverse();

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALLnoDXYnoVOL.length);
//console.dir(spyStatusALLnoDXYnoVOLreverse, { maxArrayLength: null });

//SPY STATUS NO DXY NO VOL

const spyStatusALLnoPCT = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status5:
    spyUpDown3(currentSPY) +
    ", " +
    dxyUpDown3(currentSPY) +
    ", " +
    tenYearUpDown3(currentSPY) +
    ", " +
    volumeUpDown3(currentSPY),
}));

const spyStatusALLnoPCTreverse = spyStatusALLnoPCT.reverse();

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALLnoPCT.length);
//console.dir(spyStatusALLnoPCTreverse, { maxArrayLength: null });

//SPY STATUS 2

function spyUpDown4(currentSPY) {
  if (currentSPY.Close >= currentSPY.Previous) {
    return "SPY+";
  } else if (currentSPY.Close < currentSPY.Previous) {
    return "SPY-";
  }
}
//console.log(spyUpDown4);
// DXY +-

function dxyUpDown4(currentSPY) {
  if (currentSPY.dxyClose >= currentSPY.dxyPrevious1) {
    return "DXY+";
  } else if (currentSPY.dxyClose < currentSPY.dxyPrevious1) {
    return "DXY-";
  }
}
//console.log(dxyUpDown4);

// TEN YEAR +-

function tenYearUpDown4(currentSPY) {
  if (currentSPY.tenYClose >= currentSPY.tenYPrevious1) {
    return "tenY+";
  } else if (currentSPY.tenYClose < currentSPY.tenYPrevious1) {
    return "tenY-";
  }
}
//console.log(tenYearUpDown4);

// VOL +-

function volumeUpDown4(currentSPY) {
  if (currentSPY.Volume >= currentSPY.PreviousVol1) {
    return "Vol+";
  } else if (currentSPY.Volume < currentSPY.PreviousVol1) {
    return "Vol-";
  }
}
//console.log(volumeUpDown4);

//SPY STATUS NO SPY DAYS

const spyStatusALLnoSPYDays = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status6:
    spyUpDown4(currentSPY) +
    ", " +
    dxyUpDown3(currentSPY) +
    ", " +
    tenYearUpDown3(currentSPY) +
    ", " +
    volumeUpDown3(currentSPY) +
    ", " +
    pctUpDown3(currentSPY),
}));

const spyStatusALLnoSPYDaysReverse = spyStatusALLnoSPYDays.reverse();

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALLnoSPYDays.length);
//console.dir(spyStatusALLnoSPYDaysReverse, { maxArrayLength: null });

const spyStatusALL4 = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status8:
    spyUpDown4(currentSPY) +
    ", " +
    dxyUpDown4(currentSPY) +
    ", " +
    tenYearUpDown4(currentSPY) +
    ", " +
    volumeUpDown4(currentSPY),
}));

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALL4.length);
//console.dir(spyStatusALL4, { maxArrayLength: null });
const samplePiece2 = spyStatusALL4.reverse();
//console.dir(samplePiece2, { maxArrayLength: null });

//SPY STATUS ONLY SPY DAYS

const spyStatusALLonlySPYDays = spyFULLALL.map((currentSPY) => ({
  ...currentSPY,
  Status7:
    spyUpDown3(currentSPY) +
    ", " +
    dxyUpDown4(currentSPY) +
    ", " +
    tenYearUpDown4(currentSPY) +
    ", " +
    volumeUpDown4(currentSPY) +
    ", " +
    pctUpDown3(currentSPY),
}));

const spyStatusALLonlySPYDaysReverse = spyStatusALLonlySPYDays.reverse();

// TURN ON TO GET SPY STATUS
//console.log(spyStatusALLonlySPYDays.length);
//console.dir(spyStatusALLonlySPYDaysReverse, { maxArrayLength: null });

// PROJECT IMAGINE ALGOS ---> TURN ON ALL CONSOLE LOG BELOW

const spyUpDownNXT = (function () {
  if (spyUpDown === "SPY+1") {
    return up1nextUP.length / up1.length;
  } else if (spyUpDown === "SPY+2") {
    return up2nextUP.length / up2.length;
  } else if (spyUpDown === "SPY+3") {
    return up3nextUP.length / up3.length;
  } else if (spyUpDown === "SPY+4") {
    return up4nextUP.length / up4.length;
  } else if (spyUpDown === "SPY+5") {
    return up5nextUP.length / up5.length;
  } else if (spyUpDown === "SPY+6") {
    return up6nextUP.length / up6.length;
  } else if (spyUpDown === "SPY+7") {
    return up7nextUP.length / up7.length;
  } else if (spyUpDown === "SPY-1") {
    return down1nextUP.length / down1.length;
  } else if (spyUpDown === "SPY-2") {
    return down2nextUP.length / down2.length;
  } else if (spyUpDown === "SPY-3") {
    return down3nextUP.length / down3.length;
  } else if (spyUpDown === "SPY-4") {
    return down4nextUP.length / down4.length;
  } else if (spyUpDown === "SPY-5") {
    return down5nextUP.length / down5.length;
  } else if (spyUpDown === "SPY-6") {
    return down6nextUP.length / down6.length;
  } else if (spyUpDown === "SPY-7") {
    return down7nextUP.length / down7.length;
  }
})();
console.log("SPY = " + spyUpDownNXT);

const dxyUpDownNXT = (function () {
  if (dxyUpDown === "DXY+1") {
    return upDXY1spyUpNext.length / upDXY1.length;
  } else if (dxyUpDown === "DXY+2") {
    return upDXY2spyUpNext.length / upDXY2.length;
  } else if (dxyUpDown === "DXY+3") {
    return upDXY3spyUpNext.length / upDXY3.length;
  } else if (dxyUpDown === "DXY+4") {
    return upDXY3spyUpNext.length / upDXY3.length;
  } else if (dxyUpDown === "DXY+5") {
    return upDXY3spyUpNext.length / upDXY3.length;
  } else if (dxyUpDown === "DXY+6") {
    return upDXY3spyUpNext.length / upDXY3.length;
  } else if (dxyUpDown === "DXY+7") {
    return upDXY3spyUpNext.length / upDXY3.length;
  } else if (dxyUpDown === "DXY-1") {
    return downDXY1spyUpNext.length / downDXY1.length;
  } else if (dxyUpDown === "DXY-2") {
    return downDXY2spyUpNext.length / downDXY2.length;
  } else if (dxyUpDown === "DXY-3") {
    return downDXY3spyUpNext.length / downDXY3.length;
  } else if (dxyUpDown === "DXY-4") {
    return downDXY3spyUpNext.length / downDXY3.length;
  } else if (dxyUpDown === "DXY-5") {
    return downDXY3spyUpNext.length / downDXY3.length;
  } else if (dxyUpDown === "DXY-6") {
    return downDXY3spyUpNext.length / downDXY3.length;
  } else if (dxyUpDown === "DXY-7") {
    return downDXY3spyUpNext.length / downDXY3.length;
  }
})();
console.log("DXY = " + dxyUpDownNXT);

const tenYearUpDownNXT = (function () {
  if (tenYearUpDown === "tenY+1") {
    return uptenYearspyUpNext1.length / uptenYear1.length;
  } else if (tenYearUpDown === "tenY+2") {
    return uptenYearspyUpNext2.length / uptenYear2.length;
  } else if (tenYearUpDown === "tenY+3") {
    return uptenYearspyUpNext3.length / uptenYear3.length;
  } else if (tenYearUpDown === "tenY-1") {
    return downtenYearspyUpNext1.length / downtenYear1.length;
  } else if (tenYearUpDown === "tenY-2") {
    return downtenYearspyUpNext2.length / downtenYear2.length;
  } else if (tenYearUpDown === "tenY-3") {
    return downtenYearspyUpNext3.length / downtenYear3.length;
  }
})();
console.log("TEN YEAR = " + tenYearUpDownNXT);

const volumeUpDownNXT = (function () {
  if (volumeUpDown === "Vol+1") {
    return volUP1spyUPnext.length / volUP1.length;
  } else if (volumeUpDown === "Vol+2") {
    return volUP2spyUPnext.length / volUP2.length;
  } else if (volumeUpDown === "Vol+3") {
    return volUP3spyUPnext.length / volUP3.length;
  } else if (volumeUpDown === "Vol-1") {
    return volDOWN1spyUPnext.length / volDOWN1.length;
  } else if (volumeUpDown === "Vol-2") {
    return volDOWN2spyUPnext.length / volDOWN2.length;
  } else if (volumeUpDown === "Vol-3") {
    return volDOWN3spyUPnext.length / volDOWN3.length;
  }
})();
console.log("VOLUME = " + volumeUpDownNXT);

const pctUpDownNXT = (function () {
  if (pctUpDown === "PCT_0-1+") {
    return spyUPPerct1.length / upPerct1.length;
  } else if (pctUpDown === "PCT_1-2+") {
    return spyUPPerct2.length / upPerct2.length;
  } else if (pctUpDown === "PCT_2-3+") {
    return spyUPPerct3.length / upPerct3.length;
  } else if (pctUpDown === "PCT_3-4+") {
    return spyUPPerct4.length / upPerct4.length;
  } else if (pctUpDown === "PCT_4+") {
    return spyUPPerct5.length / upPerct5.length;
  } else if (pctUpDown === "PCT_0-1-") {
    return spyUPdownPerct1.length / downPerct1.length;
  } else if (pctUpDown === "PCT_1-2-") {
    return spyUPdownPerct2.length / downPerct2.length;
  } else if (pctUpDown === "PCT_2-3-") {
    return spyUPdownPerct3.length / downPerct3.length;
  } else if (pctUpDown === "PCT_3-4-") {
    return spyUPdownPerct4.length / downPerct4.length;
  } else if (pctUpDown === "PCT_4-") {
    return spyUPdownPerct5.length / downPerct5.length;
  }
})();
console.log("PCT = " + pctUpDownNXT);

const baseSpyUpDown = (function () {
  if (spyUpDown === "SPY+1") {
    return up2.length / up1.length;
  } else if (spyUpDown === "SPY+2") {
    return up3.length / up2.length;
  } else if (spyUpDown === "SPY+3") {
    return up4.length / up3.length;
  } else if (spyUpDown === "SPY+4") {
    return up5.length / up4.length;
  } else if (spyUpDown === "SPY+5") {
    return up6.length / up5.length;
  } else if (spyUpDown === "SPY+6") {
    return up7.length / up6.length;
  } else if (spyUpDown === "SPY+7") {
    return up7.length / up6.length;
  } else if (spyUpDown === "SPY-1") {
    return up2.length / up1.length;
  } else if (spyUpDown === "SPY-2") {
    return up2.length / up1.length;
  } else if (spyUpDown === "SPY-3") {
    return up2.length / up1.length;
  } else if (spyUpDown === "SPY-4") {
    return up2.length / up1.length;
  } else if (spyUpDown === "SPY-5") {
    return up2.length / up1.length;
  } else if (spyUpDown === "SPY-6") {
    return up2.length / up1.length;
  } else if (spyUpDown === "SPY-7") {
    return up2.length / up1.length;
  }
})();
console.log("SPY BASE = " + baseSpyUpDown);

// END NEXT SPY

// START PCT CALC

const PCTresult1 =
  (spyUpDownNXT +
    dxyUpDownNXT +
    tenYearUpDownNXT +
    volumeUpDownNXT +
    pctUpDownNXT) /
  5;
const PCTresult2 =
  (spyUpDownNXT +
    dxyUpDownNXT +
    tenYearUpDownNXT +
    volumeUpDownNXT +
    pctUpDownNXT +
    baseSpyUpDown) /
  6;
console.log("PCT 1 RESULT = " + PCTresult1);
console.log("PCT 2 RESULT = " + PCTresult2);

// END PCT CALC

// START IMAGINE ALGOS

const IMAGINE1 = (function () {
  if (PCTresult1 >= 0.52) {
    return "UP";
  } else if (PCTresult1 < 0.52) {
    return "DOWN";
  }
})();
console.log("IMAGINE 1 = " + IMAGINE1);

const IMAGINE2 = (function () {
  if (PCTresult2 >= 0.52) {
    return "UP";
  } else if (PCTresult2 < 0.52) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 2 = " + IMAGINE2);

const IMAGINE3 = (function () {
  if (PCTresult1 >= 0.53) {
    return "UP";
  } else if (PCTresult1 < 0.53) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 3 = " + IMAGINE3);

const IMAGINE4 = (function () {
  if (PCTresult2 >= 0.53) {
    return "UP";
  } else if (PCTresult2 < 0.53) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 4 = " + IMAGINE4);

const IMAGINE5 = (function () {
  if (PCTresult1 >= 0.535) {
    return "UP";
  } else if (PCTresult1 < 0.535) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 5 = " + IMAGINE5);

const IMAGINE6 = (function () {
  if (PCTresult2 >= 0.535) {
    return "UP";
  } else if (PCTresult2 < 0.535) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 6 = " + IMAGINE6);

const IMAGINE7 = (function () {
  if (PCTresult1 >= 0.54) {
    return "UP";
  } else if (PCTresult1 < 0.54) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 7 = " + IMAGINE7);

const IMAGINE8 = (function () {
  if (PCTresult2 >= 0.54) {
    return "UP";
  } else if (PCTresult2 < 0.54) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 8 = " + IMAGINE8);

const IMAGINE9 = (function () {
  if (PCTresult1 >= 0.55) {
    return "UP";
  } else if (PCTresult1 < 0.55) {
    return "DOWN";
  }
})();
//console.log("IMAGINE 9 = " + IMAGINE9);

// IMAGINE X = IMAGINE 1-9 AVERAGE (UP OR DOWN)

// OPEN UP SIMPLE

const spySimpleNEXTOPENUP = (function () {
  if (currentSPY3.Open > currentSPY3.Previous) {
    return "OPEN UP = UP";
  } else if (currentSPY3.Open < currentSPY3.Previous) {
    return "OPEN UP = DOWN";
  }
})();

console.log(spySimpleNEXTOPENUP);

// IMAGINE 11 BELOW STATUS 1

const spyStatusArray1 = spyFULLALL.filter(function (el) {
  return el.Status1 === currentSPY[0].Status1x;
});
console.log("Status 1 SAME STATUS = " + spyStatusArray1.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArray1, { maxArrayLength: null });

//console.log(spyStatusArray1);

const spyStatusNEXTUP = spyStatusArray1.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 1 TOTAL CLOSE UP = " + spyStatusNEXTUP.length);

//console.dir(spyStatusNEXTUP, { maxArrayLength: null });

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArray2 = spyStatusNEXTUP.length / spyStatusArray1.length;

const spyStatusArrayResult =
  Math.round((spyStatusArray2 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 1 PCT = " + spyStatusArrayResult);

// IMAGINE 12 BELOW

console.log("Status 1 SAME STATUS = " + spyStatusArray1.length);

const spyStatusNEXTOPENUP = spyStatusArray1.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 1 TOTAL OPEN UP = " + spyStatusNEXTOPENUP.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArray3 = spyStatusNEXTOPENUP.length / spyStatusArray1.length;

//console.log(spyStatusArray3);
//console.dir(spyStatusNEXTOPENUP, { maxArrayLength: null });

const spyStatusArrayResult3 =
  Math.round((spyStatusArray3 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 1 PCT = " + spyStatusArrayResult3);

// END SECTION HERE

// NO VOLUME BELOW STATUS 2

const spyStatusArrayV = spyFULLALL.filter(function (el) {
  return el.Status2 === currentSPY[0].Status2x;
});
console.log("Status 2 SAME STATUS = " + spyStatusArrayV.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArrayV, { maxArrayLength: null });

//console.log(spyStatusArrayV);

const spyStatusNEXTUPV = spyStatusArrayV.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 2 TOTAL CLOSE UP = " + spyStatusNEXTUPV.length);

//console.dir(spyStatusNEXTUP, { maxArrayLength: null });

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArrayV2 = spyStatusNEXTUPV.length / spyStatusArrayV.length;

const spyStatusArrayResultV =
  Math.round((spyStatusArrayV2 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 2 PCT = " + spyStatusArrayResultV);

const Imagine11ResultV = (function () {
  if (spyStatusArrayResult >= 50) {
    return "IMAGINE 11 = UP";
  } else if (spyStatusArrayResult < 50) {
    return "IMAGINE 11 = DOWN";
  }
})();

//console.log(Imagine11ResultV);

// IMAGINE 12 BELOW

console.log("Status 2 SAME STATUS = " + spyStatusArrayV.length);

const spyStatusNEXTOPENUPV = spyStatusArrayV.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 2 TOTAL OPEN UP = " + spyStatusNEXTOPENUPV.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArray3V = spyStatusNEXTOPENUPV.length / spyStatusArrayV.length;

//console.log(spyStatusArray3);
//console.dir(spyStatusNEXTOPENUP, { maxArrayLength: null });

const spyStatusArrayResultV3 =
  Math.round((spyStatusArray3V * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 2 PCT = " + spyStatusArrayResultV3);

// END SECTION HERE

// NO DXY BELOW STATUS 3

const spyStatusArrayVV = spyFULLALL.filter(function (el) {
  return el.Status3 === currentSPY[0].Status3x;
});
console.log("Status 3 SAME STATUS = " + spyStatusArrayVV.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArrayV, { maxArrayLength: null });

//console.log(spyStatusArrayV);

const spyStatusNEXTUPVV = spyStatusArrayVV.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 3 TOTAL CLOSE UP = " + spyStatusNEXTUPVV.length);

//console.dir(spyStatusNEXTUP, { maxArrayLength: null });

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArrayVVV = spyStatusNEXTUPVV.length / spyStatusArrayVV.length;

const spyStatusArrayResultVV =
  Math.round((spyStatusArrayVVV * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 3 PCT = " + spyStatusArrayResultVV);

//console.log(Imagine11ResultV);

// IMAGINE 12 BELOW

console.log("Status 3 SAME STATUS = " + spyStatusArrayVV.length);

const spyStatusNEXTOPENUPVV = spyStatusArrayVV.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 3 TOTAL OPEN UP = " + spyStatusNEXTOPENUPVV.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArray3VV =
  spyStatusNEXTOPENUPVV.length / spyStatusArrayVV.length;

//console.log(spyStatusArray3);
//console.dir(spyStatusNEXTOPENUP, { maxArrayLength: null });

const spyStatusArrayResultV3V =
  Math.round((spyStatusArray3VV * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 3 PCT = " + spyStatusArrayResultV3V);

//console.log(Imagine12ResultV);

// END SECTION HERE

// NO DXY NO VOL BELOW STATUS 4

const spyStatusArrayA1 = spyFULLALL.filter(function (el) {
  return el.Status4 === currentSPY[0].Status4x;
});
console.log("Status 4 SAME STATUS = " + spyStatusArrayA1.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArrayV, { maxArrayLength: null });

//console.log(spyStatusArrayV);

const spyStatusNEXTUPA1 = spyStatusArrayA1.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 4 TOTAL CLOSE UP = " + spyStatusNEXTUPA1.length);

//console.dir(spyStatusNEXTUP, { maxArrayLength: null });

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArrayB1 = spyStatusNEXTUPA1.length / spyStatusArrayA1.length;

const spyStatusArrayResultA1 =
  Math.round((spyStatusArrayB1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 4 PCT = " + spyStatusArrayResultA1);

//console.log(Imagine11ResultV);

// IMAGINE 12 BELOW

console.log("Status 4 SAME STATUS = " + spyStatusArrayA1.length);

const spyStatusNEXTOPENUPA1 = spyStatusArrayA1.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 4 TOTAL OPEN UP = " + spyStatusNEXTOPENUPA1.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArrayC1 = spyStatusNEXTOPENUPA1.length / spyStatusArrayA1.length;

//console.log(spyStatusArray3);
//console.dir(spyStatusNEXTOPENUP, { maxArrayLength: null });

const spyStatusArrayResultC1 =
  Math.round((spyStatusArrayC1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 4 PCT = " + spyStatusArrayResultC1);

//console.log(Imagine12ResultV);

// END SECTION HERE

// NO PCT STATUS 5

const spyStatusArrayD1 = spyFULLALL.filter(function (el) {
  return el.Status5 === currentSPY[0].Status5x;
});
console.log("Status 5 SAME STATUS = " + spyStatusArrayD1.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArrayV, { maxArrayLength: null });

//console.log(spyStatusArrayV);

const spyStatusNEXTUPD1 = spyStatusArrayD1.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 5 TOTAL CLOSE UP = " + spyStatusNEXTUPD1.length);

//console.dir(spyStatusNEXTUP, { maxArrayLength: null });

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArrayE1 = spyStatusNEXTUPD1.length / spyStatusArrayD1.length;

const spyStatusArrayResultD1 =
  Math.round((spyStatusArrayE1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 5 PCT = " + spyStatusArrayResultD1);

//console.log(Imagine11ResultV);

// IMAGINE 12 BELOW

console.log("Status 5 SAME STATUS = " + spyStatusArrayD1.length);

const spyStatusNEXTOPENUPD1 = spyStatusArrayD1.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 5 TOTAL OPEN UP = " + spyStatusNEXTOPENUPD1.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArrayF1 = spyStatusNEXTOPENUPD1.length / spyStatusArrayD1.length;

//console.log(spyStatusArray3);
//console.dir(spyStatusNEXTOPENUP, { maxArrayLength: null });

const spyStatusArrayResultF1 =
  Math.round((spyStatusArrayF1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 5 PCT = " + spyStatusArrayResultF1);

// END SECTION HERE

// NO SPY DAYS STATUS 6

const spyStatusArrayH1 = spyFULLALL.filter(function (el) {
  return el.Status6 === currentSPY[0].Status6x;
});
console.log("Status 6 SAME STATUS = " + spyStatusArrayH1.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArrayV, { maxArrayLength: null });

//console.log(spyStatusArrayV);

const spyStatusNEXTUPH1 = spyStatusArrayH1.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 6 TOTAL CLOSE UP = " + spyStatusNEXTUPH1.length);

//console.dir(spyStatusNEXTUP, { maxArrayLength: null });

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArrayG1 = spyStatusNEXTUPH1.length / spyStatusArrayH1.length;

const spyStatusArrayResultH1 =
  Math.round((spyStatusArrayG1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 6 PCT = " + spyStatusArrayResultH1);

// IMAGINE 12 BELOW

console.log("Status 6 SAME STATUS = " + spyStatusArrayH1.length);

const spyStatusNEXTOPENUPH1 = spyStatusArrayH1.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 6 TOTAL OPEN UP = " + spyStatusNEXTOPENUPH1.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArrayJ1 = spyStatusNEXTOPENUPH1.length / spyStatusArrayH1.length;

//console.log(spyStatusArray3);
//console.dir(spyStatusNEXTOPENUP, { maxArrayLength: null });

const spyStatusArrayResultJ1 =
  Math.round((spyStatusArrayJ1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 6 PCT = " + spyStatusArrayResultJ1);

// END SECTION HERE

// IMAGINE 13 BELOW STATUS 7

const spyStatusArray5 = spyFULLALL.filter(function (el) {
  return el.Status7 === currentSPY[0].Status7x;
});
console.log("Status 7 SAME STATUS = " + spyStatusArray5.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArray5, { maxArrayLength: null });

const spyStatusNEXTUP5 = spyStatusArray5.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 7 TOTAL CLOSE UP = " + spyStatusNEXTUP5.length);

//console.dir(spyStatusNEXTUP5, { maxArrayLength: null });

// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
const spyStatusArray6 = spyStatusNEXTUP5.length / spyStatusArray5.length;

const spyStatusArrayResult5 =
  Math.round((spyStatusArray6 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 7 PCT = " + spyStatusArrayResult5);

// IMAGINE 14 BELOW

console.log("Status 7 SAME STATUS = " + spyStatusArray5.length);

const spyStatusNEXTOPENUP2 = spyStatusArray5.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 7 TOTAL OPEN UP = " + spyStatusNEXTOPENUP2.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArray7 = spyStatusNEXTOPENUP2.length / spyStatusArray5.length;

//console.dir(spyStatusNEXTOPENUP2, { maxArrayLength: null });

const spyStatusArrayResult6 =
  Math.round((spyStatusArray7 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 7 PCT = " + spyStatusArrayResult6);

// END SECTION HERE

// ONLY SPY DAYS STATUS 8

const spyStatusArrayR1 = spyFULLALL.filter(function (el) {
  return el.Status8 === currentSPY[0].Status8x;
});
console.log("Status 8 SAME STATUS = " + spyStatusArrayR1.length);
// LOOK AT ALL OBJECTS WITH CURRENT STATUS BELOW
//console.dir(spyStatusArrayV, { maxArrayLength: null });

//console.log(spyStatusArrayV);

const spyStatusNEXTUPR1 = spyStatusArrayR1.filter(function (el) {
  return el.Close < el.Next1;
});
console.log("Status 8 TOTAL CLOSE UP = " + spyStatusNEXTUPR1.length);

//console.dir(spyStatusNEXTUP, { maxArrayLength: null });

//REMOVE -1 IN EQUATION WHEN LOOKING AT PAST DAYS
const spyStatusArrayS1 = spyStatusNEXTUPR1.length / spyStatusArrayR1.length;

const spyStatusArrayResultR1 =
  Math.round((spyStatusArrayS1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 8 PCT = " + spyStatusArrayResultR1);

// IMAGINE 12 BELOW

console.log("Status 8 SAME STATUS = " + spyStatusArrayR1.length);

const spyStatusNEXTOPENUPR1 = spyStatusArrayR1.filter(function (el) {
  return el.Close < el.NextOpen;
});
console.log("Status 8 TOTAL OPEN UP = " + spyStatusNEXTOPENUPR1.length);
// REMOVE -1 spyStatusArray5.length WHEN LOOKING AT PAST DAYS
// ADD -1 IN spyStatusArray5.length WHEN MARKET OPENS DOWN TODAY
const spyStatusArrayT1 = spyStatusNEXTOPENUPR1.length / spyStatusArrayR1.length;

//console.log(spyStatusArray3);
//console.dir(spyStatusNEXTOPENUP, { maxArrayLength: null });

const spyStatusArrayResultT1 =
  Math.round((spyStatusArrayT1 * 100 + Number.EPSILON) * 100) / 100;
console.log("Status 8 PCT = " + spyStatusArrayResultT1);

// END SECTION HERE

// IMAGINE 15 BELOW

//const Imagine15Result = (function () {
//  if (spyStatusArrayResult >= 58) {
//    return "IMAGINE 15 = UP";
//  } else if (spyStatusArrayResult <= 24 || spyStatusArrayResult5 < 50) {
//    return "IMAGINE 15 = DOWN";
//  } else {
//    return "IMAGINE 15 = NOT IN FIELD";
//  }
//})();

//console.log(Imagine15Result);
//END IMAGINE ALGOS

const dataTable = [
  spyStatusArrayResult3,
  spyStatusNEXTOPENUP.length,
  spyStatusArray1.length,
  spyStatusArrayResult,
  spyStatusNEXTUP.length,
  spyStatusArray1.length,
  spyStatusArrayResultV3,
  spyStatusNEXTOPENUPV.length,
  spyStatusArrayV.length,
  spyStatusArrayResultV,
  spyStatusNEXTUPV.length,
  spyStatusArrayV.length,
  spyStatusArrayResultV3V,
  spyStatusNEXTOPENUPVV.length,
  spyStatusArrayVV.length,
  spyStatusArrayResultVV,
  spyStatusNEXTUPVV.length,
  spyStatusArrayVV.length,
  spyStatusArrayResultC1,
  spyStatusNEXTOPENUPA1.length,
  spyStatusArrayA1.length,
  spyStatusArrayResultA1,
  spyStatusNEXTUPA1.length,
  spyStatusArrayA1.length,
  spyStatusArrayResultF1,
  spyStatusNEXTOPENUPD1.length,
  spyStatusArrayD1.length,
  spyStatusArrayResultD1,
  spyStatusNEXTUPD1.length,
  spyStatusArrayD1.length,
  spyStatusArrayResultJ1,
  spyStatusNEXTOPENUPH1.length,
  spyStatusArrayH1.length,
  spyStatusArrayResultH1,
  spyStatusNEXTUPH1.length,
  spyStatusArrayH1.length,
  spyStatusArrayResult6,
  spyStatusNEXTOPENUP2.length,
  spyStatusArray5.length,
  spyStatusArrayResult5,
  spyStatusNEXTUP5.length,
  spyStatusArray5.length,
  spyStatusArrayResultT1,
  spyStatusNEXTOPENUPR1.length,
  spyStatusArrayR1.length,
  spyStatusArrayResultR1,
  spyStatusNEXTUPR1.length,
  spyStatusArrayR1.length,
];
console.log(dataTable);
