# Express tutorial

Developing an application on Node? You have already come across express then. What is it?
Following along - https://www.youtube.com/watch?v=z7ikpQCWbtQ

## WebServer

You don't always have to write your own web server. Express helps take care of your request response handling and much more.

## Get started

`npm install express`

Create a js file, call it whatever you like. Follow comments in `main.js`

When you want to run the program, just use `node main` and the server should start listening at port 3000. 

However, remember that any changes made to the `main.js` file would require you to stop and start the server manually. 
So in order to make your life easy, use `npx nodemon main.js`
This command gets nodemon to run your javascript code. It monitors for changes in the file and re-executes the code in the file. 

## What is middleware though?

Middleware is a function that can access and modify the request and response objects. 
Initially in the program, we write `app.use(middlewarename)` to use a middleware globally for all requests and responses. 
In certain cases, you might want to apply a middleware only for a certain set of requests or maybe even just one request. 
Express allows you to do that too. 
You can use a different middleware per route.