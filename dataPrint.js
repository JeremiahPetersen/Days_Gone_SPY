const { spyALL } = require("./spyALL.js");
const { dxyALL } = require("./dxyALL.js");
const { tenYearALL } = require("./tenYearALL.js");
const { cpiALL } = require("./cpiALL.js");
const { futuresALL } = require("./futuresALL.js");
const { cesALL } = require("./cesALL.js");
const { spyFULLALL } = require("./spyFULLALL.js");

// ^^ RAW DATA ^^

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
//tenYearUpSPyUpNext1
//tenYearUp2SPyUpNext1
//tenYearUp3SPyUpNext1
//tenYearDownSPyUpNext1
//tenYearDown2SPyUpNext1
//tenYearDown3SPyUpNext1
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

// RAW DATA LENGTH

console.log(spyFULLALL.length);
console.log(dxyALL.length);
console.log(tenYearALL.length);
console.log(cpiALL.length);

// SPY +- 1-7 DAYS

// UP 1 DAY

const up1 = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous;
});
//console.dir(up1, {'maxArrayLength': null});
console.log(up1.length);

// UP 2 DAY

const up2 = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous && el.Previous >= el.Previous2;
});
//console.dir(up2, {'maxArrayLength': null});
console.log(up2.length);

// UP 3 DAY

const up3 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3
  );
});
//console.dir(up3, {'maxArrayLength': null});
console.log(up3.length);

// UP 4 DAY

const up4 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4
  );
});
//console.dir(up4, {'maxArrayLength': null});
console.log(up4.length);

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
console.log(up5.length);

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
console.log(up6.length);

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
console.log(up7.length);

// DOWN 1 DAY

const down1 = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous;
});
//console.dir(down1, {'maxArrayLength': null});
console.log(down1.length);

// DOWN 2 DAY

const down2 = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous && el.Previous < el.Previous2;
});
//console.dir(down2, {'maxArrayLength': null});
console.log(down2.length);

// DOWN 3 DAY

const down3 = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3
  );
});
//console.dir(down3, {'maxArrayLength': null});
console.log(down3.length);

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
console.log(down4.length);

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
console.log(down5.length);

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
console.log(down6.length);

// DOWN 7 DAY

const down7 = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Previous5 < el.Previous6 &&
    el.Previous6 < el.Previous7
  );
});
//console.dir(down7, {'maxArrayLength': null});
console.log(down7.length);

// VOLUME +-

// SPY VOL +50,000,000 - +75,000,000

const volAbove50 = spyFULLALL.filter(function (el) {
  return el.Volume > 50000000 && el.Volume < 75000000;
});
//console.dir(volAbove50, {'maxArrayLength': null});
console.log(volAbove50.length);

// SPY VOL +75,000,000 - +100,000,000

const volAbove75 = spyFULLALL.filter(function (el) {
  return el.Volume > 75000000 && el.Volume < 100000000;
});
//console.dir(volAbove75, {'maxArrayLength': null});
console.log(volAbove75.length);

// SPY VOL +100,000,000

const volAbove100 = spyFULLALL.filter(function (el) {
  return el.Volume > 100000000;
});
//console.dir(volAbove100, {'maxArrayLength': null});
console.log(volAbove100.length);

// SPY VOL -50,000,000

const volBelow50 = spyFULLALL.filter(function (el) {
  return el.Volume < 50000000;
});
//console.dir(volBelow50, {'maxArrayLength': null});
console.log(volBelow50.length);

// SPY UP VOL +50,000,000

const spyUpvolAbove50 = spyFULLALL.filter(function (el) {
  return el.Volume > 50000000 && el.Volume < 75000000 && el.Close > el.Previous;
});
//console.dir(spyUpvolAbove50, {'maxArrayLength': null});
console.log(spyUpvolAbove50.length);

// SPY UP VOL +75,000,000

