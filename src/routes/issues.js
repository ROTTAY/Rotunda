// Router
const express = require('express');
const router = express.Router();

// Controllers
var { getIssues, errors } = require('../controllers/issues')
var getUsers = require('../controllers/users')


router.get('/issues', async (req, res) => {

  errors.clear();

  let issues = await getIssues();
  let users = await getUsers();
  //console.log(users);
  res.render('issues/all-issues', { issues, users, errors });

});
 

router.get('/issues/:user', async (req, res) => {

  errors.clear();

  let issues_ = await getIssues();
  let users = await getUsers();

  let issues = issues_.filter(i => i.opener === req.params.user);
  res.render('issues/all-issues', { issuess, users, errors });

});


module.exports = router;
