import fs from "fs"
import path from "path"

export const read = dir => {
   return new Promise((res, rej) => {
      fs.readFile(path.join(process.cwd(), "src", "model", dir), (err, data) => {
         if(!fs.existsSync(path.join(process.cwd(), "src", "model", dir))) {
            return rej("Path not found" + dir)
         }

         if(err) return rej(err)
         res(JSON.parse(data))
      })
   })
}

export const write = (dir, data) => {
   return new Promise((res, rej) => {
      if(!fs.existsSync(path.join(process.cwd(), "src", "model", dir))) {
         return rej("Path not found" + dir)
      }
      fs.writeFile(
         path.join(process.cwd(), "src", "model", dir),
         JSON.stringify(data, null, 4),
         (err) => {
            if(err) rej(err);
            res(data)
         }
      )
   })
}