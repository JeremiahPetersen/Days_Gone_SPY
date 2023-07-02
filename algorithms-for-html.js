const { spyFULLALL } = require("./spyFULLALL.js");

//console.log(spyFULLALL.length);

// SPY +- 1-7 DAYS

// UP 1 DAY

const spyUP = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous;
});

const spyUPHTML = spyUP.length / spyFULLALL.length;

const spyDOWN = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous;
});

const spyDOWNHTML = spyDOWN.length / spyFULLALL.length;

const volUP = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1;
});

const volUPHTML = volUP.length / spyFULLALL.length;

const volDOWN = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1;
});

const volDOWNHTML = volDOWN.length / spyFULLALL.length;

const tenYUP = spyFULLALL.filter(function (el) {
  return el.tenYClose >= el.tenYPrevious1;
});

const tenYDOWN = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1;
});

const dxyUP = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1;
});

const dxyDOWN = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1;
});

const up1 = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous;
});
//console.dir(up1, {'maxArrayLength': null});
//console.log(up1.length);

// UP 2 DAY

const up1HTML = up1.length / spyFULLALL.length;
//console.log(up1HTML);

const up2 = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous && el.Previous >= el.Previous2;
});
//console.dir(up2, {'maxArrayLength': null});
//console.log(up2.length);

// UP 3 DAY

const up2HTML = up2.length / up1.length;
//console.log(up2HTML);

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

const up3HTML = up3.length / up2.length;
//console.log(up3HTML);

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

const up4HTML = up4.length / up3.length;
//console.log(up4HTML);

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

const up5HTML = up5.length / up4.length;
//console.log(up5HTML);

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

const up6HTML = up6.length / up5.length;
//console.log(up6HTML);

const up7 = spyFULLALL.filter(function (el) {
  return (
    el.Close >= el.Previous &&
    el.Previous >= el.Previous2 &&
    el.Previous2 >= el.Previous3 &&
    el.Previous3 >= el.Previous4 &&
    el.Previous4 >= el.Previous5 &&
    el.Previous5 >= el.Previous6 &&
    el.Previous6 > el.Previous7
  );
});
//console.dir(up7, { maxArrayLength: null });
//console.log(up7.length);

// DOWN 1 DAY

const up7HTML = up7.length / up6.length;
//console.log(up7HTML);

const down1 = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous;
});
//console.dir(down1, {'maxArrayLength': null});
//console.log(down1.length);

// DOWN 2 DAY

const down1HTML = down1.length / spyFULLALL.length;
//console.log(down1HTML);

const down2 = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous && el.Previous < el.Previous2;
});
//console.dir(down2, {'maxArrayLength': null});
//console.log(down2.length);

// DOWN 3 DAY

const down2HTML = down2.length / down1.length;
//console.log(down2HTML);

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

const down3HTML = down3.length / down2.length;
//console.log(down3HTML);

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

const down4HTML = down4.length / down3.length;
//console.log(down4HTML);

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

const down5HTML = down5.length / down4.length;
//console.log(down5HTML);

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

const down6HTML = down6.length / down5.length;
//console.log(down6HTML);

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

const down7HTML = down7.length / down6.length;
//console.log(down7HTML);

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

const spyUpvolAbove50HTML = spyUpvolAbove50.length / volAbove50.length;
//console.log(spyUpvolAbove50HTML);

const spyUpvolAbove75 = spyFULLALL.filter(function (el) {
  return (
    el.Volume > 75000000 && el.Volume < 100000000 && el.Close >= el.Previous
  );
});
//console.dir(spyUpvolAbove75, {'maxArrayLength': null});
//console.log(spyUpvolAbove75.length);

// SPY UP VOL +100,000,000

const spyUpvolAbove75HTML = spyUpvolAbove75.length / volAbove75.length;
//console.log(spyUpvolAbove75HTML);

const spyUpvolAbove100 = spyFULLALL.filter(function (el) {
  return el.Volume > 100000000 && el.Close >= el.Previous;
});
//console.dir(spyUpvolAbove100, {'maxArrayLength': null});
//console.log(spyUpvolAbove100.length);

// SPY DOWN VOL +50,000,000

const spyUpvolAbove100HTML = spyUpvolAbove100.length / volAbove100.length;
//console.log(spyUpvolAbove100HTML);

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

const spyUpvolBelow50HTML = spyUpvolBelow50.length / volBelow50.length;
//console.log(spyUpvolBelow50HTML);

const spyUpvolBelow75 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < 75000000 && el.Volume > 50000000 && el.Close >= el.Previous
  );
});
//console.dir(spyUpvolBelow75, {'maxArrayLength': null});
//console.log(spyUpvolBelow75.length);

// SPY UP VOL -100,000,000

const spyUpvolBelow75HTML = spyUpvolBelow75.length / volAbove50.length;
//console.log(spyUpvolBelow75HTML);

const spyUpvolBelow100 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < 100000000 && el.Volume > 75000000 && el.Close >= el.Previous
  );
});
//console.dir(spyUpvolBelow100, {'maxArrayLength': null});
//console.log(spyUpvolBelow100.length);

// SPY DOWN VOL -50,000,000

const spyUpvolBelow100HTML = spyUpvolBelow100.length / volAbove75.length;
//console.log(spyUpvolBelow100HTML);

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

const volUP1HTML = volUP1.length / spyFULLALL.length;
//console.log(volUP1HTML);

const volUP2 = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1 && el.PreviousVol1 >= el.PreviousVol2;
});
//console.dir(volUP2, {'maxArrayLength': null});
//console.log(volUP2.length);

const volUP2SSS = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1 && el.PreviousVol1 >= el.PreviousVol2;
});
//console.dir(volUP2SSS, {'maxArrayLength': null});
//console.log(volUP2SSS.length);

// VOLUME UP 3 DAY

const volUP2HTML = volUP2SSS.length / volUP.length;
//console.log(volUP2HTML);

const volUP3 = spyFULLALL.filter(function (el) {
  return (
    el.Volume >= el.PreviousVol1 &&
    el.PreviousVol1 >= el.PreviousVol2 &&
    el.PreviousVol2 >= el.PreviousVol3
  );
});
//console.dir(volUP3, {'maxArrayLength': null});
//console.log(volUP3.length);

const volUP3SSS = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.PreviousVol2 > el.PreviousVol3
  );
});
//console.dir(volUP3SSS, {'maxArrayLength': null});
//console.log(volUP3SSS.length);

// VOLUME DOWN 1 DAY

const volUP3HTML = volUP3SSS.length / volUP2SSS.length;
//console.log(volUP3HTML);

const volDOWN1 = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1;
});
//console.dir(volDOWN1, {'maxArrayLength': null});
//console.log(volDOWN1.length);

// VOLUME DOWN 2 DAY

