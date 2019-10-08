const router = require('express').Router();
let Draft = require('../models/draft.model');

router.route('/').get((req, res) => {
  Draft.find()
    .then(drafts => res.json(drafts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const user_id = Number(req.body.user_id);
  const draft_settings = req.body.draft_settings;
  const teams = req.body.teams;

  const newDraft = new Draft({
    title,
    user_id,
    draft_settings,
    teams
  });

  newDraft.save()
  .then(() => res.json('Draft added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;