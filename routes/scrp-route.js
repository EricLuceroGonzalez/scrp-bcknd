const express = require("express");

const scrpCntrl = require("../controllers/scrp-controllers");
const router = express.Router();

router.post("/scrpData", scrpCntrl.postData);
router.post("/postInst", scrpCntrl.postInsti);

module.exports = router;
