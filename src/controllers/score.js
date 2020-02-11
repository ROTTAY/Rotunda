// Models
const Score = require('../models/score');

// Helpers
const { getNumWorkDays } = require('../helpers/utils');

var errors = new Set();

/*
 * Return :  Score { value : Integer ;  overdue : String; }
 */
var getScore = async function (issue) {

  let countLabels = issue.labels.length;

  // ERROR 
  if (countLabels == 0) {
    errors.add({ text: 'Error : ' + issue.title + ' has no labels assigned ' });

    return new Score(0, true);

  }

  // ERROR 
  if (countLabels > 1) {
    errors.add({ text: 'Error : ' + issue.title + ' has more than one label assigned ' });

    return score = new Score(0, true);

  }

  // OK 

  let daysOpened = await getNumWorkDays(issue.created_at);

  var labelValue = await getLabelValue(issue.labels[0].name);

  let scoresValue = labelValue * daysOpened;

  score = new Score(scoresValue, (scoresValue > 500) ? false : true);

  // console.log('Issue Title :'+ issue.title + 'Label Value :' + labelValue , '  Days Opened : ' + daysOpened + '  Score  (Label Value * Days Opened):  ' + scoresValue)

  return score;

}


function getLabelValue(label) {

  switch (label) {
    case 'Critical Priority':
      return 1000;
    case 'Very High Priority':
      return 500;
    case 'High Priority':
      return 50;
    case 'Mid Priority':
      return 15;
    case 'Low Priority':
      return 7;
    default:
      return 0;
  }

}

module.exports = { getScore, errors };