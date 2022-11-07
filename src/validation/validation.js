import Joi from "joi";

export const BookPostValidation = Joi.object().keys({
   title: Joi.string().required().max(20),
   price: Joi.number().required().max(1000000),
   author: Joi.string().required().max(20)
})