const volDOWN1HTML = volDOWN1.length / volDOWN.length;
//console.log(volDOWN1HTML);

const volDOWN2 = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.PreviousVol1 < el.PreviousVol2;
});
//console.dir(volDOWN2, {'maxArrayLength': null});
//console.log(volDOWN2.length);

const volDOWN2SSS = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.PreviousVol1 < el.PreviousVol2;
});
//console.dir(volDOWN2SSS, {'maxArrayLength': null});
//console.log(volDOWN2SSS.length);

// VOLUME DOWN 3 DAY

const volDOWN2HTML = volDOWN2SSS.length / volDOWN.length;
//console.log(volDOWN2HTML);

const volDOWN3 = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3
  );
});
//console.dir(volDOWN3, {'maxArrayLength': null});
//console.log(volDOWN3.length);

const volDOWN3SSS = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.PreviousVol2 < el.PreviousVol3
  );
});
//console.dir(volDOWN3SSS, {'maxArrayLength': null});
//console.log(volDOWN3SSS.length);

// VOLUME UP 1 DAY SPY UP

const volDOWN3HTML = volDOWN3SSS.length / volDOWN2SSS.length;
//console.log(volDOWN3HTML);

const volUP1spyUP = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1 && el.Close >= el.Previous;
});
//console.dir(volUP1spyUP, {'maxArrayLength': null});
//console.log(volUP1spyUP.length);

// VOLUME UP 2 DAY SPY UP

const volUP1spyUPHTML = volUP1spyUP.length / volUP1.length;
//console.log(volUP1spyUPHTML);

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

const volUP2spyUPHTML = volUP2spyUP.length / volUP2.length;
//console.log(volUP2spyUPHTML);

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

// VOLUME UP 1 DAY SPY DOWN

const volUP3spyUPHTML = volUP3spyUP.length / volUP3.length;
//console.log(volUP3spyUPHTML);

const volUP1spyDOWN = spyFULLALL.filter(function (el) {
  return el.Volume > el.PreviousVol1 && el.Close < el.Previous;
});
//console.dir(volUP1spyDOWN, {'maxArrayLength': null});
//console.log(volUP1spyDOWN.length);

// VOLUME UP 2 DAY SPY DOWN

const volUP2spyDOWN = spyFULLALL.filter(function (el) {
  return el.Volume > el.PreviousVol1 && el.Close < el.Previous;
});
//console.dir(volUP2spyDOWN, {'maxArrayLength': null});
//console.log(volUP2spyDOWN.length);

// VOLUME UP 3 DAY SPY DOWN

const volUP3spyDOWN = spyFULLALL.filter(function (el) {
  return (
    el.Volume > el.PreviousVol1 &&
    el.PreviousVol1 > el.PreviousVol2 &&
    el.Close < el.Previous
  );
});
//console.dir(volUP3spyDOWN, {'maxArrayLength': null});
//console.log(volUP3spyDOWN.length);

// VOLUME DOWN 1 DAY SPY UP

const volDOWN1spyUP = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Close >= el.Previous;
});
//console.dir(volDOWN1spyUP, {'maxArrayLength': null});
//console.log(volDOWN1spyUP.length);

// VOLUME DOWN 2 DAY SPY UP

const volDOWN1spyUPHTML = volDOWN1spyUP.length / volDOWN1.length;
//console.log(volDOWN1spyUPHTML);

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

const volDOWN2spyUPHTML = volDOWN2spyUP.length / volDOWN2.length;
//console.log(volDOWN2spyUPHTML);

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

// VOLUME DOWN 1 DAY SPY DOWN

const volDOWN3spyUPHTML = volDOWN3spyUP.length / volDOWN3.length;
//console.log(volDOWN3spyUPHTML);

const volDOWN1spyDOWN = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Close < el.Previous;
});
//console.dir(volDOWN1spyDOWN, {'maxArrayLength': null});
//console.log(volDOWN1spyDOWN.length);

// VOLUME DOWN 2 DAY SPY DOWN

const volDOWN2spyDOWN = spyFULLALL.filter(function (el) {
  return (
    el.Volume < el.PreviousVol1 &&
    el.PreviousVol1 < el.PreviousVol2 &&
    el.Close < el.Previous
  );
});
//console.dir(volDOWN2spyDOWN, {'maxArrayLength': null});
//console.log(volDOWN2spyDOWN.length);

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
//console.log(volDOWN3spyDOWN.length);

// SPY PCT

// SPY +0-1%

const upPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "1.00%" && el.PCT > "0.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct1, { maxArrayLength: null });
//console.log(upPerct1.length);

// SPY +1-2%

const upPerct1HTML = upPerct1.length / spyFULLALL.length;
//console.log(upPerct1HTML);

const upPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "2.00%" && el.PCT > "1.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct2, { maxArrayLength: null });
//console.log(upPerct2.length);

// SPY +2-3%

const upPerct2HTML = upPerct2.length / spyFULLALL.length;
//console.log(upPerct2HTML);

const upPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "3.00%" && el.PCT > "2.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct3, { maxArrayLength: null });
//console.log(upPerct3.length);

// SPY +3-4%

const upPerct3HTML = upPerct3.length / spyFULLALL.length;
//console.log(upPerct3HTML);

const upPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "4.00%" && el.PCT > "3.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct4, { maxArrayLength: null });
//console.log(upPerct4.length);

// SPY +4%+

const upPerct4HTML = upPerct4.length / spyFULLALL.length;
//console.log(upPerct4HTML);

const upPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT > "4.00%" && el.Close >= el.Previous;
});
//console.dir(upPerct5, { maxArrayLength: null });
//console.log(upPerct5.length);

const upPerct5HTML = upPerct5.length / spyFULLALL.length;
//console.log(upPerct5HTML);

// SPY -0-(-1%)

const downPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "-1.00%" && el.PCT > "-0.00%" && el.Close < el.Previous;
});
//console.dir(downPerct1, { maxArrayLength: null });
//console.log(downPerct1.length);

const downPerct1HTML = downPerct1.length / spyFULLALL.length;
//console.log(downPerct1HTML);

// SPY -1-(-2%)

const downPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "-2.00%" && el.PCT > "-1.00%" && el.Close < el.Previous;
});
//console.dir(downPerct2, { maxArrayLength: null });
//console.log(downPerct2.length);

const downPerct2HTML = downPerct2.length / spyFULLALL.length;
//console.log(downPerct2HTML);

// SPY -2-(-3%)

const downPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "-3.00%" && el.PCT > "-2.00%" && el.Close < el.Previous;
});
//console.dir(downPerct3, { maxArrayLength: null });
//console.log(downPerct3.length);

const downPerct3HTML = downPerct3.length / spyFULLALL.length;
//console.log(downPerct3HTML);

// SPY -3-(-4%)

const downPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "-4.00%" && el.PCT > "-3.00%" && el.Close < el.Previous;
});
//console.dir(downPerct4, { maxArrayLength: null });
//console.log(downPerct4.length);

// SPY -4%+

const downPerct4HTML = downPerct4.length / spyFULLALL.length;
//console.log(downPerct4HTML);

const downPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT < "-50.00%" && el.PCT > "-4.00%" && el.Close < el.Previous;
});
//console.dir(downPerct5, { maxArrayLength: null });
//console.log(downPerct5.length);

// SPY UP/DOWN AFTER PCT UP/DOWN

// SPY UP AFTER +0-1%

const downPerct5HTML = downPerct5.length / spyFULLALL.length;
//console.log(downPerct5HTML);

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

const spyUPPerct1HTML = spyUPPerct1.length / upPerct1.length;
//console.log(spyUPPerct1HTML);

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

const spyUPPerct2HTML = spyUPPerct2.length / upPerct2.length;
//console.log(spyUPPerct2HTML);

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

const spyUPPerct3HTML = spyUPPerct3.length / upPerct3.length;
//console.log(spyUPPerct3HTML);

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

const spyUPPerct4HTML = spyUPPerct4.length / upPerct4.length;
//console.log(spyUPPerct4HTML);

const spyUPPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT > "4.00%" && el.Close >= el.Previous && el.Next1 >= el.Close;
});
//console.dir(spyUPPerct5, { maxArrayLength: null });
//console.log(spyUPPerct5.length);

const spyUPPerct5HTML = spyUPPerct5.length / upPerct5.length;
//console.log(spyUPPerct5HTML);

// SPY UP AFTER -0-(-1%)

const spyUPdownPerct1 = spyFULLALL.filter(function (el) {
  return el.PCT < "-1.00%" && el.PCT > "-0.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct1, { maxArrayLength: null });
//console.log(spyUPdownPerct1.length);

const spyUPdownPerct1HTML = spyUPdownPerct1.length / downPerct1.length;
//console.log(spyUPdownPerct1HTML);

// SPY UP AFTER -1-(-2%)

const spyUPdownPerct2 = spyFULLALL.filter(function (el) {
  return el.PCT < "-2.00%" && el.PCT > "-1.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct2, { maxArrayLength: null });
//console.log(spyUPdownPerct2.length);

const spyUPdownPerct2HTML = spyUPdownPerct2.length / downPerct2.length;
//console.log(spyUPdownPerct2HTML);

// SPY UP AFTER -2-(-3%)

const spyUPdownPerct3 = spyFULLALL.filter(function (el) {
  return el.PCT < "-3.00%" && el.PCT > "-2.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct3, { maxArrayLength: null });
//console.log(spyUPdownPerct3.length);

const spyUPdownPerct3HTML = spyUPdownPerct3.length / downPerct3.length;
//console.log(spyUPdownPerct3HTML);

// SPY UP AFTER -3-(-4%)

const spyUPdownPerct4 = spyFULLALL.filter(function (el) {
  return el.PCT < "-4.00%" && el.PCT > "-3.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct4, { maxArrayLength: null });
//console.log(spyUPdownPerct4.length);

// SPY UP AFTER -4%+

const spyUPdownPerct4HTML = spyUPdownPerct4.length / downPerct4.length;
//console.log(spyUPdownPerct4HTML);

const spyUPdownPerct5 = spyFULLALL.filter(function (el) {
  return el.PCT < "-50.00%" && el.PCT > "-4.00%" && el.Next1 >= el.Close;
});
//console.dir(spyUPdownPerct5, { maxArrayLength: null });
//console.log(spyUPdownPerct5.length);

// SPY WITH TENYEAR

// TEN YEAR 1 DAY UP

const spyUPdownPerct5HTML = spyUPdownPerct5.length / downPerct5.length;
//console.log(spyUPdownPerct5HTML);

const uptenYear1 = spyFULLALL.filter(function (el) {
  return el.tenYClose >= el.tenYPrevious1;
});
//console.dir(uptenYear1, {'maxArrayLength': null});
//console.log(uptenYear1.length);

// TEN YEAR 2 DAY UP

const uptenYearHTMLSSS = tenYUP.length / spyFULLALL.length;

const uptenYear1HTML = uptenYear1.length / spyFULLALL.length;
//console.log(uptenYear1HTML);

const uptenYear2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 && el.tenYPrevious1 >= el.tenYPrevious2
  );
});
//console.dir(uptenYear2, { maxArrayLength: null });
//console.log(uptenYear2.length);

const uptenYear2SSS = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 && el.tenYPrevious1 >= el.tenYPrevious2
  );
});
//console.dir(uptenYear2SSS, {'maxArrayLength': null});
//console.log(uptenYear2SSS.length);

// TEN YEAR 3 DAY UP

const uptenYear2HTML = uptenYear2SSS.length / tenYUP.length;
//console.log(uptenYear2HTML);

const uptenYear3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 &&
    el.tenYPrevious1 >= el.tenYPrevious2 &&
    el.tenYPrevious2 >= el.tenYPrevious3
  );
});
//console.dir(uptenYear3, {'maxArrayLength': null});
//console.log(uptenYear3.length);

const uptenYear3SSS = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose >= el.tenYPrevious1 &&
    el.tenYPrevious1 >= el.tenYPrevious2 &&
    el.tenYPrevious2 >= el.tenYPrevious3
  );
});
//console.dir(uptenYear3SSS, {'maxArrayLength': null});
//console.log(uptenYear3SSS.length);

// TEN YEAR 1 DAY DOWN

const uptenYear3HTML = uptenYear3SSS.length / uptenYear2SSS.length;
//console.log(uptenYear3HTML);

const downtenYear1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1;
});
//console.dir(downtenYear1, {'maxArrayLength': null});
//console.log(downtenYear1.length);

// TEN YEAR 2 DAY DOWN

const downtenYear1HTMLSSS = tenYDOWN.length / spyFULLALL.length;

const downtenYear1HTML = downtenYear1.length / spyFULLALL.length;
//console.log(downtenYear1HTML);

const downtenYear2 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.tenYPrevious1 < el.tenYPrevious2;
});
//console.dir(downtenYear2, {'maxArrayLength': null});
//console.log(downtenYear2.length);

const downtenYear2SSS = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.tenYPrevious1 < el.tenYPrevious2;
});
//console.dir(downtenYear2SSS, {'maxArrayLength': null});
//console.log(downtenYear2SSS.length);

// TEN YEAR 3 DAY DOWN

const downtenYear2HTML = downtenYear2SSS.length / tenYDOWN.length;
//console.log(downtenYear1HTML);

const downtenYear3 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.tenYPrevious2 < el.tenYPrevious3
  );
});
//console.dir(downtenYear3, {'maxArrayLength': null});
//console.log(downtenYear3.length);

