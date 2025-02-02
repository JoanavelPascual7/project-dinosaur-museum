/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleDinosaurData` variable below to gain access to tickets data. This data is pulled from the `data/dinosaurs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all dinosaurs.
*/
const exampleDinosaurData = require("../data/dinosaurs");
// Do not change the line above.

/**
 * getLongestDinosaur()
 * ---------------------
 * Returns an object with the longest dinosaur from the list. Converts from meters to feet.
 *
 * NOTE: To convert from meters to feet, multiply the meters by `3.281`.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @returns {Object} An object where the key is the name of the dinosaur and the value is the height of the dinosaur in feet.
 *
 * EXAMPLE:
 *  getLongestDinosaur(dinosaurs);
 *  //> { Brachiosaurus: 98.43 }
 */
function getLongestDinosaur(dinosaurs) {
let tallestDinosaur = {};
let maxLength = 0;
for (let i = 0; i < dinosaurs.length; i++) {
  let currentDinosaur = dinosaurs[i];
  let lengthInFeet = currentDinosaur.lengthInMeters * 3.281;
  if (lengthInFeet > maxLength) {
    maxLength = lengthInFeet;
    tallestDinosaur = {
      [currentDinosaur.name]: lengthInFeet
    };
  }
  }
  return tallestDinosaur
}

// console.log(dinosaurs)
  
// let newDinoObj = { }
// let largestDino = dinosaurs.lengthInMeters;
// for (let i = 1; i < dinosaurs.length; i++) {
//   if (dinosaurs[i] > largest) {
//     largestDino = dinosaurs[i] * 3.281
//     newDinoObj.push(dinosaurs[i])
//   }
// }
// return largestDino

// if(dinosaurs.length === 0) return {};
// let largestDino = dinosaurs[0];
// for (let i = 1; i < dinosaurs.length; i++) {
//     if (dinosaurs[i].height > largestDino.height) {
//         largestDino = dinosaurs[i];
//     }
// }
// return { [largestDino.name]: largestDino.height * 3.281 };
// }


/**
 * getDinosaurDescription()
 * ---------------------
 * Returns a formatted description of a dinosaur. If the dinosaur cannot be found, returns an error message.
 *
 * NOTE: Carefully view the test output and example below to see how the returned string should be formatted.
 *
 * NOTE: The `\n` represents a new line in text.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {string} id - The unique identifier for the dinosaur.
 * @returns {string} A detailed description of the dinosaur.
 *
 * EXAMPLE:
 *  getDinosaurDescription(dinosaurs, "U9vuZmgKwUr");
 *  //> "Xenoceratops (ZEE-no-SEH-ruh-tops)\nXenoceratops had horns and a bony frill with elaborate ornamentation of projections, knobs, and spikes. It lived in the Early Cretaceous period, over 77.5 million years ago."
 *
 *  getDinosaurDescription(dinosaurs, "incorrect-id");
 *  //> "A dinosaur with an ID of 'incorrect-id' cannot be found."
 */
function getDinosaurDescription(dinosaurs, id) {
  let dinosaur = dinosaurs.find(dino => dino.dinosaurId === id);
  if (!dinosaur) {
    return "A dinosaur with an ID of '" + id + "' cannot be found.";
  }
  let mya = "";
  if (dinosaur.mya.length <= 1) {
    mya = " period, over " + dinosaur.mya[0] + " million years ago.";
  } else {
    mya = " period, over " + dinosaur.mya[1] + " million years ago.";
  }
  return dinosaur.name + " (" + dinosaur.pronunciation + ")\n" + dinosaur.info + " It lived in the " + dinosaur.period + mya;
}



// const dinosaur = dinosaurs.find(d => d.dinosaurId === id);
// if (!dinosaur) {
//   return "A dinosaur with an ID of '" + id + "' cannot be found.";
// }
// let mya = "";
// if (dinosaur.mya.length === 1) {
//   mya = `over ${dinosaur.mya[0]} million years ago`;
// } else {
//   mya = `between ${dinosaur.mya[0]} and ${dinosaur.mya[1]} million years ago`;
// }
// return `${dinosaur.name} (${dinosaur.pronunciation})\n${dinosaur.name} ${dinosaur.meaningOfName} . It lived in the ${dinosaur.period}, ${mya}.`;

// for (let i = 0; i < dinosaurs.length; i++) {
//   if (dinosaurs[i].dinosaurId === id) {
//     return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info}`;
//   }
// }
// return `A dinosaur with an ID of '${id}' cannot be found.`;

