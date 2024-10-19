// App Requires
import {config} from '../../config.js'
import { mergeSort } from '../../utils/sort/sort.js'

const calculateMatchingPercentageBetweenProfiles = (profileA, profileB) => {
  if (!profileA || !profileB || profileA._id === profileB._id) {
    // console.log("SMOKE CHECKE 0")
    return
  }

  if (!profileA.answers || !profileA.answers.length) {
    return
  }

  if (!profileB.answers || !profileB.answers.length) {
    // console.log("SMOKE CHECKE 0.5")
    return
  }

  let sortedAnswersProfileA = profileA.answers //!! #DONE make sure you dont need to sort here everytime, insted place the qid in a sorted way when saving in the database. then you can just use the array directly
  let sortedAnswersProfileB = profileB.answers
  let answersIndexProfileA = 0
  let answersIndexProfileB = 0

  let s = 0
  let possibleImportancePointsProfileA = 0
  let earnedImportancePointsProfileA = 0
  let possibleImportancePointsProfileB = 0
  let earnedImportancePointsProfileB = 0
  // console.log("SMOKE CHECKE 1")
  // console.log('sorterdAnswersProfileA: ' + Object.keys(sortedAnswersProfileA).length)
  // console.log('sorterdAnswersProfileB: ' + Object.keys(sortedAnswersProfileB).length)
//!! #DONE sortedAnswersProfileA and sortedAnswersProfileB are already sorted, so you can just bring them directly from db
  while (answersIndexProfileA < Object.keys(sortedAnswersProfileA).length && answersIndexProfileB < Object.keys(sortedAnswersProfileB).length) {
    let profileAQuestion = sortedAnswersProfileA[answersIndexProfileA]
    let profileBQuestion = sortedAnswersProfileB[answersIndexProfileB]
    // console.log("SMOKE CHECKE 2")
    if (profileAQuestion.questionId === profileBQuestion.questionId) {
      possibleImportancePointsProfileA += config.importanceLevelPoints[profileAQuestion.importance]
      possibleImportancePointsProfileB += config.importanceLevelPoints[profileBQuestion.importance]
      s += 1
      // console.log("SMOKE CHECKE 3")
      if (isAcceptableAnswer(profileAQuestion.acceptableAnswers, profileBQuestion.answer)) {
        // console.log("SMOKE CHECKE 4")
        earnedImportancePointsProfileA += config.importanceLevelPoints[profileAQuestion.importance]
      }
      // console.log('earnedImportancePointsProfileA: ' + earnedImportancePointsProfileA)
      if (isAcceptableAnswer(profileBQuestion.acceptableAnswers, profileAQuestion.answer)) {
        // console.log("SMOKE CHECKE 5")
        earnedImportancePointsProfileB += config.importanceLevelPoints[profileBQuestion.importance]
      }
      // console.log('earnedImportancePointsProfileB: ' + earnedImportancePointsProfileB)
      answersIndexProfileA += 1
      answersIndexProfileB += 1
    } else if (profileAQuestion.questionId < profileBQuestion.questionId) {
      answersIndexProfileA += 1
    } else {
      answersIndexProfileB += 1
    }
  }
  // console.log("SMOKE CHECKE 6")
  console.log('earnedImportancePointsProfileA: ' + earnedImportancePointsProfileA)
  console.log('earnedImportancePointsProfileB: ' + earnedImportancePointsProfileB)
  console.log('value of s: ' + s)
  return calculateTrueMatch(s,
                            calculateSatisfaction(earnedImportancePointsProfileA, possibleImportancePointsProfileA),
                            calculateSatisfaction(earnedImportancePointsProfileB, possibleImportancePointsProfileB))
}

const isAcceptableAnswer = (acceptableAnswersArr, answerId) => {
  return acceptableAnswersArr.includes(answerId) && acceptableAnswersArr.length < config.maximumAcceptableAnswers
}

const calculateSatisfaction = (earnedImportancePoints, possibleImportancePoints) => {
  return earnedImportancePoints / possibleImportancePoints
}

const calculateTrueMatch = (s, profileAMatchSatisfaction, profileBMatchSatisfaction) => {
  let marginError = 1 / s
  let trueMatch = Math.sqrt(profileAMatchSatisfaction * profileBMatchSatisfaction) - marginError
  console.log('SMOKE TEST 7')
  console.log('trueMatch: ' + trueMatch)
  if (trueMatch < 0) { trueMatch = 0 }

  // Just making sure that trueMatch has maximum of two digits after the decimal point for nicer reading
  return trueMatch.toFixed(2)
}

// const answersCompareFn = (answerA, answerB) => answerA.questionId < answerB.questionId

export { calculateMatchingPercentageBetweenProfiles }
