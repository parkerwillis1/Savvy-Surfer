const express = require('express');
const router = express.Router();
const { scrapeCompetitions, scrapeCleanUps, scrapeWorkshops } = require('../controllers/scrapeController');

router.get('/competitions', scrapeCompetitions);
router.get('/cleanups', scrapeCleanUps);
router.get('/workshops', scrapeWorkshops);

module.exports = router;