const spyUpvolAbove75 = spyFULLALL.filter(function (el) {
  return (
    el.Volume > 75000000 && el.Volume < 100000000 && el.Close > el.Previous
  );
});
//console.dir(spyUpvolAbove75, {'maxArrayLength': null});
console.log(spyUpvolAbove75.length);

// SPY UP VOL +100,000,000

const spyUpvolAbove100 = spyFULLALL.filter(function (el) {
  return el.Volume > 100000000 && el.Close > el.Previous;
});
//console.dir(spyUpvolAbove100, {'maxArrayLength': null});
console.log(spyUpvolAbove100.length);

// SPY DOWN VOL +50,000,000

const spyDownvolAbove50 = spyFULLALL.filter(function (el) {
  return el.Volume > 50000000 && el.Volume < 75000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolAbove50, {'maxArrayLength': null});
console.log(spyDownvolAbove50.length);

// SPY DOWN VOL +75,000,000

const spyDownvolAbove75 = spyFULLALL.filter(function (el) {
  return (
    el.Volume > 75000000 && el.Volume < 100000000 && el.Close < el.Previous
  );
});
//console.dir(spyDownvolAbove75, {'maxArrayLength': null});
console.log(spyDownvolAbove75.length);

// SPY DOWN VOL +100,000,000

const spyDownvolAbove100 = spyFULLALL.filter(function (el) {
  return el.Volume > 100000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolAbove100, {'maxArrayLength': null});
console.log(spyDownvolAbove100.length);

// SPY UP VOL -50,000,000

const spyUpvolBelow50 = spyFULLALL.filter(function (el) {
  return el.Volume < 50000000 && el.Close > el.Previous;
});
//console.dir(spyUpvolBelow50, {'maxArrayLength': null});
console.log(spyUpvolBelow50.length);

// SPY UP VOL -75,000,000

const spyUpvolBelow75 = spyFULLALL.filter(function (el) {
  return el.Volume < 75000000 && el.Volume > 50000000 && el.Close > el.Previous;
});
//console.dir(spyUpvolBelow75, {'maxArrayLength': null});
console.log(spyUpvolBelow75.length);

// SPY UP VOL -100,000,000

const spyUpvolBelow100 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < 100000000 && el.Volume > 75000000 && el.Close > el.Previous
  );
});
//console.dir(spyUpvolBelow100, {'maxArrayLength': null});
console.log(spyUpvolBelow100.length);

// SPY DOWN VOL -50,000,000

const spyDownvolBelow50 = spyFULLALL.filter(function (el) {
  return el.Volume < 50000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolBelow50, {'maxArrayLength': null});
console.log(spyDownvolBelow50.length);

// SPY DOWN VOL -75,000,000

const spyDownvolBelow75 = spyFULLALL.filter(function (el) {
  return el.Volume < 75000000 && el.Volume > 50000000 && el.Close < el.Previous;
});
//console.dir(spyDownvolBelow75, {'maxArrayLength': null});
console.log(spyDownvolBelow75.length);

// SPY DOWN VOL -100,000,000

const spyDownvolBelow100 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < 100000000 && el.Volume > 75000000 && el.Close < el.Previous
  );
});
//console.dir(spyDownvolBelow100, {'maxArrayLength': null});
console.log(spyDownvolBelow100.length);

// VOLUME COMPARED TO PREVIOUS VOLUME

// VOLUME UP 1 DAY

const volUP1 = spyFULLALL.filter(function (el) {
  return el.Volume > el.PreviousVol1;
});
//console.dir(volUP1, {'maxArrayLength': null});
console.log(volUP1.length);

// VOLUME UP 2 DAY

const volUP2 = spyFULLALL.filter(function (el) {
  return el.Volume > el.PreviousVol1 && el.PreviousVol1 > el.PreviousVol2;
});
//console.dir(volUP2, {'maxArrayLength': null});
console.log(volUP2.length);

// VOLUME UP 3 DAY

const volUP3 = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.PreviousVol2 > el.PreviousVol3
  );
});
//console.dir(volUP3, {'maxArrayLength': null});
console.log(volUP3.length);

