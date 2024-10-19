// App Requires
const config = require('../../config')
const sort = require('../../utils/sort/sort')

calculateMatchingPercentageBetweenProfiles = (profileA, profileB) => {
  if (!profileA || !profileB || profileA.id === profileB.id) {
    return
  }

  if (!profileA.answers || !profileA.answers.length) {
    return
  }

  if (!profileB.answers || !profileB.answers.length) {
    return
  }

  let sortedAnswersProfileA = sort.mergeSort(profileA.answers, answersCompareFn)
  let sortedAnswersProfileB = sort.mergeSort(profileB.answers, answersCompareFn)
  let answersIndexProfileA = 0
  let answersIndexProfileB = 0

  let s = 0
  let possibleImportancePointsProfileA = 0
  let earnedImportancePointsProfileA = 0
  let possibleImportancePointsProfileB = 0
  let earnedImportancePointsProfileB = 0

  while (answersIndexProfileA < sortedAnswersProfileA.length - 1 && answersIndexProfileB < sortedAnswersProfileB.length - 1) {
    let profileAQuestion = sortedAnswersProfileA[answersIndexProfileA]
    let profileBQuestion = sortedAnswersProfileB[answersIndexProfileB]

    if (profileAQuestion.questionId === profileBQuestion.questionId) {
      possibleImportancePointsProfileA += config.importanceLevelPoints[profileAQuestion.importance]
      possibleImportancePointsProfileB += config.importanceLevelPoints[profileBQuestion.importance]
      s += 1

      if (isAcceptableAnswer(profileAQuestion.acceptableAnswers, profileBQuestion.answer)) {
        earnedImportancePointsProfileA += config.importanceLevelPoints[profileAQuestion.importance]
      }

      if (isAcceptableAnswer(profileBQuestion.acceptableAnswers, profileAQuestion.answer)) {
        earnedImportancePointsProfileB += config.importanceLevelPoints[profileBQuestion.importance]
      }

      answersIndexProfileA += 1
      answersIndexProfileB += 1
    } else if (profileAQuestion.questionId < profileBQuestion.questionId) {
      answersIndexProfileA += 1
    } else {
      answersIndexProfileB += 1
    }
  }

  return calculateTrueMatch(s,
                            calculateSatisfaction(earnedImportancePointsProfileA, possibleImportancePointsProfileA),
                            calculateSatisfaction(earnedImportancePointsProfileB, possibleImportancePointsProfileB))
}

isAcceptableAnswer = (acceptableAnswersArr, answerId) => {
  return acceptableAnswersArr.includes(answerId) && acceptableAnswersArr.length < config.maximumAcceptableAnswers
}

calculateSatisfaction = (earnedImportancePoints, possibleImportancePoints) => {
  return earnedImportancePoints / possibleImportancePoints
}

calculateTrueMatch = (s, profileAMatchSatisfaction, profileBMatchSatisfaction) => {
  let marginError = 1 / s
  let trueMatch = Math.sqrt(profileAMatchSatisfaction * profileBMatchSatisfaction) - marginError

  if (trueMatch < 0) { trueMatch = 0 }

  // Just making sure that trueMatch has maximum of two digits after the decimal point for nicer reading
  return trueMatch.toFixed(2)
}

answersCompareFn = (answerA, answerB) => answerA.questionId < answerB.questionId

module.exports = { calculateMatchingPercentageBetweenProfiles }
