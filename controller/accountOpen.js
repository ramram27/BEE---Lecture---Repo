const AccOpenModel = require("../models/AccOpenModel");

const postAccount = async (req, res) => {
  try {
    const accountData = new AccOpenModel(req.body);
    const userData = await accountData.save();

    res.status(201).json({ message: "account created", user: userData });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "account is not created" });
  }

  const getUserData = async (req, res) => {
    try {
      const userData = await AccOpenModel.find();
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "error fetching user data" });
    }
  };

  const getUserbyId = async (req, res) => {
    try {
      const userData = await AccOpenModel.findById({
        mobileNo: req.params.mobileNo,
      });
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Error fetching user data" });
    }
  };
};
module.exports = { postAccount, getUserData, getUserbyId };
