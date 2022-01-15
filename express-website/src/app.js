require('./conn/db.js')
const User=require("./model/usermsg.js")
const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const hbs=require('hbs');

// nodemon app.js -e  js,hbs  to make changes inall files 
console.log(path.join(__dirname))
const template_path=path.join(__dirname,'../templates/views');
const partials_path=path.join(__dirname,'../templates/partials');
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'hbs');
app.set('views', template_path);

hbs.registerPartials(partials_path)
// console.log(static_path)





// routing 
app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/contact",async(req,res)=>{
    try {
        // res.send(req.body)u
        const userData=new User(req.body)
        await userData.save();
        res.status(201).render('index');
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// app.get("/services",(req,res)=>{
//     res.render("services.hbs");
// })
// app.get("/gallery",(req,res)=>{
//     res.render("gallery");
// })
// app.get("/contact",(req,res)=>{
//     res.render("contact");
// })

// app.get("*",(req,res)=>{
//     res.render("404error",{
    //         errorMsg:"Opps page not found"
//     });
// })
const static_path=path.join(__dirname,'../public');
app.use(express.static(static_path)) 

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})