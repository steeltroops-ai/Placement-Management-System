const express=require("express");

const path = require("path")
const app= express();
const hbs = require("hbs");
require("./db/conn");

const port = process.env.PORT || 3000;


app.set("view engine", "hbs");
const template_path = path.join(__dirname,"../templates/views");
const static_path = path.join(__dirname,"../public");
const partials_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_path))
app.set("views", template_path)
hbs.registerPartials(partials_path)




app.get("/",(req, res)=>{
    res.render("index")
});
app.get("/",(req, res)=>{
    res.render("dashboard")
});
app.get("/",(req, res)=>{
    res.render("interviewprep")
});
app.get("/",(req, res)=>{
    res.render("joblisting")
});
app.get("/",(req, res)=>{
    res.render("jobrecources")
});
app.get("/",(req, res)=>{
    res.render("mentalsupport")
});
app.get("/",(req, res)=>{
    res.render("notification")
});
app.get("/",(req, res)=>{
    res.render("profile")
});
app.get("/",(req, res)=>{
    res.render("signup")
});

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})