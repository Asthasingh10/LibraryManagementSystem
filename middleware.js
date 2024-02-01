const Library=require("./models/library")
module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
      req.session.redirectUrl=req.originalUrl;
    req.flash("error","You have to be logged in first");
    return res.redirect("/login")
  }
  next();
};

module.exports.saveRedirectUrl=(req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner= async(req,res,next)=>{
  let {id}=req.params;
  let library=await Library.findById(id);
  if(!library.owner._id.equals(res.locals.currUser._id)){
      req.flash("error","You are not the owner of this Book");
      return res.redirect(`/library/${id}`);
  }
  next();
}