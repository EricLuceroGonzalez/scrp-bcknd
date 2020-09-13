const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scrpDataSchema = new Schema({
    name: {
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      identification: {
        type: String,
        required: false,
      },
      position: {
        type: String,
        required: false,
      },
      monthSalary: {
        type: String,
        required: false,
      },
      expenses: {
        type: String,
        required: false,
      },
      state: {
        type: String,
        required: false,
      },
      initDate: {
        type: String,
        required: false,
      },
      updateDate: {
        type: String,
        required: false,
      },
      institution: {
        type: String,
        required: false,
      },
      creationDate: {
        type: Date,
        default: Date.now,
      },
})

module.exports = ScrpData = mongoose.model("ScrpData", scrpDataSchema)