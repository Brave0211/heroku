import http from "http" 

export default (err, _, res, __) => {
   if(process.env.NODE.ENV == "development") {
      return res.render("error.ejs", {status: err.status, message: err.message})
   }
   if(process.env.NODE.ENV == "production") {
      return res.render("error.ejs", {status: err.status, message: err.message})
   }
}