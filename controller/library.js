const Library=require("../models/library")

module.exports.index=async(req,res)=>{
    const allBooks=  await Library.find({})
      res.render("./library/index.ejs",{allBooks});
}
module.exports.renderNewForm=(req,res)=>{
    // console.log(req.user);
    res.render("library/new.ejs"); 
}
module.exports.showBook=async(req,res)=>{
    let {id}=req.params;
  const book=await Library.findById(id).populate("owner");
  if(!book){
    req.flash("error","Book might be not exist!");
    res.redirect("/library")
  }
  // console.log(book);
    res.render("library/show.ejs",{book});
}
module.exports.createBook=async(req,res,next)=>{
    let url=req.file.path;
    let filename=req.file.filename;
    // console.log(url,"..",filename);
    const newBook=new Library(req.body.library);
    //// console.log(req.user);
    newBook.owner=req.user._id;
    newBook.image={url,filename};
    await newBook.save();
    req.flash("success","New Book Added succesfully! ");
    res.redirect("/library");   
}
module.exports.renderEditForm=async(req,res)=>{
    let {id}=req.params;
    const book=await Library.findById(id);
    if(!book){
        req.flash("error","Book might be not exist!");
        res.redirect("/library")
      }
    req.flash("success","Edited succesfully! ");
    res.render("library/edit.ejs",{book});
}
module.exports.updateBook=async (req,res)=>{
    let {id}=req.params;
    let book= await Library.findByIdAndUpdate(id,{...req.body.library});
    if(typeof req.file!== "undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    book.image={url,filename};
    await book.save();
    }
    req.flash("success","Book Detail Updated succesfully! ");
    res.redirect(`/library/${id}`);
 }
 module.exports.destroyBook=async(req,res)=>{
    let {id}=req.params;
    let deletedBook=await Library.findByIdAndDelete(id);
    // console.log(deletedBook);
    req.flash("success","Book removed succesfully! ");
    res.redirect("/library")
}
module.exports.about=async(req,res)=>{
  res.render("/library/about.ejs");
}