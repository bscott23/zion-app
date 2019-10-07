const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const draftSchema = new Schema(
  {
    title: { type: String, required: false },
    user_id: { type: Number, required: true },
    draft_settings: {
      number_of_teams: { type: Number, required: true },
      categories: [{ category: String }]
    },
    teams: [
      {
        team_name: { type: String, required: true },
        roster: [{ player_nba_id: { type: Number, required: false } }]
      }
    ]
  },
  {
    timestamps: true
  }
);

const Draft = mongoose.model("Draft", draftSchema);
module.exports = Draft;
