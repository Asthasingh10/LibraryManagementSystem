const express=require('express');
const router=express.Router();
const User=require("../models/user");
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');
const userController= require('../controller/user');

router.route("/signup").get((req,res)=>{
    res.render("users/signup.ejs");
}).post(wrapAsync(userController.signup));

router.route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl,
    passport.authenticate("local",{
        failureRedirect:"/login"
        ,failureFlash:true
    }),userController.login
)

router.get("/logout",userController.logOut);

module.exports=router;