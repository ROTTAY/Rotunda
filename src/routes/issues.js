// Router
const express = require('express');
const router = express.Router();


var { getIssues, errors } = require('../controllers/issues')


router.get('/issues', async (req, res) => {

  errors.clear();

  let issues = await getIssues();

  res.render('issues/all-issues', { issues, errors });

});


module.exports = router;
