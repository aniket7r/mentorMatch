// App Requires
// const file = require('../../data/file/file')
import { calculateMatchingPercentageBetweenProfiles } from '../profile/profile.js'
import { mergeSort } from '../../utils/sort/sort.js'
// getAll retrun an array of profile (No use)
// getAll = (filePath) => {
//   return new Promise((resolve, reject) => {
//     file.read(filePath)
//         .then((profiles) => {
//           if (!plerofis || !profiles.length) {
//             console.error('getAll: No profiles found...')

//             return []
//           }

//           // TODO: Validate Profiles

//           resolve(profiles)
//         })
//         .catch((err) => {
//           throw new Error(err)
//         })
//   })
// }

const findMatchingProfiles = (profiles, userId) => {
  if (!profiles || !profiles.length) {
      console.error('findMatchingProfiles: No profiles to match...');
      return;
  }

  const profileA = profiles.filter(profile => profile._id.toString() === userId.toString())[0];

  if (!profileA) {
      console.error('No profile found with _id: ' + userId);
      return;
  }

  let profilesMatchPercentrages = {};
  let index = 0;

  while (index < profiles.length) {
      let profileB = profiles[index];
      if (profileA._id !== profileB._id) {
          let profileAMatchPercentages = calculateMatchingPercentageBetweenProfiles(profileA, profileB);
          let profileBMatchPercentages = calculateMatchingPercentageBetweenProfiles(profileB, profileA);

          if (!isNaN(profileAMatchPercentages) && !isNaN(profileBMatchPercentages)) {
              let profileAResult = { toProfile: profileB._id, matchPercentages: profileAMatchPercentages };
              let profileBResult = { toProfile: profileA._id, matchPercentages: profileBMatchPercentages };

              if (!profilesMatchPercentrages[profileA._id]) {
                  profilesMatchPercentrages[profileA._id] = [profileAResult];
              } else {
                  profilesMatchPercentrages[profileA._id].push(profileAResult);
              }

              if (!profilesMatchPercentrages[profileB._id]) {
                  profilesMatchPercentrages[profileB._id] = [profileBResult];
              } else {
                  profilesMatchPercentrages[profileB._id].push(profileBResult);
              }
          }
      }

      index += 1;
  }

  return profilesMatchPercentrages;
};


const findTopMatchingProfiles = (matchingProfiles, top = 10) => {
  if (!matchingProfiles || !matchingProfiles.length) {
    console.error('findTopMatchingProfiles: No profiles matching...')

    return
  }

  let topMatchingScores = Array.from({ length: top }, () => 0)
  let topMatchingProfiles = {}
  let index = 0
  let lowestScore = topMatchingScores[topMatchingScores.length - 1]
  // console.log("SMOKE CHECKE profiles.js 2")
  while (index < matchingProfiles.length) {
    // console.log("SMOKE CHECKE profiles.js 3")
    let currentScore = matchingProfiles[index].matchPercentages
    let currentProfile = matchingProfiles[index].toProfile

    if (topMatchingProfiles[currentScore]) {
      topMatchingProfiles[currentScore].push(currentProfile)
    } else if (lowestScore < currentScore) {
      delete topMatchingProfiles[lowestScore]

      topMatchingProfiles[currentScore] = [currentProfile]
      topMatchingScores[topMatchingScores.length - 1] = currentScore
      topMatchingScores = mergeSort(topMatchingScores, (scoreA, scoreB) => scoreA > scoreB)

      lowestScore = topMatchingScores[topMatchingScores.length - 1]
    }

    index += 1
  }
  // console.log("SMOKE CHECKE profiles.js 4")
  // console.log("topMatchingProfiles: " + JSON.stringify(topMatchingProfiles))
  // console.log("topMatchingScores: " + topMatchingScores)
  return sortTopMatchingProfiles(topMatchingProfiles, topMatchingScores)
}

const sortTopMatchingProfiles = (topMatchingProfiles, topMatchingScores) => {
  let sortedMap = {}
  // console.log("SMOKE CHECKE profiles.js 5")
  for (let score of topMatchingScores) { // Declare score with let or const
    // console.log("SMOKE CHECK profiles.js 6");
    if (score !== 0) { // Filter out scores that are 0
        if (topMatchingProfiles[score] !== undefined) {
            sortedMap[score] = topMatchingProfiles[score];
        } else {
            sortedMap[score] = []; // Handle cases where there is no matching profile
        }
    }
}
  // console.log("SMOKE CHECKE profiles.js 7")
  // console.log("sortedMap" + JSON.stringify(sortedMap))
  return sortedMap
}

export { findMatchingProfiles, findTopMatchingProfiles }
