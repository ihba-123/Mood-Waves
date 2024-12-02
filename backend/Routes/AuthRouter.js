import express from 'express'
import { loginValidation, signupValidation } from '../Middlewares/AuthValidation.js';
import { login, signup } from '../Controllers/AuthController.js';
const router = express.Router();


router.post('/login', loginValidation,login)
router.post('/signup', signupValidation,signup)



router.get("/login/failed",(req,res) => {
  res.status(401).json({
    message:"Login failed",
    success:false
  });
});
//login success 
router.get("/login/success",(req,res) => {
if (req.user) {
  res.status(200).json({error : false , message: "Login successfully", user : req.user});
} else {
  res.status(403).json({error : true , message: "Not Authorized"});
}
});



export default router 