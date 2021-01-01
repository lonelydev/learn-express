const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');

// the use method allows using a middleware
// something through which the request object gets passed through
// before we actually do something with it
// express.urlencoded - uses the body of the request and 
// add convenient properties to the body object, to access values for handling
app.use(express.urlencoded({extended:false}));

// our custom middleware function
// the last parameter is a way to tell express that 
// it is time to call the next function in the pipeline
// it is not always essential to call next. if your middleware is the 
// logic to end the pipeline, then you can optionally call next
function getWeather(req, res, next){
    req.visitorWeather = false;
    next();
}

// view engine is responsible for rendering views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// let us serve some static files from a directory!

app.use(express.static(path.join(__dirname, "public")));

// before we start listening, we need to setup some routes.

// get takes two arguments first is the route, the second is a function that
// accepts two arguments: a request object and a response object
// / - home page
app.get('/', getWeather, (req, res)=>{
    // pass the req.visitorWeather property to the home view
    // we can also pass additional objects or arrays or values to the view as
    // additional parameters. in this case, we are passing in a pets array, which is 
    // an array of objects that have name and species property each. 
    res.render("home", {
        isRaining: req.visitorWeather,
        pets:[
            {name: "Max", species: "dog",}, 
            {name:"Spark", species: "dog"}
        ]
    });
});

app.get('/about', (req, res)=>{
    res.send("Thanks for learning more about us");
});

// form submit handling
// use middleware - express.urlencoded({extended:false}) 
app.post("/result", (req, res) => {
    if (req.body.color.trim().toLowerCase() === "blue"){
        res.send("Congrats! That is correct!");
    }else{
        res.send("Sorry! Incorrect answer, please try again.");
    }
});

app.get("/result", (req, res) => {
    res.send("Why are you visiting this url?");
});

app.get('/api/pets', (req,res)=>{
    res.json([
        {name: "Max", species: "dog",}, 
        {name:"Spark", species: "dog"}
    ]);
})

app.listen(3000);