// VOLUME DOWN 1 DAY

const volDOWN1 = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1;
});
//console.dir(volDOWN1, {'maxArrayLength': null});
console.log(volDOWN1.length);

// VOLUME DOWN 2 DAY

const volDOWN2 = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.PreviousVol1 < el.PreviousVol2;
});
//console.dir(volDOWN2, {'maxArrayLength': null});
console.log(volDOWN2.length);

// VOLUME DOWN 3 DAY

const volDOWN3 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3
  );
});
//console.dir(volDOWN3, {'maxArrayLength': null});
console.log(volDOWN3.length);

// VOLUME UP 1 DAY SPY UP

const volUP1spyUP = spyFULLALL.filter(function (el) {
  return el.Volume > el.PreviousVol1 && el.Close > el.Previous;
});
//console.dir(volUP1spyUP, {'maxArrayLength': null});
console.log(volUP1spyUP.length);

// VOLUME UP 2 DAY SPY UP

const volUP2spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.Close > el.Previous
  );
});
//console.dir(volUP2spyUP, {'maxArrayLength': null});
console.log(volUP2spyUP.length);

// VOLUME UP 3 DAY SPY UP

const volUP3spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.PreviousVol2 > el.PreviousVol3 &&
    el.Close > el.Previous
  );
});
//console.dir(volUP3spyUP, {'maxArrayLength': null});
console.log(volUP3spyUP.length);

// VOLUME UP 1 DAY SPY DOWN

const volUP1spyDOWN = spyFULLALL.filter(function (el) {
  return el.Volume > el.PreviousVol1 && el.Close < el.Previous;
});
//console.dir(volUP1spyDOWN, {'maxArrayLength': null});
console.log(volUP1spyDOWN.length);

// VOLUME UP 2 DAY SPY DOWN

const volUP2spyDOWN = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.Close < el.Previous
  );
});
//console.dir(volUP2spyDOWN, {'maxArrayLength': null});
console.log(volUP2spyDOWN.length);

// VOLUME UP 3 DAY SPY DOWN

const volUP3spyDOWN = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.PreviousVol2 > el.PreviousVol3 &&
    el.Close < el.Previous
  );
});
//console.dir(volUP3spyDOWN, {'maxArrayLength': null});
console.log(volUP3spyDOWN.length);

// VOLUME DOWN 1 DAY SPY UP

const volDOWN1spyUP = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Close > el.Previous;
});
//console.dir(volDOWN1spyUP, {'maxArrayLength': null});
console.log(volDOWN1spyUP.length);

// VOLUME DOWN 2 DAY SPY UP

const volDOWN2spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.Close > el.Previous
  );
});
//console.dir(volDOWN2spyUP, {'maxArrayLength': null});
console.log(volDOWN2spyUP.length);

// VOLUME DOWN 3 DAY SPY UP

const volDOWN3spyUP = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3 &&
    el.Close > el.Previous
  );
});
//console.dir(volDOWN3spyUP, {'maxArrayLength': null});
console.log(volDOWN3spyUP.length);

// VOLUME DOWN 1 DAY SPY DOWN

const volDOWN1spyDOWN = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Close < el.Previous;
});
//console.dir(volDOWN1spyDOWN, {'maxArrayLength': null});
console.log(volDOWN1spyDOWN.length);

// VOLUME DOWN 2 DAY SPY DOWN

const volDOWN2spyDOWN = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.Close < el.Previous
  );
});
//console.dir(volDOWN2spyDOWN, {'maxArrayLength': null});
console.log(volDOWN2spyDOWN.length);

// VOLUME DOWN 3 DAY SPY DOWN

const volDOWN3spyDOWN = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3 &&
    el.Close < el.Previous
  );
});
//console.dir(volDOWN3spyDOWN, {'maxArrayLength': null});
console.log(volDOWN3spyDOWN.length);

