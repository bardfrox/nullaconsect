function processValues(values, thresholds) {
  // Concatenate -Infinity with the thresholds array
  const extendedThresholds = [-Infinity].concat(thresholds);

  console.log('Extended Thresholds:', extendedThresholds);

  // Example logic that uses the extended thresholds
  return values.map(value => {
    // Find the appropriate threshold bucket for the value
    for (let i = 0; i < extendedThresholds.length; i++) {
      if (value < extendedThresholds[i]) {
        return `Value ${value} is in bucket ${i - 1}`;
      }
    }
    return `Value ${value} exceeds all thresholds`;
  });
}

// Example usage
const values = [5, 12, -3, 8, 25];
const thresholds = [0, 10, 20];

const result = processValues(values, thresholds);
console.log(result);
