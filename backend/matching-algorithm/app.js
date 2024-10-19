import {config} from './config.js'
import { findMatchingProfiles, findTopMatchingProfiles } from './logic/profiles/profiles.js'
// const file = require('./data/file/file')
import mongoose from 'mongoose';
import { Match } from '../database/matchesDB.js';
import { getAllUserProfiles } from './resources/data/userProfile.js'


const startApp = async (userId) => {
  console.log('Starting Matching...')
  console.log('userId: ', userId)

  try {
    let matches = {}
    const data = await getAllUserProfiles()
    let matchingProfilesMap = findMatchingProfiles(data, userId)
    console.log('matchingProfilesMap: ' + JSON.stringify(matchingProfilesMap))
    for (let profile in matchingProfilesMap) {
      let topMatchingProfiles = findTopMatchingProfiles(matchingProfilesMap[profile], 10)
      // console.log('final result is here')
      // console.log("topMatchingProfiles: " + Object.keys(topMatchingProfiles).length)
      // file.write(config.writeToFolder + profile + '.json', { profile: profile, topMatchingProfiles: topMatchingProfiles })
      matches[profile] = topMatchingProfiles
      console.log({
        profile: profile,
        topMatchingProfiles: topMatchingProfiles
      });
    }
    console.log('matches: ' + JSON.stringify(matches))
    console.log("userID: ", Object.keys(matches)[0])
    saveMatches(userId, matches)
  } catch (err) {
    console.error(err)
  }
}
const saveMatches = async (userId, matches) => {
  try {
      // Convert matches object to the correct Map format
      const formattedMatches = new Map();

      for (const [matchedUserId, scores] of Object.entries(matches)) {
          for (const [score, matchedUserIds] of Object.entries(scores)) {
              formattedMatches.set(matchedUserId, {
                  score: parseFloat(score),
                  matchedUserIds: matchedUserIds.map(id => new mongoose.Types.ObjectId(id))
              });
          }
      }

      // Create a new Matches document
      const newMatches = new Match({
          userId: new mongoose.Types.ObjectId(userId),
          matches: formattedMatches
      });

      // Save the document to the database
      await newMatches.save();
      console.log('Matches saved successfully');
  } catch (error) {
      console.error('Error saving matches:', error);
  }
};


export { startApp };