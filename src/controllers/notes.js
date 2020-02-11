// const express = require('express');
// const router = express.Router();
// var github = require('octonode');
// const Issue = require('../models/issue');
// const Score = require('../models/score');

// // Models
// const Note = require('../models/Note');

// // Helpers
// const { getNumWorkDays } = require('../helpers/utils');


// // New Note
// router.get('/notes/add',  (req, res) => {
//   res.render('notes/new-note');
// });


// const client = github.client('f01dd7e2aaea10130cc0cd658dd8e5ccb89dbeb6')

// const repo = client.repo('ROTTAY/Rotunda')
// const issss = new Set();

// // Get All Notes
// router.get('/notes', async (req, res) => {
//   // const notes = await Note.find({user: req.user.id}).sort({date: 'desc'}).lean();
//   // res.render('notes/all-notes', { notes });

//   const x = await repo.contributorsAsync();
//   const contributors = x[0];

//   await getIssues();

//   let issues = issss;

//   console.log(issues);
//   res.render('notes/all-notes', { contributors, issues });
// });



// async function getIssues(userID = '') {
//   issss.clear();
//   let issues = await repo.issuesAsync({ per_page: 100, state: 'open', sort: 'created', filter: 'assigned' })

//   let days = getNumWorkDays(issues[0].created_at);
//   let asda = issues[0];

//   await issues[0].forEach(element => generateData(element));


// }







// async function generateData(key) {
//   console.log('daysOpened');

//   let daysOpened = await getNumWorkDays(key.created_at);

//   console.log(daysOpened);
//   // let daysOpened = await getNumWorkDays(key.created_at);

//   let scoresValue = await score(key.labels[0].name) * daysOpened;

//   console.log('asdasdasdasdasdas' + key.labels.length);



//   let scorez = await score_(key);

//   const issue = await new Issue(key.title, key.id, daysOpened, key.assignee.login,
//     key.labels, scorez, key.html_url);

//   issss.add(issue)
//   //console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

//   console.log(issss);


// }

// ///////////////SCORE DATES///////////////////////////////////////////////////////////////////////


// async function score_(key) {

//   let daysOpened = await getNumWorkDays(key.created_at);

//   console.log(daysOpened);

//   let scoresValue = await score(key.labels[0].name) * daysOpened;

// // si tiene > 1 label no se puede calcular el Score final. lanza error
//   if (key.labels.length == 1) {

//     var scorez = await new Score(scoresValue, (scoresValue > 500) ? false : true);

//   } else {

//     var scorez = await new Score('NaN', true);

//   }

//   return scorez;
// }


// function score(label) {


//   //console.log(label);
//   switch (label) {
//     case 'Critical Priority':
//       return 1000;
//     case 'Very High Priority':
//       return 500;
//     case 'High Priority':
//       return 50;
//     case 'Mid Priority':
//       return 15;
//     case 'Low Priority':
//       return 7;
//     default:
//       //alert("I don't know such values");
//       return 0;
//   }

// }

// module.exports = router;