// SPY PCT

// SPY +0-1%

const upPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "1.00%" && el.PCT > "0.00%" && el.Close > el.Previous;
});
//console.dir(upPerct1, { maxArrayLength: null });
console.log(upPerct1.length);

// SPY +1-2%

const upPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "2.00%" && el.PCT > "1.00%" && el.Close > el.Previous;
});
//console.dir(upPerct2, { maxArrayLength: null });
console.log(upPerct2.length);

// SPY +2-3%

const upPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "3.00%" && el.PCT > "2.00%" && el.Close > el.Previous;
});
//console.dir(upPerct3, { maxArrayLength: null });
console.log(upPerct3.length);

// SPY +3-4%

const upPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "4.00%" && el.PCT > "3.00%" && el.Close > el.Previous;
});
//console.dir(upPerct4, { maxArrayLength: null });
console.log(upPerct4.length);

// SPY +4%+

const upPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT > "4.00%" && el.Close > el.Previous;
});
//console.dir(upPerct5, { maxArrayLength: null });
console.log(upPerct5.length);

// SPY -0-(-1%)

const downPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "-1.00%" && el.PCT > "-0.00%" && el.Close < el.Previous;
});
//console.dir(downPerct1, { maxArrayLength: null });
console.log(downPerct1.length);

// SPY -1-(-2%)

const downPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "-2.00%" && el.PCT > "-1.00%" && el.Close < el.Previous;
});
//console.dir(downPerct2, { maxArrayLength: null });
console.log(downPerct2.length);

// SPY -2-(-3%)

const downPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "-3.00%" && el.PCT > "-2.00%" && el.Close < el.Previous;
});
//console.dir(downPerct3, { maxArrayLength: null });
console.log(downPerct3.length);

// SPY -3-(-4%)

const downPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "-4.00%" && el.PCT > "-3.00%" && el.Close < el.Previous;
});
//console.dir(downPerct4, { maxArrayLength: null });
console.log(downPerct4.length);

// SPY -4%+

const downPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT < "-50.00%" && el.PCT > "-4.00%" && el.Close < el.Previous;
});
//console.dir(downPerct5, { maxArrayLength: null });
console.log(downPerct5.length);

// SPY UP/DOWN AFTER PCT UP/DOWN

// SPY UP AFTER +0-1%

const spyUPPerct1 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "1.00%" &&
    el.PCT > "0.00%" &&
    el.Close > el.Previous &&
    el.Next1 > el.Close
  );
});
//console.dir(spyUPPerct1, { maxArrayLength: null });
console.log(spyUPPerct1.length);

// SPY UP AFTER +1-2%

const spyUPPerct2 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "2.00%" &&
    el.PCT > "1.00%" &&
    el.Close > el.Previous &&
    el.Next1 > el.Close
  );
});
//console.dir(spyUPPerct2, { maxArrayLength: null });
console.log(spyUPPerct2.length);

// SPY UP AFTER +2-3%

const spyUPPerct3 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "3.00%" &&
    el.PCT > "2.00%" &&
    el.Close > el.Previous &&
    el.Next1 > el.Close
  );
});
//console.dir(spyUPPerct3, { maxArrayLength: null });
console.log(spyUPPerct3.length);

// SPY UP AFTER +3-4%

const spyUPPerct4 = spyFULLALL.filter(function (el) {
  return (
    el.PCT < "4.00%" &&
    el.PCT > "3.00%" &&
    el.Close > el.Previous &&
    el.Next1 > el.Close
  );
});
//console.dir(spyUPPerct4, { maxArrayLength: null });
console.log(spyUPPerct4.length);

// SPY UP AFTER +4%+

const spyUPPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT > "4.00%" && el.Close > el.Previous && el.Next1 > el.Close;
});
//console.dir(spyUPPerct5, { maxArrayLength: null });
console.log(spyUPPerct5.length);

// SPY UP AFTER -0-(-1%)

const spyUPdownPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "-1.00%" && el.PCT > "-0.00%" && el.Next1 > el.Close;
});
//console.dir(spyUPdownPerct1, { maxArrayLength: null });
console.log(spyUPdownPerct1.length);

// SPY UP AFTER -1-(-2%)

const spyUPdownPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "-2.00%" && el.PCT > "-1.00%" && el.Next1 > el.Close;
});
//console.dir(spyUPdownPerct2, { maxArrayLength: null });
console.log(spyUPdownPerct2.length);

// SPY UP AFTER -2-(-3%)

const spyUPdownPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "-3.00%" && el.PCT > "-2.00%" && el.Next1 > el.Close;
});
//console.dir(spyUPdownPerct3, { maxArrayLength: null });
console.log(spyUPdownPerct3.length);

// SPY UP AFTER -3-(-4%)

const spyUPdownPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "-4.00%" && el.PCT > "-3.00%" && el.Next1 > el.Close;
});
//console.dir(spyUPdownPerct4, { maxArrayLength: null });
console.log(spyUPdownPerct4.length);

// SPY UP AFTER -4%+

const spyUPdownPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT < "-50.00%" && el.PCT > "-4.00%" && el.Next1 > el.Close;
});
//console.dir(spyUPdownPerct5, { maxArrayLength: null });
console.log(spyUPdownPerct5.length);

// SPY WITH TENYEAR

// TEN YEAR 1 DAY UP

const uptenYear1 = spyFULLALL.filter(function (el) {
  return el.tenYClose > el.tenYPrevious1;
});
//console.dir(uptenYear1, {'maxArrayLength': null});
console.log(uptenYear1.length);

// TEN YEAR 2 DAY UP

const uptenYear2 = spyFULLALL.filter(function (el) {
  return el.tenYClose > el.tenYPrevious1 && el.tenYPrevious1 > el.tenYPrevious2;
});
//console.dir(uptenYear2, {'maxArrayLength': null});
console.log(uptenYear2.length);

// TEN YEAR 3 DAY UP

const uptenYear3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose > el.tenYPrevious1 &&
    el.tenYPrevious1 > el.tenYPrevious2 &&
    el.tenYPrevious2 > el.tenYPrevious3
  );
});
//console.dir(uptenYear3, {'maxArrayLength': null});
console.log(uptenYear3.length);

// TEN YEAR 1 DAY DOWN

const downtenYear1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1;
});
//console.dir(downtenYear1, {'maxArrayLength': null});
console.log(downtenYear1.length);

// TEN YEAR 2 DAY DOWN

const downtenYear2 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.tenYPrevious1 < el.tenYPrevious2;
});
//console.dir(downtenYear2, {'maxArrayLength': null});
console.log(downtenYear2.length);

// TEN YEAR 3 DAY DOWN

const downtenYear3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.tenYPrevious2 < el.tenYPrevious3
  );
});
//console.dir(downtenYear3, {'maxArrayLength': null});
console.log(downtenYear3.length);

// TEN YEAR UP 1 DAY & SPY UP

const uptenYearUp1 = spyFULLALL.filter(function (el) {
  return el.tenYClose > el.tenYPrevious1 && el.Close >= el.Previous;
});
//console.dir(uptenYearUp1, {'maxArrayLength': null});
console.log(uptenYearUp1.length);

// TEN YEAR UP 2 DAY & SPY UP

const uptenYearUp2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose > el.tenYPrevious1 &&
    el.tenYPrevious1 > el.tenYPrevious2 &&
    el.Close >= el.Previous
  );
});
//console.dir(uptenYearUp2, {'maxArrayLength': null});
console.log(uptenYearUp2.length);

// TEN YEAR UP 3 DAY & SPY UP

const uptenYearUp3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose > el.tenYPrevious1 &&
    el.tenYPrevious1 > el.tenYPrevious2 &&
    el.tenYPrevious2 > el.tenYPrevious3 &&
    el.Close >= el.Previous
  );
});
//console.dir(uptenYearUp3, {'maxArrayLength': null});
console.log(uptenYearUp3.length);

