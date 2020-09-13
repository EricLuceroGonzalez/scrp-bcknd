const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  webCode: {
    type: String,
    required: false,
  },
  enroll: [{type: mongoose.Types.ObjectId, ref: "ScrpData"}],
  updateDate: {
    type: Date,
    required: false,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Institution = mongoose.model("Institution", InstitutionSchema);
