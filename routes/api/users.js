const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');


router.post('/register', usersCtrl.register);
router.post('/login' , usersCtrl.login)
router.put('/update' , usersCtrl.update)
router.post('/uploadimage', usersCtrl.uploadImage)
router.get('/getall', usersCtrl.getAllUsers)


module.exports = router;