// TEN YEAR DOWN 1 DAY & SPY UP

const downtenYearUp1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.Close >= el.Previous;
});
//console.dir(downtenYearUp1, {'maxArrayLength': null});
console.log(downtenYearUp1.length);

// TEN YEAR DOWN 2 DAY & SPY UP

const downtenYearUp2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.Close >= el.Previous
  );
});
//console.dir(downtenYearUp2, {'maxArrayLength': null});
console.log(downtenYearUp2.length);

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
console.log(downtenYearUp3.length);

//tenYearUpSPyUpNext1

const uptenYearspyUpNext1 = spyFULLALL.filter(function (el) {
  return el.tenYClose > el.tenYPrevious1 && el.Close < el.Next1;
});
//console.dir(uptenYearspyUpNext1, {'maxArrayLength': null});
console.log(uptenYearspyUpNext1.length);

//tenYearUp2SPyUpNext1

const uptenYearspyUpNext2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose > el.tenYPrevious1 &&
    el.tenYPrevious1 > el.tenYPrevious2 &&
    el.Close < el.Next1
  );
});
//console.dir(uptenYearspyUpNext2, {'maxArrayLength': null});
console.log(uptenYearspyUpNext2.length);

//tenYearUp3SPyUpNext1

const uptenYearspyUpNext3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose > el.tenYPrevious1 &&
    el.tenYPrevious1 > el.tenYPrevious2 &&
    el.tenYPrevious2 > el.tenYPrevious3 &&
    el.Close < el.Next1
  );
});
//console.dir(uptenYearspyUpNext3, {'maxArrayLength': null});
console.log(uptenYearspyUpNext3.length);

//tenYearDownSPyUpNext1

const downtenYearspyUpNext1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.Close < el.Next1;
});
//console.dir(downtenYearspyUpNext1, {'maxArrayLength': null});
console.log(downtenYearspyUpNext1.length);

//tenYearDown2SPyUpNext1

const downtenYearspyUpNext2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.Close < el.Next1
  );
});
//console.dir(downtenYearspyUpNext2, {'maxArrayLength': null});
console.log(downtenYearspyUpNext2.length);

//tenYearDown3SPyUpNext1

const downtenYearspyUpNext3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.tenYPrevious2 < el.tenYPrevious3 &&
    el.Close < el.Next1
  );
});
//console.dir(downtenYearspyUpNext3, {'maxArrayLength': null});
console.log(downtenYearspyUpNext3.length);

// DXY AND SPY

//dxyUP1

const upDXY1 = spyFULLALL.filter(function (el) {
  return el.dxyClose > el.dxyPrevious1;
});
//console.dir(upDXY1, {'maxArrayLength': null});
console.log(upDXY1.length);

//dxyUP2

const upDXY2 = spyFULLALL.filter(function (el) {
  return el.dxyClose > el.dxyPrevious1 && el.dxyPrevious1 > el.dxyPrevious2;
});
//console.dir(upDXY2, {'maxArrayLength': null});
console.log(upDXY2.length);

//dxyUP3

const upDXY3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose > el.dxyPrevious1 &&
    el.dxyPrevious1 > el.dxyPrevious2 &&
    el.dxyPrevious2 > el.dxyPrevious3
  );
});
//console.dir(upDXY3, {'maxArrayLength': null});
console.log(upDXY3.length);

//dxyDown1

const downDXY1 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1;
});
//console.dir(downDXY1, {'maxArrayLength': null});
console.log(downDXY1.length);

//dxyDown2

const downDXY2 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.dxyPrevious1 < el.dxyPrevious2;
});
//console.dir(downDXY2, {'maxArrayLength': null});
console.log(downDXY2.length);

//dxyDown3

const downDXY3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3
  );
});
//console.dir(downDXY3, {'maxArrayLength': null});
console.log(downDXY3.length);