const downtenYear3SSS = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.tenYPrevious2 < el.tenYPrevious3
  );
});
//console.dir(downtenYear3SSS, {'maxArrayLength': null});
//console.log(downtenYear3SSS.length);

// TEN YEAR UP 1 DAY & SPY UP

const downtenYear3HTML = downtenYear3SSS.length / downtenYear2SSS.length;
//console.log(downtenYear3HTML);

const uptenYearUp1 = spyFULLALL.filter(function (el) {
  return el.tenYClose >= el.tenYPrevious1 && el.Close >= el.Previous;
});
//console.dir(uptenYearUp1, {'maxArrayLength': null});
//console.log(uptenYearUp1.length);

// TEN YEAR UP 2 DAY & SPY UP

const uptenYearUp1HTML = uptenYearUp1.length / uptenYear1.length;
//console.log(uptenYearUp1HTML);

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

const uptenYearUp2HTML = uptenYearUp2.length / uptenYear2.length;
//console.log(uptenYearUp2HTML);

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

const uptenYearUp3HTML = uptenYearUp3.length / uptenYear3.length;
//console.log(uptenYearUp3HTML);

const downtenYearUp1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.Close >= el.Previous;
});
//console.dir(downtenYearUp1, {'maxArrayLength': null});
//console.log(downtenYearUp1.length);

// TEN YEAR DOWN 2 DAY & SPY UP

const downtenYearUp1HTML = downtenYearUp1.length / downtenYear1.length;
//console.log(downtenYearUp1HTML);

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

const downtenYearUp2HTML = downtenYearUp2.length / downtenYear2.length;
//console.log(downtenYearUp2HTML);

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

const downtenYearUp3HTML = downtenYearUp3.length / downtenYear3.length;
//console.log(downtenYearUp3HTML);

const uptenYearspyUpNext1 = spyFULLALL.filter(function (el) {
  return el.tenYClose >= el.tenYPrevious1 && el.Close <= el.Next1;
});
//console.dir(uptenYearspyUpNext1, {'maxArrayLength': null});
//console.log(uptenYearspyUpNext1.length);

//tenYearUp2SPyUpNext1

const uptenYearspyUpNext1HTML = uptenYearspyUpNext1.length / uptenYear1.length;
//console.log(uptenYearspyUpNext1HTML);

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

const uptenYearspyUpNext2HTML = uptenYearspyUpNext2.length / uptenYear2.length;
//console.log(uptenYearspyUpNext2HTML);

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

const uptenYearspyUpNext3HTML = uptenYearspyUpNext3.length / uptenYear3.length;
//console.log(uptenYearspyUpNext3HTML);

const downtenYearspyUpNext1 = spyFULLALL.filter(function (el) {
  return el.tenYClose < el.tenYPrevious1 && el.Close <= el.Next1;
});
//console.dir(downtenYearspyUpNext1, {'maxArrayLength': null});
//console.log(downtenYearspyUpNext1.length);

//tenYearDown2SPyUpNext1

const downtenYearspyUpNext1HTML =
  downtenYearspyUpNext1.length / downtenYear1.length;
//console.log(downtenYearspyUpNext1HTML);

const downtenYearspyUpNext2 = spyFULLALL.filter(function (el) {
  return (
    el.tenYClose < el.tenYPrevious1 &&
    el.tenYPrevious1 < el.tenYPrevious2 &&
    el.Close <= el.Next1
  );
});
//console.dir(downtenYearspyUpNext2, {'maxArrayLength': null});
//console.log(downtenYearspyUpNext2.length);

//tenYearDown3SPyUpNext1

const downtenYearspyUpNext2HTML =
  downtenYearspyUpNext2.length / downtenYear2.length;
//console.log(downtenYearspyUpNext2HTML);

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

const downtenYearspyUpNext3HTML =
  downtenYearspyUpNext3.length / downtenYear3.length;
//console.log(downtenYearspyUpNext3HTML);

const upDXY1 = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1;
});
//console.dir(upDXY1, {'maxArrayLength': null});
//console.log(upDXY1.length);

//dxyUP2

const upDXYHTMLSSS = dxyUP.length / spyFULLALL.length;

const upDXY1HTML = upDXY1.length / spyFULLALL.length;
//console.log(upDXY1HTML);

const upDXY2 = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1 && el.dxyPrevious1 >= el.dxyPrevious2;
});
//console.dir(upDXY2, {'maxArrayLength': null});
//console.log(upDXY2.length);

const upDXY2SSS = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1 && el.dxyPrevious1 >= el.dxyPrevious2;
});
//console.dir(upDXY2SSS, {'maxArrayLength': null});
//console.log(upDXY2SSS.length);

//dxyUP3

const upDXY2HTML = upDXY2SSS.length / dxyUP.length;
//console.log(upDXY2HTML);

const upDXY3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose >= el.dxyPrevious1 &&
    el.dxyPrevious1 >= el.dxyPrevious2 &&
    el.dxyPrevious2 >= el.dxyPrevious3
  );
});
//console.dir(upDXY3, {'maxArrayLength': null});
//console.log(upDXY3.length);

const upDXY3SSS = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose > el.dxyPrevious1 &&
    el.dxyPrevious1 > el.dxyPrevious2 &&
    el.dxyPrevious2 > el.dxyPrevious3
  );
});
//console.dir(upDXY3SSS, {'maxArrayLength': null});
//console.log(upDXY3SSS.length);

//dxyDown1

const upDXY3HTML = upDXY3SSS.length / upDXY2SSS.length;
//console.log(upDXY3HTML);

const downDXY1 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1;
});
//console.dir(downDXY1, {'maxArrayLength': null});
//console.log(downDXY1.length);

//dxyDown2

const downDXYHTMLSSS = dxyDOWN.length / spyFULLALL.length;

const downDXY1HTML = downDXY1.length / spyFULLALL.length;
//console.log(downDXY1HTML);

const downDXY2 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.dxyPrevious1 < el.dxyPrevious2;
});
//console.dir(downDXY2, {'maxArrayLength': null});
//console.log(downDXY2.length);

const downDXY2SSS = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.dxyPrevious1 < el.dxyPrevious2;
});
//console.dir(downDXY2SSS, {'maxArrayLength': null});
//console.log(downDXY2SSS.length);

//dxyDown3

const downDXY2HTML = downDXY2SSS.length / dxyDOWN.length;
//console.log(downDXY2HTML);

const downDXY3 = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3
  );
});
//console.dir(downDXY3, {'maxArrayLength': null});
//console.log(downDXY3.length);

