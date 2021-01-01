const express = require('express');

const app = express();

// the use method allows using a middleware
// something through which the request object gets passed through
// before we actually do something with it
// express.urlencoded - uses the body of the request and 
// add convenient properties to the body object, to access values for handling
app.use(express.urlencoded({extended:false}));

// before we start listening, we need to setup some routes.

// get takes two arguments first is the route, the second is a function that
// accepts two arguments: a request object and a response object
// / - home page
app.get('/', (req, res)=>{
    res.send(`
    <h1>What color is the sky on a clear day?</h1>
    <form action="/result" method="POST">
        <input type="text" name="color">
        <button>Submit Answer</button>
    </form>
    `);
});

app.get('/about', (req, res)=>{
    res.send("Thanks for learning more about us");
});

// form submit handling
// enable 
app.post("/result", (req, res) => {
    res.send("Thank you for submitting the form");
});

app.get("/result", (req, res) => {
    res.send("Why are you visiting this url?");
});

app.listen(3000);