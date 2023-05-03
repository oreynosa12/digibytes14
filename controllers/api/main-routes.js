const router = require('express').Router();

router.get('/', async (req, res) => {
  // Sends the rendered Handlebars.js template back as the response
  res.render('main');
});

module.exports = router;
