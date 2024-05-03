/**
 * Calculate average value of Array
 *
 * @param {Number[]} storedPixelData
 * @return {{average: Number}}
 */

function getAverage(storedPixelData) {
  let average = storedPixelData[0];
  const numPixels = storedPixelData.length;
  const sum = storedPixelData.reduce((all, item) => {
    all += item
    return all;
  }, 0);
  average = sum / numPixels;
  return average;
}

export default getAverage;