//dxyUP1spyUp

const upDXYspyUP1 = spyFULLALL.filter(function (el) {
  return el.dxyClose > el.dxyPrevious1 && el.Close > el.Previous;
});
//console.dir(upDXYspyUP1, {'maxArrayLength': null});
console.log(upDXYspyUP1.length);

//dxyUP2spyUp

const upDXYspyUP2 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose > el.dxyPrevious1 &&
    el.dxyPrevious1 > el.dxyPrevious2 &&
    el.Close > el.Previous
  );
});
//console.dir(upDXYspyUP2, {'maxArrayLength': null});
console.log(upDXYspyUP2.length);

//dxyUP3spyUp

const upDXYspyUP3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose > el.dxyPrevious1 &&
    el.dxyPrevious1 > el.dxyPrevious2 &&
    el.dxyPrevious2 > el.dxyPrevious3 &&
    el.Close > el.Previous
  );
});
//console.dir(upDXYspyUP3, {'maxArrayLength': null});
console.log(upDXYspyUP3.length);

//dxyDown1spyUp

const downDXYspyUP1 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.Close > el.Previous;
});
//console.dir(downDXYspyUP1, {'maxArrayLength': null});
console.log(downDXYspyUP1.length);

//dxyDown2spyUp

const downDXYspyUP2 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.Close > el.Previous
  );
});
//console.dir(downDXYspyUP2, {'maxArrayLength': null});
console.log(downDXYspyUP2.length);

//dxyDown3spyUp

const downDXYspyUP3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3 &&
    el.Close > el.Previous
  );
});
//console.dir(downDXYspyUP3, {'maxArrayLength': null});
console.log(downDXYspyUP3.length);

//dxyUp1SPyUpNext1

const upDXY1spyUpNext = spyFULLALL.filter(function (el) {
  return el.dxyClose > el.dxyPrevious1 && el.Close < el.Next1;
});
//console.dir(upDXY1spyUpNext, {'maxArrayLength': null});
console.log(upDXY1spyUpNext.length);

//dxyUp2SPyUpNext1

const upDXY2spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose > el.dxyPrevious1 &&
    el.dxyPrevious1 > el.dxyPrevious2 &&
    el.Close < el.Next1
  );
});
//console.dir(upDXY2spyUpNext, {'maxArrayLength': null});
console.log(upDXY2spyUpNext.length);

//dxyUp3SPyUpNext1

const upDXY3spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose > el.dxyPrevious1 &&
    el.dxyPrevious1 > el.dxyPrevious2 &&
    el.dxyPrevious2 > el.dxyPrevious3 &&
    el.Close < el.Next1
  );
});
//console.dir(upDXY3spyUpNext, {'maxArrayLength': null});
console.log(upDXY3spyUpNext.length);

//dxyDown1SPyUpNext1

const downDXY1spyUpNext = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.Close < el.Next1;
});
//console.dir(downDXY1spyUpNext, {'maxArrayLength': null});
console.log(downDXY1spyUpNext.length);

//dxyDown2SPyUpNext1

const downDXY2spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.Close < el.Next1
  );
});
//console.dir(downDXY2spyUpNext, {'maxArrayLength': null});
console.log(downDXY2spyUpNext.length);

//dxyDown3SPyUpNext1

const downDXY3spyUpNext = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Next1 &&
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3
  );
});
//console.dir(downDXY3spyUpNext, {'maxArrayLength': null});
console.log(downDXY3spyUpNext.length);

//SPYup1nextUP

const up1nextUP = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous && el.Next1 > el.Close;
});
//console.dir(up1nextUP, {'maxArrayLength': null});
console.log(up1nextUP.length);

//SPYup2nextUP

const up2nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Next1 > el.Close
  );
});
//console.dir(up2nextUP, {'maxArrayLength': null});
console.log(up2nextUP.length);

//SPYup3nextUP

