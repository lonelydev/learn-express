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

### Middleware per route

In express, any http method - get, post or whatever, actually takes n number of arguments. 
In our initial code we only gave it a `(route, (req,res)=>{})`. 
If you wanted to do different things on your request and response and run it like a pipeline, where 
one function does something specific to the request, passes it on to the next and so on, then you could easily implement it by 
using the following format:

```javascript
   app.get("/", function1, function2, function3);
```
That would result in the functions being invoked from left to right in the order that it is provided.

### Let us try it out

Create a middleware method `getWeather`
As written in the comments in the app, invoking `next` method is optional. This is necessary when you want the control to flow through to the 
next function in the pipeline.

