const express = require('express');
var path=require('path');
var cors=require('cors')
var app = express();
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
var routes = require('./router/router'); //importing route
routes(app);  // register route
app.get("",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"))
})
app.listen(3000,(req,res)=>{
    console.log("Server is listening on port 3000");
});
