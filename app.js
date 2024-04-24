
import fetch from 'node-fetch';
import express from "express"
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set("trust proxy", true)

app.get("/", async (req, res) => {

    const xRealIP = req.ip
    const data = await fetch((`https://ipapi.co/${xRealIP}/json/`))
    res.status(200).json(data)



})





const port = 3000;

const server = app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
