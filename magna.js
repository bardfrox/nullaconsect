let combinedResults = [
  ['Result 1', 'Result 2'],
  ['Result 3', 'Result 4']
];

let sheetName = 'Sheet3';

// Append the sheet name to the existing value at row 1, column 0
combinedResults[1][0] += `,\n ${sheetName}`;

console.log(combinedResults);
