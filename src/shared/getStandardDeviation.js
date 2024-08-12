/**
 * Calculate standard deviation of Array
 *
 * @param {Number[]} storedPixelData
 * @return {{standardDeviation: Number}}
 */

function getStandardDeviation(storedPixelData) {
  const numPixels = storedPixelData.length;
  console.log(' ---> numPixels', numPixels);
  const mean1 = storedPixelData.reduce((acc, val) => acc + val, 0);
  console.log(' ---> mean 1', mean1);
  const mean = storedPixelData.reduce((acc, val) => acc + val, 0) / numPixels;
  const arr = storedPixelData.map((x) => Math.pow(x - mean, 2));
  console.log(' ----> arr', arr);
  console.log(' ====> stdev 1', Math.sqrt(arr.reduce((a, b) => a + b)));
  const standardDeviation = Math.sqrt(arr.reduce((a, b) => a + b) / numPixels);
  return standardDeviation;
}

export default getStandardDeviation;
