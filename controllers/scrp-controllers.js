const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const HttpError = require("../models/httpError-modal");
const ScrpData = require("../models/scrapData-model");
const Institution = require("../models/institution-model");

const postInsti = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new HttpError("Invalid inputs, please check your data", 422);
    return next(error);
  }

  const { name, webCode } = req.body;

  let existingInstitution;
  try {
    existingInstitution = await Institution.findOne({ webCode: webCode });
  } catch (err) {
    const error = new HttpError("Cant create. Already exists.", 500);
    return next(error);
  }
  if (existingInstitution) {
    const error = new HttpError("Cant create. Already exists.", 500);
    return next(error);
  }
  const institution = new Institution({
    name: name,
    webCode: webCode,
    updateDate: Date.now(),
  });
  console.log(institution);

  try {
    await institution.save();
  } catch (err) {
    const error = new HttpError("Error on saving inst", 422);
    return next(error);
  }
  res.status(200).json({ message: "Cambios guardados!" });
};

const postData = async (req, res, next) => {
  console.log("\n\n HGerere!!");

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    const error = new HttpError("Invalid inputs, please check your data", 422);
    return next(error);
  }
  console.log(req.body);

  // const {
  //   firstName,
  //   lastName,
  //   identification,
  //   position,
  //   monthSalary,
  //   expenses,
  //   state,
  //   institution,
  //   webCode,
  //   initDate,
  //   updateDate,
  // } = req.body;

  // console.log(`code: ${webCode}`);

  // let inst;
  // try {
  //   inst = await Institution.findOne({ webCode: webCode });
  // } catch (err) {
  //   const error = new HttpError("The user or test is not registered.", 500);
  //   return next(error);
  // }

  // if (!inst) {
  //   const error = new HttpError("Could not find user for provided inst.", 404);
  //   return next(error);
  // }

  // const scrpData = await new ScrpData({
  //   name: {
  //     firstName: firstName,
  //     lastName: lastName,
  //   },
  //   identification: identification,
  //   position: position,
  //   expenses: expenses,
  //   state: state,
  //   institution: institution,
  //   initDate: initDate,
  //   updateDate: updateDate,
  //   monthSalary: monthSalary,
  // });
  // console.log(scrpData);
  // console.log(inst);

  // // Push to the institution:
  // try {
  //   await Institution.findOneAndUpdate(
  //     { webCode: webCode },
  //     { $push: { enroll: scrpData._id } }
  //   );
  // } catch (err) {
  //   const error = new HttpError("Error pushing to institution enroll", 422);
  //   return next(error);
  // }
  try {
    await ScrpData.insertMany(req.body)
      // .then(function () {
      //   console.log("Data inserted"); // Success
      // })
      // .catch(function (error) {
      //   console.log(error); // Failure
      // });
  } catch (err) {
    console.log(`error: ${err}`);
    const error = new HttpError(
      "Hemos tenido un error creando el test en el curso. Intenta de nuevo",
      422
    );
    return next(error);
  }
  res.status(200).json({ message: "Its ok!" });
};

exports.postData = postData;
exports.postInsti = postInsti;
