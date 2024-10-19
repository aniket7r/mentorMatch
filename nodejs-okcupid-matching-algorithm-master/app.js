// App Requires
const config = require('./config')
const profiles = require('./logic/profiles/profiles')
const file = require('./data/file/file')


startApp = () => {
  console.log('Starting App...')

  profiles.getAll(config.profilesFilePath) 
    .then((data) => {
      let matchingProfilesMap = profiles.findMatchingProfiles(data)

      for (let profile in matchingProfilesMap) {
        let topMatchingProfiles = findTopMatchingProfiles(matchingProfilesMap[profile], 10)
        console.log('final result is here')
        // file.write(config.writeToFolder + profile + '.json', { profile: profile, topMatchingProfiles: topMatchingProfiles })
      }
    })
}

startApp()
