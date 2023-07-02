const algorithmsMainforHTML = [
  ["SPY Up", 54.09, 4082, 7547],
  ["SPY Up 2 Days", 52.45, 2141, 4082],
  ["SPY Up 3 Days", 52.69, 1128, 2141],
  ["SPY Up 4 Days", 49.38, 557, 1128],
  ["SPY Up 5 Days", 50.09, 279, 557],
  ["SPY Up 6 Days", 48.03, 134, 279],
  ["SPY Down", 45.91, 3465, 7547],
  ["SPY Down 2 Days", 44.01, 1525, 3465],
  ["SPY Down 3 Days", 42.69, 651, 1525],
  ["SPY Down 4 Days", 39.02, 254, 651],
  ["SPY Down 5 Days", 35.83, 91, 254],
  ["SPY Down 6 Days", 30.77, 28, 91],
  ["SPY Up 0-1%", 38.84, 2931, 7547],
  ["SPY Up 1-2%", 10.51, 793, 7547],
  ["SPY Up 2-3%", 2.13, 161, 7547],
  ["SPY Up 3-4%", 0.72, 54, 7547],
  ["SPY Up 4%+", 0.49, 37, 7547],
  ["SPY Down 0-1%", 32.73, 2470, 7547],
  ["SPY Down 1-2%", 8.49, 641, 7547],
  ["SPY Down 2-3%", 2.88, 217, 7547],
  ["SPY Down 3-4%", 0.72, 54, 7547],
  ["SPY Down 4% or more", 0.42, 32, 7547],
  ["Next Day SPY Up after SPY Up 1 Day", 52.45, 2141, 4082],
  ["Next Day SPY Up after SPY Up 2 Days", 52.69, 1128, 2141],
  ["Next Day SPY Up after SPY Up 3 Days", 49.38, 557, 1128],
  ["Next Day SPY Up after SPY Up 4 Days", 50.09, 279, 557],
  ["Next Day SPY Up after SPY Up 5 Days", 48.03, 134, 279],
  ["Next Day SPY Up after SPY Up 6 Days", 49.25, 66, 134],
  ["Next Day SPY Up after SPY Down 1 Day", 56.02, 1941, 3465],
  ["Next Day SPY Up after SPY Down 2 Days", 57.25, 873, 1525],
  ["Next Day SPY Up after SPY Down 3 Days", 60.98, 397, 651],
  ["Next Day SPY Up after SPY Down 4 Days", 64.17, 163, 254],
  ["Next Day SPY Up after SPY Down 5 Days", 69.23, 63, 91],
  ["Next Day SPY Up after SPY Down 6 Days", 67.86, 19, 28],
  ["Next Day SPY Up after +0-1% Day", 53.53, 1569, 2931],
  ["Next Day SPY Up after +1-2% Day", 49.81, 395, 793],
  ["Next Day SPY Up after +2-3% Day", 52.17, 84, 161],
  ["Next Day SPY Up after +3-4% Day", 57.41, 31, 54],
  ["Next Day SPY Up after 4%+ Day", 37.84, 14, 37],
  ["Next Day SPY Up after -0-1% Day", 55.63, 1374, 2470],
  ["Next Day SPY Up after -1-2% Day", 55.54, 356, 641],
  ["Next Day SPY Up after -2-3% Day", 57.6, 125, 217],
  ["Next Day SPY Up after -3-4% Day", 61.11, 33, 54],
  ["Next Day SPY Up after -4% or more Day", 56.25, 18, 32],
  ["Next Day SPY Up after Vol Up 1 Day", 54.69, 2042, 3734],
  ["Next Day SPY Up after Vol Up 2 Days", 55.21, 758, 1373],
  ["Next Day SPY Up after Vol Up 3 Days", 53.35, 231, 433],
  ["Next Day SPY Up after Vol Down 1 Day", 53.5, 2040, 3813],
  ["Next Day SPY Up after Vol Down 2 Days", 52.52, 762, 1451],
  ["Next Day SPY Up after Vol Down 3 Days", 56.8, 259, 456],
  ["Next Day SPY Up after DXY Up 1 Day", 53.93, 2066, 3831],
  ["Next Day SPY Up after DXY Up 2 Days", 54.85, 1030, 1878],
  ["Next Day SPY Up after DXY Up 3 Days", 51.8, 476, 919],
  ["Next Day SPY Up after DXY Down 1 Day", 54.25, 2016, 3716],
  ["Next Day SPY Up after DXY Down 2 Days", 54.86, 931, 1697],
  ["Next Day SPY Up after DXY Down 3 Days", 52.93, 388, 733],
  ["Next Day SPY Up after 10 Year Up 1 Day", 54.17, 2035, 3757],
  ["Next Day SPY Up after 10 Year Up 2 Days", 54.07, 984, 1820],
  ["Next Day SPY Up after 10 Year Up 3 Days", 54.13, 459, 848],
  ["Next Day SPY Up after 10 Year Down 1 Day", 54.01, 2047, 3790],
  ["Next Day SPY Up after 10 Year Down 2 Days", 53.86, 998, 1853],
  ["Next Day SPY Up after 10 Year Down 3 Days", 53.36, 469, 879],
  ["SPY Up & Volume Below 50k", 54.97, 1748, 3180],
  ["SPY Up & Volume 50k-75k", 59.44, 718, 1208],
  ["SPY Up & Volume 75k-100k", 55.18, 469, 850],
  ["SPY Up & Volume 100k+", 49.68, 1147, 2309],
  ["SPY Up & Vol Up 1 Day", 46.65, 1742, 3734],
  ["SPY Up & Vol Up 2 Days", 43.7, 600, 1373],
  ["SPY Up & Vol Up 3 Days", 43.65, 189, 433],
  ["SPY Up & Vol Down 1 Day", 61.37, 2340, 3813],
  ["SPY Up & Vol Down 2 Days", 61.89, 898, 1451],
  ["SPY Up & Vol Down 3 Days", 60.31, 275, 456],
  ["SPY Up & 10 Year Up 1 Day", 59.52, 2236, 3757],
  ["SPY Up & 10 Year Up 2 Days", 57.69, 1050, 1820],
  ["SPY Up & 10 Year Up 3 Days", 55.07, 467, 848],
  ["SPY Up & 10 Year Down 1 Day", 48.71, 1846, 3790],
  ["SPY Up & 10 Year Down 2 Days", 46.47, 861, 1853],
  ["SPY Up & 10 Year Down 3 Days", 43.8, 385, 879],
  ["SPY Up & DXY Up 1 Day", 54.09, 2072, 3831],
  ["SPY Up & DXY Up 2 Days", 54.26, 1019, 1878],
  ["SPY Up & DXY Up 3 Days", 54.41, 500, 919],
  ["SPY Up & DXY Down 1 Day", 54.09, 2010, 3716],
  ["SPY Up & DXY Down 2 Days", 54.51, 925, 1697],
  ["SPY Up & DXY Down 3 Days", 55.25, 405, 733],
  ["Volume Up", 49.48, 3734, 7547],
  ["Volume Up 2 Days", 36.77, 1373, 3734],
  ["Volume Up 3 Days", 31.39, 431, 1373],
  ["Volume Down", 50.52, 3813, 7547],
  ["Volume Down 2 Days", 38.05, 1451, 3813],
  ["Volume Down 3 Days", 31.43, 456, 1451],
  ["10 Year Up", 49.78, 3757, 7547],
  ["10 Year Up 2 Days", 48.44, 1820, 3757],
  ["10 Year Up 3 Days", 46.59, 848, 1820],
  ["10 Year Down", 50.22, 3790, 7547],
  ["10 Year Down 2 Days", 48.89, 1853, 3790],
  ["10 Year Down 3 Days", 47.44, 879, 1853],
  ["DXY Up", 50.76, 3831, 7547],
  ["DXY Up 2 Days", 49.02, 1878, 3831],
  ["DXY Up 3 Days", 40.15, 754, 1878],
  ["DXY Down", 49.24, 3716, 7547],
  ["DXY Down 2 Days", 45.67, 1697, 3716],
  ["DXY Down 3 Days", 43.19, 733, 1697],
  ["SPY Open Up, SPY Up", 69.05, 2845, 4120],
  ["SPY Open Down, SPY Up", 33.52, 1097, 3273],
];

const algorithmsKey1 = [
  "Event",
  "Percentage",
  "Times Happened",
  "Total Possible",
];
const algorithmsMainforHTML2 = algorithmsMainforHTML.map((a) => {
  return a.reduce((p, c, i) => ({ ...p, [algorithmsKey1[i]]: c }), {});
});

//console.log(algorithmsMainforHTML.length);
//console.dir(algorithmsMain2, { maxArrayLength: null });

// ALGORITHMS TABLE

function generateTableHead2(table, data) {
  let thead2 = table.createTHead();
  let row2 = thead2.insertRow();
  for (let key of data) {
    let th2 = document.createElement("th");
    let text2 = document.createTextNode(key);
    th2.appendChild(text2);
    row2.appendChild(th2);
  }
}

function generateTable2(table, data) {
  for (let element of data) {
    let row3 = table.insertRow();
    for (key in element) {
      let cell2 = row3.insertCell();
      let text3 = document.createTextNode(element[key]);
      cell2.appendChild(text3);
    }
  }
}

let table2 = document.querySelector("#table3");
let data2 = Object.keys(algorithmsMainforHTML2[0]);
generateTable2(table2, algorithmsMainforHTML2);
generateTableHead2(table2, data2);
