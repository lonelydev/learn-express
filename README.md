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

## Serving HTML from serverside

In the beginning we hardcoded our html within single backticks to do the rendering of the page. 
In the realworld this is a complete NO. You generally serve a page that is on the server. 

In order to do this in our app, we need to use something called a template engine. Node has plenty of template engines. 
some of the popular ones are:
 - handlebared - very popular - nearly 7 million weekly downloads
 - pug - 1 million downloads per week - Haml based, small learning curve
 - ejs - 7 million plus downloads per week - js based - little to 0 learning curve. 

So in order to avoid learning anything additional, let us get started with ejs. 
`npm install ejs`

Configure app to use ejs as your view renderer in `main.js`
Define the path to your `views`. 

Move contents of the form into a new file with an extension `.ejs` into the `views` directory. 

Rerun `npx nodemon main.js`

### Request properties not rendered in file

This is because, you cannot access the request properties directly inside the html. 
Unless you use some of the special features provided by ejs to do this. 

`<% expression %>` or `<%= object.property %>` within html to be able to render values passed in from the server side. 

And in order to pass the earlier request property to the view, we need to use pass this information as a parameter to the 
`response.render()` method. This way, the view renderer knows what is to be passed and how it is to be rendered. 
