import { read, write } from "../utils/fs.utils.js";
import { ErrorHandler } from "../exceptions/ErrorHandler.js";

export const getBooks = async (req, res, next) => {
  const allBooks = await read("books.model.json").catch((err) =>
    next(new ErrorHandler(err, 500))
  );
  if (allBooks) res.render("books.ejs", { allBooks });
};

export const createBook = async (req, res, next) => {
   const {title, price, author} = req.filteredValue

   const allBooks = await read("books.model.json").catch((err) =>
    next(new ErrorHandler(err, 500))
  );
  if (allBooks) res.render("books.ejs", { allBooks });
  allBooks.push({id:allBooks.at(-1)?.id + 1 || 1, title, price, author})
 

  const newBook = await write("books.model.json", allBooks).catch(err=> next(new ErrorHandler(err,500)))
   if(newBook) return res.redirect("/books/get")

   next()
}