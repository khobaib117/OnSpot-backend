const express = require("express");

const router = express.Router();
const { adminSignup, adminLogin, getAllUsers, deleteUser, updateUserAccess, countUsers, addFeedback, getFeedback } = require("../controllers/admin-controller");

router.post('/adminsignup', adminSignup)
router.post('/adminlogin', adminLogin)
router.get('/getallusers', getAllUsers)
router.post('/deleteuser', deleteUser)
router.patch('/updateaccess', updateUserAccess)
router.get('/getuseraccess', countUsers)
router.post('/addfeedback', addFeedback)
router.get('/getfeedback', getFeedback)


module.exports = router;
