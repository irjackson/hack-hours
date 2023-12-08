// Mubashir is eating a watermelon.

//     He spits out all watermelon seeds if seeds are more than five.
//     He can swallow all watermelon seeds if seeds are less than or equal to five.
//     He can eat 1/4 of a watermelon each time.

// Given a 2D array of watermelon where 0 is representing juicy watermelon while 1 is 
// representing seed, return total number of seeds spit-out. 

function totalSeeds(watermelon){
  let totalSeeds = 0;
  let half = false;
  let segment = [0, 4];
  for (let i = 0; i < 4; i++){
    if (i >= 2) segment = [4, 8];
    totalSeeds += eatSlice(watermelon);
  };
  function eatSlice(watermelon){
    let seedsInSlice = 0;
    for (let i = segment[0]; i < segment[1]; i++){
      let bite = watermelon[i].slice(0,4).filter((a)=> a).length;
      if (half){
        bite = watermelon[i].slice(4).filter((a)=> a).length;
      };
      seedsInSlice += bite;
    };
    half = !half;
    if (seedsInSlice > 5){
      return seedsInSlice;
    } else {
      return 0;
    };
  }
  return totalSeeds;
};

console.log(totalSeeds([
  [1, 0, 0, 1, 1, 1, 0, 1], 
  [1, 0, 1, 0, 1, 1, 0, 0], 
  [1, 1, 1, 1, 0, 0, 0, 0], 
  [0, 1, 0, 1, 1, 1, 1, 0], 
  [0, 0, 0, 1, 0, 1, 0, 0], 
  [1, 1, 1, 0, 0, 0, 1, 1], 
  [1, 0, 1, 1, 0, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0]]));

console.log(totalSeeds([
  [0, 1, 0, 0, 0, 0, 1, 0], 
  [0, 0, 1, 0, 1, 0, 0, 0], 
  [0, 1, 1, 0, 1, 0, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0], 
  [1, 0, 0, 0, 0, 0, 1, 0], 
  [0, 0, 1, 0, 1, 0, 1, 0], 
  [0, 1, 0, 1, 1, 0, 0, 0], 
  [0, 1, 0, 0, 0, 0, 0, 1]]));

console.log(totalSeeds([
  [0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 0, 1, 0, 0, 1], 
  [0, 0, 0, 0, 0, 1, 0, 0], 
  [0, 0, 0, 0, 0, 0, 0, 0], 
  [0, 0, 0, 1, 0, 0, 0, 0], 
  [0, 1, 0, 0, 1, 0, 1, 0], 
  [1, 0, 0, 0, 0, 0, 0, 0], 
  [1, 1, 0, 1, 1, 0, 0, 0]]));