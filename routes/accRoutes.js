const express = require("express");
const router = express.Router();

const accountController = require("../controller/accountOpen");

router.post("/account-open", accountController.postAccount);
router.get("/get-users", accountController.getUserData);
router.get("/get-user/:mobileNo", accountController.getUserbyId);