const downDXY3SSS = spyFULLALL.filter(function (el) {
  return (
    el.dxyClose < el.dxyPrevious1 &&
    el.dxyPrevious1 < el.dxyPrevious2 &&
    el.dxyPrevious2 < el.dxyPrevious3
  );
});
//console.dir(downDXY3SSS, {'maxArrayLength': null});
//console.log(downDXY3SSS.length);

//dxyUP1spyUp

const downDXY3HTML = downDXY3SSS.length / downDXY2SSS.length;
//console.log(downDXY1HTML);

const upDXYspyUP1 = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1 && el.Close >= el.Previous;
});
//console.dir(upDXYspyUP1, {'maxArrayLength': null});
//console.log(upDXYspyUP1.length);

//dxyUP2spyUp

const upDXYspyUP1HTML = upDXYspyUP1.length / upDXY1.length;
//console.log(upDXYspyUP1HTML);

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

const upDXYspyUP2HTML = upDXYspyUP2.length / upDXY2.length;
//console.log(upDXYspyUP2HTML);

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

const upDXYspyUP3HTML = upDXYspyUP3.length / upDXY3.length;
//console.log(upDXYspyUP3HTML);

const downDXYspyUP1 = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.Close >= el.Previous;
});
//console.dir(downDXYspyUP1, {'maxArrayLength': null});/
//console.log(downDXYspyUP1.length);

//dxyDown2spyUp

const downDXYspyUP1HTML = downDXYspyUP1.length / downDXY1.length;
//console.log(downDXYspyUP1HTML);

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

const downDXYspyUP2HTML = downDXYspyUP2.length / downDXY2.length;
//console.log(downDXYspyUP2HTML);

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

const downDXYspyUP3HTML = downDXYspyUP3.length / downDXY3.length;
//console.log(downDXYspyUP3HTML);

const upDXY1spyUpNext = spyFULLALL.filter(function (el) {
  return el.dxyClose >= el.dxyPrevious1 && el.Close <= el.Next1;
});
//console.dir(upDXY1spyUpNext, {'maxArrayLength': null});
//console.log(upDXY1spyUpNext.length);

//dxyUp2SPyUpNext1

const upDXY1spyUpNextHTML = upDXY1spyUpNext.length / upDXY1.length;
//console.log(upDXY1spyUpNextHTML);

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

const upDXY2spyUpNextHTML = upDXY2spyUpNext.length / upDXY2.length;
//console.log(upDXY2spyUpNextHTML);

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

const upDXY3spyUpNextHTML = upDXY3spyUpNext.length / upDXY3.length;
//console.log(upDXY3spyUpNextHTML);

const downDXY1spyUpNext = spyFULLALL.filter(function (el) {
  return el.dxyClose < el.dxyPrevious1 && el.Close <= el.Next1;
});
//console.dir(downDXY1spyUpNext, {'maxArrayLength': null});
//console.log(downDXY1spyUpNext.length);

//dxyDown2SPyUpNext1

const downDXY1spyUpNextHTML = downDXY1spyUpNext.length / downDXY1.length;
//console.log(downDXY1spyUpNextHTML);

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

const downDXY2spyUpNextHTML = downDXY2spyUpNext.length / downDXY2.length;
//console.log(downDXY2spyUpNextHTML);

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

const downDXY3spyUpNextHTML = downDXY3spyUpNext.length / downDXY3.length;
//console.log(downDXY3spyUpNextHTML);

const up1nextUP = spyFULLALL.filter(function (el) {
  return el.Close >= el.Previous && el.Next1 >= el.Close;
});
//console.dir(up1nextUP, {'maxArrayLength': null});
//console.log(up1nextUP.length);

//SPYup2nextUP

const up1nextUPHTML = up1nextUP.length / up1.length;
//console.log(up1nextUPHTML);

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

const up2nextUPHTML = up2nextUP.length / up2.length;
//console.log(up2nextUPHTML);

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

const up3nextUPHTML = up3nextUP.length / up3.length;
//console.log(up3nextUPHTML);

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

const up4nextUPHTML = up4nextUP.length / up4.length;
//console.log(up4nextUPHTML);

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

const up5nextUPHTML = up5nextUP.length / up5.length;
//console.log(up5nextUPHTML);

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

const up6nextUPHTML = up6nextUP.length / up6.length;
//console.log(up6nextUPHTML);

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

const up7nextUPHTML = up7nextUP.length / up7.length;
//console.log(up7nextUPHTML);

const down1nextUP = spyFULLALL.filter(function (el) {
  return el.Close < el.Previous && el.Next1 >= el.Close;
});
//console.dir(down1nextUP, {'maxArrayLength': null});
//console.log(down1nextUP.length);

//SPYdown2nextUP

const down1nextUPHTML = down1nextUP.length / down1.length;
//console.log(down1nextUPHTML);

const down2nextUP = spyFULLALL.filter(function (el) {
  return (
    el.Close < el.Previous && el.Previous < el.Previous2 && el.Next1 >= el.Close
  );
});
//console.dir(down2nextUP, {'maxArrayLength': null});
//console.log(down2nextUP.length);

//SPYdown3nextUP

const down2nextUPHTML = down2nextUP.length / down2.length;
//console.log(down2nextUPHTML);

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

const down3nextUPHTML = down3nextUP.length / down3.length;
//console.log(down3nextUPHTML);

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

const down4nextUPHTML = down4nextUP.length / down4.length;
//console.log(down4nextUPHTML);

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

const down5nextUPHTML = down5nextUP.length / down5.length;
//console.log(down5nextUPHTML);

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

const down6nextUPHTML = down6nextUP.length / down6.length;
//console.log(down6nextUPHTML);

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

const down7nextUPHTML = down7nextUP.length / down7.length;
//console.log(down7nextUPHTML);

const volUP1spyUPnext = spyFULLALL.filter(function (el) {
  return el.Volume >= el.PreviousVol1 && el.Next1 >= el.Close;
});
//console.dir(volUP1spyUPnext, {'maxArrayLength': null});
//console.log(volUP1spyUPnext.length);

//volUP2spyUPnext

const volUP1spyUPnextHTML = volUP1spyUPnext.length / volUP1.length;
//console.log(volUP1spyUPnextHTML);

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

const volUP2spyUPnextHTML = volUP2spyUPnext.length / volUP2.length;
//console.log(volUP2spyUPnextHTML);

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

const volUP3spyUPnextHTML = volUP3spyUPnext.length / volUP3.length;
//console.log(volUP3spyUPnextHTML);

const volDOWN1spyUPnext = spyFULLALL.filter(function (el) {
  return el.Volume < el.PreviousVol1 && el.Next1 >= el.Close;
});
//console.dir(volDOWN1spyUPnext, {'maxArrayLength': null});
//console.log(volDOWN1spyUPnext.length);

//volDOWN2spyUPnext

const volDOWN1spyUPnextHTML = volDOWN1spyUPnext.length / volDOWN1.length;
//console.log(volDOWN1spyUPnextHTML);

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

