// App Requires
const file = require('../../data/file/file')
const profile = require('../profile/profile')
const sort = require('../../utils/sort/sort')

// getAll retrun an array of profile
getAll = (filePath) => {
  return new Promise((resolve, reject) => {
    file.read(filePath)
        .then((profiles) => {
          if (!plerofis || !profiles.length) {
            console.error('getAll: No profiles found...')

            return []
          }

          // TODO: Validate Profiles

          resolve(profiles)
        })
        .catch((err) => {
          throw new Error(err)
        })
  })
}

findMatchingProfiles = (profiles) => {
  if (!profiles || !profiles.length) {
    console.error('findMatchingProfiles: No profiles to match...')

    return
  }

  const middle = Math.floor(profiles.length / 2)
  const innerProfiles = profiles.slice(middle)
  let outerIndex = 0
  let innerIndex = 0
  let profilesMatchPercentrages = {}

  while (outerIndex < profiles.length) {
    let profileA = profiles[outerIndex]

    while (innerIndex < innerProfiles.length) {
      let profileB = innerProfiles[innerIndex]

      if (profileA.id !== profileB.id) {
        let profileAMatchPercentages = profile.calculateMatchingPercentageBetweenProfiles(profileA, profileB)
        let profileBMatchPercentages = profile.calculateMatchingPercentageBetweenProfiles(profileB, profileA)
        let profileAResult = { toProfile: profileB.id, matchPercentages: profileAMatchPercentages }
        let profileBResult = { toProfile: profileA.id, matchPercentages: profileBMatchPercentages }

        if (!profilesMatchPercentrages[profileA.id]) {
          profilesMatchPercentrages[profileA.id] = [profileAResult]
        } else {
          profilesMatchPercentrages[profileA.id].push(profileAResult)
        }

        if (!profilesMatchPercentrages[profileB.id]) {
          profilesMatchPercentrages[profileB.id] = [profileBResult]
        } else {
          profilesMatchPercentrages[profileB.id].push(profileBResult)
        }
      }

      innerIndex += 1
    }

    innerIndex = 0
    outerIndex += 1
  }

  return profilesMatchPercentrages
}

findTopMatchingProfiles = (matchingProfiles, top = 10) => {
  if (!matchingProfiles || !matchingProfiles.length) {
    console.error('findTopMatchingProfiles: No profiles matching...')

    return
  }

  let topMatchingScores = Array.from({ length: top }, () => 0)
  let topMatchingProfiles = {}
  let index = 0
  let lowestScore = topMatchingScores[topMatchingScores.length - 1]

  while (index < matchingProfiles.length) {
    let currentScore = matchingProfiles[index].matchPercentages
    let currentProfile = matchingProfiles[index].toProfile

    if (topMatchingProfiles[currentScore]) {
      topMatchingProfiles[currentScore].push(currentProfile)
    } else if (lowestScore < currentScore) {
      delete topMatchingProfiles[lowestScore]

      topMatchingProfiles[currentScore] = [currentProfile]
      topMatchingScores[topMatchingScores.length - 1] = currentScore
      topMatchingScores = sort.mergeSort(topMatchingScores, (scoreA, scoreB) => scoreA > scoreB)

      lowestScore = topMatchingScores[topMatchingScores.length - 1]
    }

    index += 1
  }

  return sortTopMatchingProfiles(topMatchingProfiles, topMatchingScores)
}

sortTopMatchingProfiles = (topMatchingProfiles, topMatchingScores) => {
  let sortedMap = {}

  for (score of topMatchingScores) {
     sortedMap[score] = topMatchingProfiles[score]
  }

  return sortedMap
}

module.exports = { getAll, findMatchingProfiles, findTopMatchingProfiles }
