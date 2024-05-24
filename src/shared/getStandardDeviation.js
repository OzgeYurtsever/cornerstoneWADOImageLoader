/**
 * Calculate standard deviation of Array
 *
 * @param {Number[]} storedPixelData
 * @return {{standardDeviation: Number}}
 */

function getStandardDeviation(storedPixelData) {
  const numPixels = storedPixelData.length;
  const mean = storedPixelData.reduce((acc, val) => acc + val, 0) / numPixels;
  const arr = storedPixelData.map((x) => Math.pow(x - mean, 2));
  const standardDeviation = Math.sqrt(arr.reduce((a, b) => a + b) / numPixels);
  return standardDeviation;
}

export default getStandardDeviation;
