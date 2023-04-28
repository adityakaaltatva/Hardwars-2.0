import express  from "express";
import mainRoute from "./routers/mainRoute.js";

const app = express()
const PORT = process.env.PORT || 4444


app.set('view engine', 'ejs');
app.use(express.static("assets"))

app.use(express.urlencoded({extended:true}))
app.use('/',mainRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
})


