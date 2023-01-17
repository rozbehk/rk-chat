const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


module.exports = {
  register,
  login,
  getAllUsers,
  update,
  uploadImage,
  
};

async function register(req, res) {
console.log(req.body)
  try {
    if(await User.findOne({ email: req.body.email })){
      res.status(400).json('Email Addres Already Taken')
      return
    }
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      parseInt(process.env.SALT_ROUNDS)
    );
    const user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      admin: false
    });
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function getAllUsers(req, res) {
  try {
    let user = await User.find({})
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
}


async function login(req, res) {
  console.log(req.body)
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!(await User.findOne({ email: req.body.email }))){
      res.status(400).json('Email not exist');
      return
    } 
    
    if (await User.findOne({ email: req.body.email }) && !(await bcrypt.compare(req.body.password, user.password))){
      res.status(400).json('Bad Password');
      return
    } 
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    res.status(200).json(token);
  } catch(err) {
    res.status(400).json(err);
  }
}


async function update(req, res) {
  try {
    let user = await User.findById(req.body._id)

    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.email = req.body.email
    const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
    user.save()
    res.status(200).json({ token, message: 'Details Updated' });

  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }

}

async function uploadImage(req, res) {
  console.log(req)
}