// const dinosaur = dinosaurs.find(dino => dino.dinosaurId === id);
// if (!dinosaur) {
//   return "A dinosaur with an ID of '" + id + "' cannot be found.";
// }
// let mya = "";
// if (dinosaur.mya.length === 1) {
//   mya = " over " + dinosaur.mya[0] + " million years ago.";
// } else {
//   mya = " between " + dinosaur.mya[0] + " and " + dinosaur.mya[1] + " million years ago.";
// }
// return dinosaur.name + " (" + dinosaur.pronunciation + ")\n" + dinosaur.info + " It lived in the " + dinosaur.period + mya;

// for (let i = 0; i < dinosaurs.length; i++) {
//   if (dinosaurs[i].dinosaurId === id) {
//     return `${dinosaurs[i].name} (${dinosaurs[i].pronunciation})\n${dinosaurs[i].info}. It lived in the ${dinosaurs[i].period}, over ${dinosaurs[i].mya} million years ago.`;
//   }
// }
// return `A dinosaur with an ID of '${id}' cannot be found.`;
// }

/**
 * getDinosaursAliveMya()
 * ---------------------
 * Returns an array of dinosaurs who were alive at the given `mya` (i.e. "millions of years ago") value. If a `key` is provided, returns the value of that key for each dinosaur alive at that time. Otherwise, returns the ID.
 *
 * If the dinosaur only has a single value for `mya`, allows for the `mya` value to be equal to the given value or one less. For example, if a dinosaur has a `mya` value of `[29]`, the dinosaur's information will be returned if `29` is entered or `28` is entered.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {number} mya - "Millions of years ago."
 * @param {string} key - An optional parameter. If included, for dinosaurs that lived during the `mya` value given, will return the value of the supplied key. Otherwise, returns the ID.
 * @returns {*[]} An array of values, which depend on the key given. The array should only include data of dinosaurs who lived during the given time period.
 *
 * EXAMPLE:
 *  getDinosaursAliveMya(dinosaurs, 150);
 *  //> ["YLtkN9R37", "GGvO1X9Zeh", "BFjjLjea-O", "V53DvdhV2A"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65);
 *  //> ["WHQcpcOj0G"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "name");
 *  //> ["Dracorex"]
 *
 *  getDinosaursAliveMya(dinosaurs, 65, "unknown-key");
 *  //> ["WHQcpcOj0G"]
 */
function getDinosaursAliveMya(dinosaurs, mya, key) {
  let result = [];
  for (let i = 0; i < dinosaurs.length; i++) {
      let dinosaur = dinosaurs[i];
      let myaRange = dinosaur.mya;
      if (Array.isArray(myaRange)) {
          if (myaRange.includes(mya) || (myaRange.length === 1 && myaRange[0] === mya + 1)) {
              if (key && dinosaur[key]) {
                  result.push(dinosaur[key]);
              } else {
                  result.push(dinosaur.id);
                  if (key === undefined) {
                      key = "dinosaurId"
                  }
                  var dinosaursAlive = dinosaurs.filter(function(dinosaur) {
                      if (dinosaur.mya.length === 1) {
                          return dinosaur.mya[0] <= mya + 1 && dinosaur.mya[0] >= mya - 1;
                      } else {
                          return dinosaur.mya[0] <= mya && dinosaur.mya[1] >= mya;
                      }
                  });
                  return dinosaursAlive.map(function(dinosaur) {
                      return dinosaur[key];
                  });
              }
          }
      }
  }
  return result;
}





// let result = [];
// for (let dinosaur of dinosaurs) {
//   if ((dinosaur.mya.length === 1 && (dinosaur.mya[0] === mya || dinosaur.mya[0] === mya - 1)) || (dinosaur.mya[0] <= mya && dinosaur.mya[1] >= mya)) {
//     if (!key) {
//       result.push(dinosaur.dinosaurId);
//     } else if (dinosaur[key]) {
//       result.push(dinosaur[key]);
//     } else {
//       result.push(dinosaur.dinosaurId);
//     }
//   }
// }
// return result;
// }

// let areAlive = [];
// for (let i = 0; i < dinosaurs.length; i++) {
//   if (dinosaurs[i].mya.includes(mya) || dinosaurs[i].mya.includes(mya - 1) && dinosaurs[i].mya.length === 1 ){
//     if (key) {
//       result.push(dinosaurs[i][key])
//     } else {
//       result.push(dinosaurs[i].dinosaurId)
//     }
  
  
// }
// }
// if (result.length === 0) {
//   return "Dinosaur not found";
// }
//   return result;


module.exports = {
  getLongestDinosaur,
  getDinosaurDescription,
  getDinosaursAliveMya,
};
