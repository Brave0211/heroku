import { ErrorHandler } from "../exceptions/ErrorHandler.js";

export default (schema) => {
   return (req, res, next) => {
      const {error, value} = schema.validate(req.body)

      if(error) {
         return next(new ErrorHandler(error.message, 400))
      }

      req.filteredValue = value

      next()
   }
}