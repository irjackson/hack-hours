// Create a function that takes the length, width, height (in meters) and output unit and 
// returns the volume of a pyramid to three decimal places in the correct unit.

// Examples
//   pyramidVolume(4, 6, 20, "centimeters") ➞ "160000000.000 cubic centimeters"
//   pyramidVolume(1843, 1823, 923, "kilometers") ➞ "1.034 cubic kilometers"
//   pyramidVolume(18, 412, 93, "millimeters") ➞ "229896000000000.000 cubic millimeters"

// Notes
//     The units used are limited to: millimeters, centimeters, meters and kilometers.
//     Ensure you return the answer and add the correct unit in the format cubic <unit>.

function pyramidVolume(length, width, height, unit){
  let result;
  switch (unit){
    case "centimeters":
      result = (length * width * height) / 3 * (100*100*100);
      result = result.toFixed(3);
      break;
    case "kilometers":
      result = (length * width * height) / 3 / 1000000000;
      result = result.toFixed(3);
      break;
    case "millimeters":
      result = (length * width * height) / 3 * (100*100*100*100*10);
      result = result.toFixed(3);
      break;
    case "meters":
      result = (length * width * height) / 3;
      result = result.toFixed(3);
      break;
  }
  return `${result} cubic ${unit}`;
};

console.log(pyramidVolume(4, 6, 20, "centimeters"));
console.log(pyramidVolume(1843, 1823, 923, "kilometers"));
console.log(pyramidVolume(18, 412, 93, "millimeters"));
console.log(pyramidVolume(13.6, 62.2, 6, "meters"));