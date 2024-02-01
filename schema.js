const Joi=require('joi');
module.exports.librarySchema=Joi.object({
    book: Joi.object({
        title:Joi.string().required(),
        author:Joi.string().required(),
        category:Joi.string().required(),
        description:Joi.string().required(),
        image:Joi.string().allow("",null)
    }).required()
});