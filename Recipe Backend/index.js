const express = require("express");
const movieDetails = require("./Movie/moviedb");
const path = require('path');
const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'/build')));


//CORS policy

app.use((req,res, next) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET, POST , PUT , DELETE");
    res.setHeader("Access-Control-Allow-Headers","X-Requested-with,content-type");
    res.setHeader("Access-Control-Allow-Credentials",true);
    next();
})

app.get('/api',(req,res)=>{
   res.send("Hello Subin");
});

//Creating the Data 

app.post('/api/create', (req,res)=>{
    try {
    let recipe =  new recipeDetails(req.body);    //passing the data to database
     recipe.save(); // saving the data
     res.send("Data Added");
    }
    catch(error){
    res.status(500).send(error);
    }
});

//Reading the Data

app.get('/api/read', async (req,res)=>{
   try{
    let recipe = await recipeDetails.find();
    res.json(recipe);
   }
   catch(error){
    res.status(500).send(error);
   }
});

//Updating the Data

app.post('/api/update', async (req,res) =>{
   try{
    let recipe = await recipeDetails.findByIdAndUpdate(req.body._id, req.body);
    res.send("Data Updated");
   }
   catch(error){
   res.status(500).send(error);
   }
});

//Deleting the Data

app.post('/api/delete', async (req,res) =>{
    try{
        let recipe = await recipeDetails.findByIdAndDelete(req.body._id , req.body);
        res.send("Data Deleted");
    }
    catch(error){
        res.status(500).send(error);
    }
});

//Searching the data

app.post('/api/search', async (req,res)=>{
    try 
    {
        let recipe = await recipeDetails.find({"recipeName" : {$regex: '.*' + req.body.recipeName + '.*'}});
        res.json(movie);
    }
    catch(error)
    {
        res.status(500).send(error);
    }
});

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname,'/build/index.html'));
})

app.listen(7000,(req,res) =>{
    console.log("LIstening to Port Number 7000");
});