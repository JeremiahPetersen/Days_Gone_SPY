const algoResultsHTML = [
  [
    42.86, 3, 7, 85.71, 6, 7, 45.83, 11, 24, 62.5, 15, 24, 40.68, 24, 59, 50.85,
    30, 59, 52.38, 99, 189, 52.38, 99, 189, 50, 5, 10, 70, 7, 10, 48.15, 13, 27,
    66.67, 18, 27, 50.54, 47, 93, 58.06, 54, 93, 52.8, 264, 500, 53.2, 266, 500,
  ],
];

const algoResultsKey = [
  "af",
  "ae",
  "ad",
  "ac",
  "ab",
  "aa",
  "A",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "bb",
  "cc",
  "dd",
  "ee",
  "ff",
  "gg",
  "hh",
  "ii",
  "jj",
  "kk",
  "ll",
  "mm",
  "nn",
  "oo",
  "pp",
  "qq",
];
const algoResultsMain = algoResultsHTML.map((a) => {
  return a.reduce((p, c, i) => ({ ...p, [algoResultsKey[i]]: c }), {});
});

function generateTableHead6(table, data) {
  let thead6 = table.createTHead();
  let row6 = thead6.insertRow();
  for (let key of data) {
    let th6 = document.createElement("th");
    let text6 = document.createTextNode(key);
    th6.appendChild(text6);
    row6.appendChild(th6);
  }
}

function generateTable6(table, data) {
  for (let element of data) {
    let row7 = table.insertRow();
    for (key in element) {
      let cell6 = row7.insertCell();
      let text7 = document.createTextNode(element[key]);
      cell6.appendChild(text7);
    }
  }
}

let table6 = document.querySelector("#table4");
let data6 = Object.keys(algoResultsMain[0]);
generateTable6(table6, algoResultsMain);
generateTableHead6(table6, data6);
