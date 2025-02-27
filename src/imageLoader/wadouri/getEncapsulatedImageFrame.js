import external from '../../externalModules.js';

/**
 * Function to deal with extracting an image frame from an encapsulated data set.
 */

function framesAreFragmented(dataSet) {
  //TODO: getPixelData pases frameIndex
  const numberOfFrames = dataSet.intString('x00280008');
  const pixelDataElement = dataSet.elements.x7fe00010;
  return numberOfFrames !== pixelDataElement.fragments.length;
}

export default function getEncapsulatedImageFrame(dataSet, frameIndex) {
  const { dicomParser } = external;

  if (
    dataSet.elements.x7fe00010 &&
    dataSet.elements.x7fe00010.basicOffsetTable.length
  ) {
    console.log(' ----> first if is true');
    // Basic Offset Table is not empty
    return dicomParser.readEncapsulatedImageFrame(
      dataSet,
      dataSet.elements.x7fe00010,
      frameIndex
    );
  }

  // Empty basic offset table

  if (framesAreFragmented(dataSet)) {
    console.log(' ----> framesAreFragmented true');
    const basicOffsetTable = dicomParser.createJPEGBasicOffsetTable(
      dataSet,
      dataSet.elements.x7fe00010
    );

    return dicomParser.readEncapsulatedImageFrame(
      dataSet,
      dataSet.elements.x7fe00010,
      frameIndex,
      basicOffsetTable
    );
  }

  return dicomParser.readEncapsulatedPixelDataFromFragments(
    dataSet,
    dataSet.elements.x7fe00010,
    frameIndex
  );
}
