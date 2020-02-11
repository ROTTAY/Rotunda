const express = require('express');
const router = express.Router();
const Issue = require('../models/issue');

var github = require('octonode');

router.get('/', (req, res) => {
  res.render('index');
});

const client = github.client('f01dd7e2aaea10130cc0cd658dd8e5ccb89dbeb6')

const repo = client.repo('ROTTAY/Rotunda')

//const issue = new Issue('pipi   ');
//console.log(issue.title + issue.makeSound());

// const issue = new Issue();
// console.log( issue.info());




//console.log(repo);
//getContributors();
//getIssues();
//getLabels();
//getInfo();
let x = score();



//console.log('asdasdasdasda' +x);



async function getContributors(userID = '') {
  // 50145471 davila23
  let contributors = await repo.contributorsAsync();
  console.log(contributors[0]);
  return contributors;
}

client.me()

async function getIssues() {

  let issues = await repo.issuesAsync({ per_page: 100, state: 'open', sort: 'created', filter: 'assigned' })

  let days = getNumWorkDays(issues[0].created_at);
  let asda =issues[0];

  //console.log(asda);
  asda.forEach(element =>generateData(element));


  //let issuess = asda.map( new Issue())
  // const issue = await new Issue(issues[0].title,issues[0].number,issues[0].relativeDateCreated,issues[0].opener,
  //   issues[0].label,issues[0].score);
    //console.log(asda);

 
  //console.log(days);
  return issues[0];
}

function score(label) {

  
  console.log(label);
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
      //alert("I don't know such values");
      return 0;
  }

}

const issss = []
async function generateData(key){

 

  let daysOpened = await getNumWorkDays(key.created_at);
console.log('DDDDDDDDDDDDDDDDDDDDDDDDDDD     ' +daysOpened);
  let scores = await score(key.labels[0].name) * daysOpened;

  const issue = await new Issue(key.title,key.number,key.created_at,key.assignee.login,
    key.labels[0], scores,key.html_url);

    issss.push(issue)
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

    console.log(issss);

}


async function getLabels() {

  let labels = await repo.labelsAsync();

  // let booksILike =  new Issue("Under The Dome", "Steven King");


  //console.log(mycar);
  return labels[0];
}

function getNumWorkDays(date) {
  var numWorkDays = 0;
  var currentDate = new Date(date);
  //var endDate = Date.now() +1;


  var date = new Date();

// add a day
date.setDate(date.getDate());

  while (currentDate <= date) {

    // Skips Sunday and Saturday
    if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
      numWorkDays++;
    }
    currentDate = currentDate.addDays(1);
  }
  

  return (numWorkDays > 0) ? numWorkDays : 1; 
}


Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};




async function getInfo(userID = '') {

  let issues = await getIssues();

  // var arr1 = issues.filter(it => it.assignees );
  // console.log(arr1);

  //var arr1 = issues[0].map(it => it.assignees );

  issues.forEach(n => {

    let = n.assignees;

  })

  //.filter(evenNumberFilterFn)

  //const asigne = [...new Set(issues[0].map(it => it.assignees))];


  // let json = JSON.stringify(issues[0]); // json gets the string "2016-08-26 etc..."
  // let newfoo = JSON.parse(json); 

  // const { assignees } = issues[0];
  //console.log(issues[0].assignees);
  // console.log(  issues[0]);


  return client
}


router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
