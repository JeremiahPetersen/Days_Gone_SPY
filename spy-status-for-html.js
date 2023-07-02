const spyStatusResults2 = [
  [
    "01-17-2023",
    "SPY-1",
    "DXY+1",
    "tenY+1",
    "Vol-2",
    "PCT_0-1-",
    "55.56%",
    5,
    9,
  ],
  ["01-13-2023", "SPY+4", "DXY-3", "tenY-1", "Vol-1", "PCT_0-1+", "X", 0, 0],
  ["01-12-2023", "SPY+3", "DXY-2", "tenY+1", "Vol+2", "PCT_0-1+", "50%", 1, 2],
  ["01-11-2023", "SPY+2", "DXY-1", "tenY-1", "Vol+1", "PCT_1-2+", "40%", 2, 5],
  ["NEW CODE", "ABOVE", "X", "X", "X", "X", "X", "X", "X"],
  [
    "01-10-2023",
    "SPY+1",
    "DXY+1",
    "tenY+1",
    "Vol-2",
    "PCT_0-1+",
    "69.23%",
    9,
    13,
  ],
  [
    "01-09-2023",
    "SPY-1",
    "DXY-2",
    "tenY-2",
    "Vol-1",
    "PCT_0-1-",
    "35.71%",
    5,
    14,
  ],
  ["01-06-2023", "SPY+1", "DXY-1", "tenY-1", "Vol+1", "PCT_2-3+", "0%", 0, 1],
  [
    "01-05-2023",
    "SPY-1",
    "DXY+1",
    "tenY+1",
    "Vol-1",
    "PCT_1-2-",
    "33.33%",
    1,
    3,
  ],
  [
    "01-04-2023",
    "SPY+1",
    "DXY-1",
    "tenY-2",
    "Vol+1",
    "PCT_0-1+",
    "55.56%",
    5,
    9,
  ],
  [
    "01-03-2023",
    "SPY-2",
    "DXY+1",
    "tenY-1",
    "Vol-1",
    "PCT_0-1-",
    "66.67%",
    8,
    12,
  ],
  ["12-30-2022", "SPY-1", "DXY-2", "tenY+1", "Vol+1", "PCT_0-1-", "50%", 6, 12],
  [
    "12-29-2022",
    "SPY+1",
    "DXY-1",
    "tenY-1",
    "Vol-1",
    "PCT_1-2+",
    "14.29%",
    1,
    7,
  ],
  ["12-28-2022", "SPY-2", "DXY+1", "tenY+3", "Vol+1", "PCT_1-2-", "100%", 1, 1],
  ["12-27-2022", "SPY-1", "DXY-2", "tenY+3", "Vol-2", "PCT_0-1-", "50%", 2, 4],
  [
    "12-23-2022",
    "SPY+1",
    "DXY-1",
    "tenY+2",
    "Vol-1",
    "PCT_0-1+",
    "30.77%",
    4,
    13,
  ],
  ["12-22-2022", "SPY-1", "DXY+2", "tenY+1", "Vol+2", "PCT_1-2-", "50%", 1, 2],
  ["12-21-2022", "SPY+2", "DXY+1", "tenY-1", "Vol+1", "PCT_1-2+", "50%", 2, 4],
  ["12-20-2022", "SPY+1", "DXY-2", "tenY+3", "Vol-3", "PCT_0-1+", "100%", 1, 1],
  ["12-19-2022", "SPY-4", "DXY-1", "tenY+2", "Vol-2", "PCT_0-1-", "100%", 1, 1],
  ["12-16-2022", "SPY-3", "DXY+2", "tenY+1", "Vol-1", "PCT_1-2-", "0%", 0, 2],
  ["12-15-2022", "SPY-2", "DXY+1", "tenY-3", "Vol+1", "PCT_2-3-", "0%", 0, 1],
  ["12-14-2022", "SPY-1", "DXY-2", "tenY-2", "Vol-1", "PCT_0-1-", "40%", 4, 10],
  [
    "12-13-2022",
    "SPY+2",
    "DXY-1",
    "tenY-1",
    "Vol+1",
    "PCT_0-1+",
    "38.1%",
    8,
    21,
  ],
  [
    "12-12-2022",
    "SPY+1",
    "DXY+2",
    "tenY+3",
    "Vol-1",
    "PCT_1-2+",
    "66.67%",
    2,
    3,
  ],
];
const spyStatusKey2 = [
  "Date",
  "SPY",
  "DXY",
  "10 Year",
  "Volume",
  "Day %",
  "% Nxt SPY Up",
  "Up",
  "Total",
];
const spyStatusMainResults = spyStatusResults2.map((a) => {
  return a.reduce((p, c, i) => ({ ...p, [spyStatusKey2[i]]: c }), {});
});

function generateTableHead4(table, data) {
  let thead4 = table.createTHead();
  let row4 = thead4.insertRow();
  for (let key of data) {
    let th4 = document.createElement("th");
    let text4 = document.createTextNode(key);
    th4.appendChild(text4);
    row4.appendChild(th4);
  }
}

function generateTable4(table, data) {
  for (let element of data) {
    let row5 = table.insertRow();
    for (key in element) {
      let cell4 = row5.insertCell();
      let text5 = document.createTextNode(element[key]);
      cell4.appendChild(text5);
    }
  }
}

let table4 = document.querySelector("#table2");
let data4 = Object.keys(spyStatusMainResults[0]);
generateTable4(table4, spyStatusMainResults);
generateTableHead4(table4, data4);
