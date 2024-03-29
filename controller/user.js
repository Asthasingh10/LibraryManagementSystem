const User=require("../models/user")

module.exports.signup= async(req,res)=>{
    try{
    let {username,email,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser=await User.register(newUser,password);
    // console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to the library");
        res.redirect("/library");
    })
    }catch(err){
        req.flash("error",err.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
}
module.exports.login=async(req,res)=>{
    req.flash("success","welcome back to library");
    let redirectUrl=res.locals.redirectUrl || "/library";
    res.redirect(redirectUrl);
}

module.exports.logOut=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","You are Logged Out ! ");
        res.redirect("/library");
    })
}