const up3nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Next1 > el.Close
  );
});
//console.dir(up3nextUP, {'maxArrayLength': null});
console.log(up3nextUP.length);

//SPYup4nextUP

const up4nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Next1 > el.Close
  );
});
//console.dir(up4nextUP, {'maxArrayLength': null});
console.log(up4nextUP.length);

//SPYup5nextUP

const up5nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Next1 > el.Close
  );
});
//console.dir(up5nextUP, {'maxArrayLength': null});
console.log(up5nextUP.length);

//SPYup6nextUP

const up6nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Previous5 >= el.Previous6 &&
    el.Next1 > el.Close
  );
});
//console.dir(up6nextUP, {'maxArrayLength': null});
console.log(up6nextUP.length);

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
    el.Next1 > el.Close
  );
});
//console.dir(up7nextUP, {'maxArrayLength': null});
console.log(up7nextUP.length);

//SPYdown1nextUP

const down1nextUP = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous && el.Next1 > el.Close;
});
//console.dir(down1nextUP, {'maxArrayLength': null});
console.log(down1nextUP.length);

//SPYdown2nextUP

const down2nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous && el.Previous < el.Previous2 && el.Next1 > el.Close
  );
});
//console.dir(down2nextUP, {'maxArrayLength': null});
console.log(down2nextUP.length);

//SPYdown3nextUP

const down3nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Next1 > el.Close
  );
});
//console.dir(down3nextUP, {'maxArrayLength': null});
console.log(down3nextUP.length);

//SPYdown4nextUP

const down4nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Next1 > el.Close
  );
});
//console.dir(down4nextUP, {'maxArrayLength': null});
console.log(down4nextUP.length);

//SPYdown5nextUP

const down5nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Next1 > el.Close
  );
});
//console.dir(down5nextUP, {'maxArrayLength': null});
console.log(down5nextUP.length);

//SPYdown6nextUP

const down6nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous &&
    el.Previous < el.Previous2 &&
    el.Previous2 < el.Previous3 &&
    el.Previous3 < el.Previous4 &&
    el.Previous4 < el.Previous5 &&
    el.Previous5 < el.Previous6 &&
    el.Next1 > el.Close
  );
});
//console.dir(down6nextUP, {'maxArrayLength': null});
console.log(down6nextUP.length);

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
    el.Next1 > el.Close
  );
});
//console.dir(down7nextUP, {'maxArrayLength': null});
console.log(down7nextUP.length);

//volUP1spyUPnext

const volUP1spyUPnext = spyFULLALL.filter(function (el) {
  return el.Volume > el.PreviousVol1 && el.Next1 > el.Close;
});
//console.dir(volUP1spyUPnext, {'maxArrayLength': null});
console.log(volUP1spyUPnext.length);

//volUP2spyUPnext

const volUP2spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.Next1 > el.Close
  );
});
//console.dir(volUP2spyUPnext, {'maxArrayLength': null});
console.log(volUP2spyUPnext.length);

//volUP3spyUPnext

const volUP3spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.PreviousVol2 > el.PreviousVol3 &&
    el.Next1 > el.Close
  );
});
//console.dir(volUP3spyUPnext, {'maxArrayLength': null});
console.log(volUP3spyUPnext.length);

//volDOWN1spyUPnext

const volDOWN1spyUPnext = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Next1 > el.Close;
});
//console.dir(volDOWN1spyUPnext, {'maxArrayLength': null});
console.log(volDOWN1spyUPnext.length);

//volDOWN2spyUPnext

const volDOWN2spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.Next1 > el.Close
  );
});
//console.dir(volDOWN2spyUPnext, {'maxArrayLength': null});
console.log(volDOWN2spyUPnext.length);

//volDOWN3spyUPnext

const volDOWN3spyUPnext = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3 &&
    el.Next1 > el.Close
  );
});
//console.dir(volDOWN3spyUPnext, {'maxArrayLength': null});
console.log(volDOWN3spyUPnext.length);
