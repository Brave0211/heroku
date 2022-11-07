import path from "path"
import express from "express";
import ejs from "ejs"
import errorhandler from "./middleware/errorhandler.js"
import { createBook, getBooks } from "./controller/books.controller.js";
import validate from "./middleware/validate.js";
import { BookPostValidation } from "./validation/validation.js";
const app = express();

app.set("view engine", "ejs")
app.set("views", path.join(process.cwd(), "src", "view"))
app.use(express.urlencoded())

app.get("/books/get", getBooks);
app.post("/books/create",validate(BookPostValidation), createBook)

app.use(errorhandler)

app.all("/*", (req, res, next) => {
   res.status(404).json({
      message:req.url + " is not found"
   })
})

app.listen(9000, console.log(9000));
