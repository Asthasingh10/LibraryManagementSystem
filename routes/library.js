const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync")
const { isLoggedIn, isOwner } = require("../middleware");
const LibraryController=require("../controller/library")
const multer  = require('multer')
const {storage}=require("../cloudConfig");
const upload = multer({ storage })

router.route("/")
    .get(wrapAsync(LibraryController.index))
    .post(isLoggedIn,upload.single('library[image]'),
     wrapAsync(LibraryController.createBook))

// add new book
router.get("/new",isLoggedIn,LibraryController.renderNewForm);


router.route("/:id")
    .get(wrapAsync(LibraryController.showBook))
    .put(isLoggedIn,isOwner,upload.single('library[image]'),wrapAsync(LibraryController.updateBook))
    .delete(isLoggedIn,isOwner,wrapAsync(LibraryController.destroyBook))


// edit bookname
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(LibraryController.renderEditForm))


module.exports=router;