const volDOWN2spyUPnextHTML = volDOWN2spyUPnext.length / volDOWN2.length;
//console.log(volDOWN2spyUPnextHTML);

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

const volDOWN3spyUPnextHTML = volDOWN3spyUPnext.length / volDOWN3.length;
//console.log(volDOWN3spyUPnextHTML);

const openUpSpyUP = spyFULLALL.filter(function (el) {
  return el.Open > el.Previous && el.Previous < el.Close;
});

const openUP = spyFULLALL.filter(function (el) {
  return el.Open > el.Previous;
});

const openUpSpyUPHTML = openUpSpyUP.length / openUP.length;
//console.log(openUpSpyUPHTML);

const openDOWN = spyFULLALL.filter(function (el) {
  return el.Open < el.Previous;
});

const openDownSpyUP = spyFULLALL.filter(function (el) {
  return el.Open < el.Previous && el.Previous < el.Close;
});

const openDownSpyUPHTML = openDownSpyUP.length / openDOWN.length;
//console.log(openDownSpyUPHTML);

const algorithmsMain = [
  [
    "SPY Up",
    Math.round((spyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    spyUP.length,
    spyFULLALL.length,
  ],
  [
    "SPY Up 2 Days",
    Math.round((up2HTML * 100 + Number.EPSILON) * 100) / 100,
    up2.length,
    up1.length,
  ],
  [
    "SPY Up 3 Days",
    Math.round((up3HTML * 100 + Number.EPSILON) * 100) / 100,
    up3.length,
    up2.length,
  ],
  [
    "SPY Up 4 Days",
    Math.round((up4HTML * 100 + Number.EPSILON) * 100) / 100,
    up4.length,
    up3.length,
  ],
  [
    "SPY Up 5 Days",
    Math.round((up5HTML * 100 + Number.EPSILON) * 100) / 100,
    up5.length,
    up4.length,
  ],
  [
    "SPY Up 6 Days",
    Math.round((up6HTML * 100 + Number.EPSILON) * 100) / 100,
    up6.length,
    up5.length,
  ],
  [
    "SPY Down",
    Math.round((spyDOWNHTML * 100 + Number.EPSILON) * 100) / 100,
    spyDOWN.length,
    spyFULLALL.length,
  ],
  [
    "SPY Down 2 Days",
    Math.round((down2HTML * 100 + Number.EPSILON) * 100) / 100,
    down2.length,
    down1.length,
  ],
  [
    "SPY Down 3 Days",
    Math.round((down3HTML * 100 + Number.EPSILON) * 100) / 100,
    down3.length,
    down2.length,
  ],
  [
    "SPY Down 4 Days",
    Math.round((down4HTML * 100 + Number.EPSILON) * 100) / 100,
    down4.length,
    down3.length,
  ],
  [
    "SPY Down 5 Days",
    Math.round((down5HTML * 100 + Number.EPSILON) * 100) / 100,
    down5.length,
    down4.length,
  ],
  [
    "SPY Down 6 Days",
    Math.round((down6HTML * 100 + Number.EPSILON) * 100) / 100,
    down6.length,
    down5.length,
  ],
  [
    "SPY Up 0-1%",
    Math.round((upPerct1HTML * 100 + Number.EPSILON) * 100) / 100,
    upPerct1.length,
    spyFULLALL.length,
  ],
  [
    "SPY Up 1-2%",
    Math.round((upPerct2HTML * 100 + Number.EPSILON) * 100) / 100,
    upPerct2.length,
    spyFULLALL.length,
  ],
  [
    "SPY Up 2-3%",
    Math.round((upPerct3HTML * 100 + Number.EPSILON) * 100) / 100,
    upPerct3.length,
    spyFULLALL.length,
  ],
  [
    "SPY Up 3-4%",
    Math.round((upPerct4HTML * 100 + Number.EPSILON) * 100) / 100,
    upPerct4.length,
    spyFULLALL.length,
  ],
  [
    "SPY Up 4%+",
    Math.round((upPerct5HTML * 100 + Number.EPSILON) * 100) / 100,
    upPerct5.length,
    spyFULLALL.length,
  ],
  [
    "SPY Down 0-1%",
    Math.round((downPerct1HTML * 100 + Number.EPSILON) * 100) / 100,
    downPerct1.length,
    spyFULLALL.length,
  ],
  [
    "SPY Down 1-2%",
    Math.round((downPerct2HTML * 100 + Number.EPSILON) * 100) / 100,
    downPerct2.length,
    spyFULLALL.length,
  ],
  [
    "SPY Down 2-3%",
    Math.round((downPerct3HTML * 100 + Number.EPSILON) * 100) / 100,
    downPerct3.length,
    spyFULLALL.length,
  ],
  [
    "SPY Down 3-4%",
    Math.round((downPerct4HTML * 100 + Number.EPSILON) * 100) / 100,
    downPerct4.length,
    spyFULLALL.length,
  ],
  [
    "SPY Down 4% or more",
    Math.round((downPerct5HTML * 100 + Number.EPSILON) * 100) / 100,
    downPerct5.length,
    spyFULLALL.length,
  ],
  [
    "Next Day SPY Up after SPY Up 1 Day",
    Math.round((up1nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    up1nextUP.length,
    up1.length,
  ],
  [
    "Next Day SPY Up after SPY Up 2 Days",
    Math.round((up2nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    up2nextUP.length,
    up2.length,
  ],
  [
    "Next Day SPY Up after SPY Up 3 Days",
    Math.round((up3nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    up3nextUP.length,
    up3.length,
  ],
  [
    "Next Day SPY Up after SPY Up 4 Days",
    Math.round((up4nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    up4nextUP.length,
    up4.length,
  ],
  [
    "Next Day SPY Up after SPY Up 5 Days",
    Math.round((up5nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    up5nextUP.length,
    up5.length,
  ],
  [
    "Next Day SPY Up after SPY Up 6 Days",
    Math.round((up6nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    up6nextUP.length,
    up6.length,
  ],
  [
    "Next Day SPY Up after SPY Down 1 Day",
    Math.round((down1nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    down1nextUP.length,
    down1.length,
  ],
  [
    "Next Day SPY Up after SPY Down 2 Days",
    Math.round((down2nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    down2nextUP.length,
    down2.length,
  ],
  [
    "Next Day SPY Up after SPY Down 3 Days",
    Math.round((down3nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    down3nextUP.length,
    down3.length,
  ],
  [
    "Next Day SPY Up after SPY Down 4 Days",
    Math.round((down4nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    down4nextUP.length,
    down4.length,
  ],
  [
    "Next Day SPY Up after SPY Down 5 Days",
    Math.round((down5nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    down5nextUP.length,
    down5.length,
  ],
  [
    "Next Day SPY Up after SPY Down 6 Days",
    Math.round((down6nextUPHTML * 100 + Number.EPSILON) * 100) / 100,
    down6nextUP.length,
    down6.length,
  ],
  [
    "Next Day SPY Up after +0-1% Day",
    Math.round((spyUPPerct1HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPPerct1.length,
    upPerct1.length,
  ],
  [
    "Next Day SPY Up after +1-2% Day",
    Math.round((spyUPPerct2HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPPerct2.length,
    upPerct2.length,
  ],
  [
    "Next Day SPY Up after +2-3% Day",
    Math.round((spyUPPerct3HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPPerct3.length,
    upPerct3.length,
  ],
  [
    "Next Day SPY Up after +3-4% Day",
    Math.round((spyUPPerct4HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPPerct4.length,
    upPerct4.length,
  ],
  [
    "Next Day SPY Up after 4%+ Day",
    Math.round((spyUPPerct5HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPPerct5.length,
    upPerct5.length,
  ],
  [
    "Next Day SPY Up after -0-1% Day",
    Math.round((spyUPdownPerct1HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPdownPerct1.length,
    downPerct1.length,
  ],
  [
    "Next Day SPY Up after -1-2% Day",
    Math.round((spyUPdownPerct2HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPdownPerct2.length,
    downPerct2.length,
  ],
  [
    "Next Day SPY Up after -2-3% Day",
    Math.round((spyUPdownPerct3HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPdownPerct3.length,
    downPerct3.length,
  ],
  [
    "Next Day SPY Up after -3-4% Day",
    Math.round((spyUPdownPerct4HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPdownPerct4.length,
    downPerct4.length,
  ],
  [
    "Next Day SPY Up after -4% or more Day",
    Math.round((spyUPdownPerct5HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUPdownPerct5.length,
    downPerct5.length,
  ],
  [
    "Next Day SPY Up after Vol Up 1 Day",
    Math.round((volUP1spyUPnextHTML * 100 + Number.EPSILON) * 100) / 100,
    volUP1spyUPnext.length,
    volUP1.length,
  ],
  [
    "Next Day SPY Up after Vol Up 2 Days",
    Math.round((volUP2spyUPnextHTML * 100 + Number.EPSILON) * 100) / 100,
    volUP2spyUPnext.length,
    volUP2.length,
  ],
  [
    "Next Day SPY Up after Vol Up 3 Days",
    Math.round((volUP3spyUPnextHTML * 100 + Number.EPSILON) * 100) / 100,
    volUP3spyUPnext.length,
    volUP3.length,
  ],
  [
    "Next Day SPY Up after Vol Down 1 Day",
    Math.round((volDOWN1spyUPnextHTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN1spyUPnext.length,
    volDOWN1.length,
  ],
  [
    "Next Day SPY Up after Vol Down 2 Days",
    Math.round((volDOWN2spyUPnextHTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN2spyUPnext.length,
    volDOWN2.length,
  ],
  [
    "Next Day SPY Up after Vol Down 3 Days",
    Math.round((volDOWN3spyUPnextHTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN3spyUPnext.length,
    volDOWN3.length,
  ],
  [
    "Next Day SPY Up after DXY Up 1 Day",
    Math.round((upDXY1spyUpNextHTML * 100 + Number.EPSILON) * 100) / 100,
    upDXY1spyUpNext.length,
    upDXY1.length,
  ],
  [
    "Next Day SPY Up after DXY Up 2 Days",
    Math.round((upDXY2spyUpNextHTML * 100 + Number.EPSILON) * 100) / 100,
    upDXY2spyUpNext.length,
    upDXY2.length,
  ],
  [
    "Next Day SPY Up after DXY Up 3 Days",
    Math.round((upDXY3spyUpNextHTML * 100 + Number.EPSILON) * 100) / 100,
    upDXY3spyUpNext.length,
    upDXY3.length,
  ],
  [
    "Next Day SPY Up after DXY Down 1 Day",
    Math.round((downDXY1spyUpNextHTML * 100 + Number.EPSILON) * 100) / 100,
    downDXY1spyUpNext.length,
    downDXY1.length,
  ],
  [
    "Next Day SPY Up after DXY Down 2 Days",
    Math.round((downDXY2spyUpNextHTML * 100 + Number.EPSILON) * 100) / 100,
    downDXY2spyUpNext.length,
    downDXY2.length,
  ],
  [
    "Next Day SPY Up after DXY Down 3 Days",
    Math.round((downDXY3spyUpNextHTML * 100 + Number.EPSILON) * 100) / 100,
    downDXY3spyUpNext.length,
    downDXY3.length,
  ],
  [
    "Next Day SPY Up after 10 Year Up 1 Day",
    Math.round((uptenYearspyUpNext1HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYearspyUpNext1.length,
    uptenYear1.length,
  ],
  [
    "Next Day SPY Up after 10 Year Up 2 Days",
    Math.round((uptenYearspyUpNext2HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYearspyUpNext2.length,
    uptenYear2.length,
  ],
  [
    "Next Day SPY Up after 10 Year Up 3 Days",
    Math.round((uptenYearspyUpNext3HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYearspyUpNext3.length,
    uptenYear3.length,
  ],
  [
    "Next Day SPY Up after 10 Year Down 1 Day",
    Math.round((downtenYearspyUpNext1HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYearspyUpNext1.length,
    downtenYear1.length,
  ],
  [
    "Next Day SPY Up after 10 Year Down 2 Days",
    Math.round((downtenYearspyUpNext2HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYearspyUpNext2.length,
    downtenYear2.length,
  ],
  [
    "Next Day SPY Up after 10 Year Down 3 Days",
    Math.round((downtenYearspyUpNext3HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYearspyUpNext3.length,
    downtenYear3.length,
  ],
  [
    "SPY Up & Volume Below 50k",
    Math.round((spyUpvolBelow50HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUpvolBelow50.length,
    volBelow50.length,
  ],
  [
    "SPY Up & Volume 50k-75k",
    Math.round((spyUpvolAbove50HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUpvolAbove50.length,
    volAbove50.length,
  ],
  [
    "SPY Up & Volume 75k-100k",
    Math.round((spyUpvolAbove75HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUpvolAbove75.length,
    volAbove75.length,
  ],
  [
    "SPY Up & Volume 100k+",
    Math.round((spyUpvolAbove100HTML * 100 + Number.EPSILON) * 100) / 100,
    spyUpvolAbove100.length,
    volAbove100.length,
  ],
  [
    "SPY Up & Vol Up 1 Day",
    Math.round((volUP1spyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    volUP1spyUP.length,
    volUP1.length,
  ],
  [
    "SPY Up & Vol Up 2 Days",
    Math.round((volUP2spyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    volUP2spyUP.length,
    volUP2.length,
  ],
  [
    "SPY Up & Vol Up 3 Days",
    Math.round((volUP3spyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    volUP3spyUP.length,
    volUP3.length,
  ],
  [
    "SPY Up & Vol Down 1 Day",
    Math.round((volDOWN1spyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN1spyUP.length,
    volDOWN1.length,
  ],
  [
    "SPY Up & Vol Down 2 Days",
    Math.round((volDOWN2spyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN2spyUP.length,
    volDOWN2.length,
  ],
  [
    "SPY Up & Vol Down 3 Days",
    Math.round((volDOWN3spyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN3spyUP.length,
    volDOWN3.length,
  ],
  [
    "SPY Up & 10 Year Up 1 Day",
    Math.round((uptenYearUp1HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYearUp1.length,
    uptenYear1.length,
  ],
  [
    "SPY Up & 10 Year Up 2 Days",
    Math.round((uptenYearUp2HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYearUp2.length,
    uptenYear2.length,
  ],
  [
    "SPY Up & 10 Year Up 3 Days",
    Math.round((uptenYearUp3HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYearUp3.length,
    uptenYear3.length,
  ],
  [
    "SPY Up & 10 Year Down 1 Day",
    Math.round((downtenYearUp1HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYearUp1.length,
    downtenYear1.length,
  ],
  [
    "SPY Up & 10 Year Down 2 Days",
    Math.round((downtenYearUp2HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYearUp2.length,
    downtenYear2.length,
  ],
  [
    "SPY Up & 10 Year Down 3 Days",
    Math.round((downtenYearUp3HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYearUp3.length,
    downtenYear3.length,
  ],
  [
    "SPY Up & DXY Up 1 Day",
    Math.round((upDXYspyUP1HTML * 100 + Number.EPSILON) * 100) / 100,
    upDXYspyUP1.length,
    upDXY1.length,
  ],
  [
    "SPY Up & DXY Up 2 Days",
    Math.round((upDXYspyUP2HTML * 100 + Number.EPSILON) * 100) / 100,
    upDXYspyUP2.length,
    upDXY2.length,
  ],
  [
    "SPY Up & DXY Up 3 Days",
    Math.round((upDXYspyUP3HTML * 100 + Number.EPSILON) * 100) / 100,
    upDXYspyUP3.length,
    upDXY3.length,
  ],
  [
    "SPY Up & DXY Down 1 Day",
    Math.round((downDXYspyUP1HTML * 100 + Number.EPSILON) * 100) / 100,
    downDXYspyUP1.length,
    downDXY1.length,
  ],
  [
    "SPY Up & DXY Down 2 Days",
    Math.round((downDXYspyUP2HTML * 100 + Number.EPSILON) * 100) / 100,
    downDXYspyUP2.length,
    downDXY2.length,
  ],
  [
    "SPY Up & DXY Down 3 Days",
    Math.round((downDXYspyUP3HTML * 100 + Number.EPSILON) * 100) / 100,
    downDXYspyUP3.length,
    downDXY3.length,
  ],
  [
    "Volume Up",
    Math.round((volUPHTML * 100 + Number.EPSILON) * 100) / 100,
    volUP.length,
    spyFULLALL.length,
  ],
  [
    "Volume Up 2 Days",
    Math.round((volUP2HTML * 100 + Number.EPSILON) * 100) / 100,
    volUP2SSS.length,
    volUP.length,
  ],
  [
    "Volume Up 3 Days",
    Math.round((volUP3HTML * 100 + Number.EPSILON) * 100) / 100,
    volUP3SSS.length,
    volUP2SSS.length,
  ],
  [
    "Volume Down",
    Math.round((volDOWNHTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN.length,
    spyFULLALL.length,
  ],
  [
    "Volume Down 2 Days",
    Math.round((volDOWN2HTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN2SSS.length,
    volDOWN.length,
  ],
  [
    "Volume Down 3 Days",
    Math.round((volDOWN3HTML * 100 + Number.EPSILON) * 100) / 100,
    volDOWN3SSS.length,
    volDOWN2SSS.length,
  ],
  [
    "10 Year Up",
    Math.round((uptenYearHTMLSSS * 100 + Number.EPSILON) * 100) / 100,
    tenYUP.length,
    spyFULLALL.length,
  ],
  [
    "10 Year Up 2 Days",
    Math.round((uptenYear2HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYear2SSS.length,
    tenYUP.length,
  ],
  [
    "10 Year Up 3 Days",
    Math.round((uptenYear3HTML * 100 + Number.EPSILON) * 100) / 100,
    uptenYear3SSS.length,
    uptenYear2SSS.length,
  ],
  [
    "10 Year Down",
    Math.round((downtenYear1HTMLSSS * 100 + Number.EPSILON) * 100) / 100,
    tenYDOWN.length,
    spyFULLALL.length,
  ],
  [
    "10 Year Down 2 Days",
    Math.round((downtenYear2HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYear2SSS.length,
    tenYDOWN.length,
  ],
  [
    "10 Year Down 3 Days",
    Math.round((downtenYear3HTML * 100 + Number.EPSILON) * 100) / 100,
    downtenYear3SSS.length,
    downtenYear2SSS.length,
  ],
  [
    "DXY Up",
    Math.round((upDXYHTMLSSS * 100 + Number.EPSILON) * 100) / 100,
    dxyUP.length,
    spyFULLALL.length,
  ],
  [
    "DXY Up 2 Days",
    Math.round((upDXY2HTML * 100 + Number.EPSILON) * 100) / 100,
    upDXY2SSS.length,
    dxyUP.length,
  ],
  [
    "DXY Up 3 Days",
    Math.round((upDXY3HTML * 100 + Number.EPSILON) * 100) / 100,
    upDXY3SSS.length,
    upDXY2SSS.length,
  ],
  [
    "DXY Down",
    Math.round((downDXY1HTML * 100 + Number.EPSILON) * 100) / 100,
    dxyDOWN.length,
    spyFULLALL.length,
  ],
  [
    "DXY Down 2 Days",
    Math.round((downDXY2HTML * 100 + Number.EPSILON) * 100) / 100,
    downDXY2SSS.length,
    dxyDOWN.length,
  ],
  [
    "DXY Down 3 Days",
    Math.round((downDXY3HTML * 100 + Number.EPSILON) * 100) / 100,
    downDXY3SSS.length,
    downDXY2SSS.length,
  ],
  [
    "SPY Open Up, SPY Up",
    Math.round((openUpSpyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    openUpSpyUP.length,
    openUP.length,
  ],
  [
    "SPY Open Down, SPY Up",
    Math.round((openDownSpyUPHTML * 100 + Number.EPSILON) * 100) / 100,
    openDownSpyUP.length,
    openDOWN.length,
  ],
];

console.dir(algorithmsMain, { maxArrayLength: null });
