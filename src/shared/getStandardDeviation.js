/**
 * Calculate standard deviation of Array
 *
 * @param {Number[]} storedPixelData
 * @return {{standardDeviation: Number}}
 */

function getStandardDeviation(storedPixelData) {
  const arr32 = Int32Array.from(storedPixelData);
  const numPixels = arr32.length;
  // console.log(' ---> numPixels', numPixels);
  const mean1 = arr32.reduce((acc, val) => acc + val, 0);
  // console.log(' ---> mean 1', mean1);
  const mean = arr32.reduce((acc, val) => acc + val, 0) / numPixels;
  const arr = arr32.map((x) => Math.pow(x - mean, 2));
  // console.log(' ----> arr', arr);
  // console.log(' ====> stdev 1', Math.sqrt(arr.reduce((a, b) => a + b)));
  const standardDeviation = Math.sqrt(arr.reduce((a, b) => a + b) / numPixels);
  arr32.slice(0, 5).forEach((x) => {
    // console.log(' ---> x', x);
    // console.log(' ---> mean', mean);
    // console.log(' ---> result', Math.pow(x - mean, 2));
  });
  return standardDeviation;
}

export default getStandardDeviation;
