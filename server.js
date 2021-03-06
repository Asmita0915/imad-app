var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

/*var articles ={
'article-one': {
    title: 'Article one | Asmita Mutgekar',
    heading: 'Article one',
    date: 'August 15 2017',
    content:     ` <p>
            This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.
        </p>
        <p>
            This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.
        </p>
        <p>
            This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.
        </p>`
},
'article-two':{
    title: 'Article two | Asmita Mutgekar',
    heading: 'Article two',
    date: 'August 15 2017',
    content:     ` <p>
            This is Article two of the web app.This is Article two of the web app.This is Article two of the web app.
        </p>
        `
},
'article-three':{
    title: 'Article three | Asmita Mutgekar',
    heading: 'Article three',
    date: 'August 15 2017',
    content:     ` <p>
                This is Article three of the web app.This is Article three of the web app.This is Article three of the web app.
            </p>
            `
}
};

function createtemplate(data){

var date=data.date;
var content = data.content;
var heading=data.heading;
var title=data.title;

var htmltemplate =`
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
   
    <body>
        <div class="container">
    <div>
        <a href ="/">Home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <div>
        ${date}
    </div>
    <div>
        ${content}
        
    </div>
    </div>
    </body>
</html>
`;
return htmltemplate;
}*/
var counter=0;

app.use(morgan('combined'));

app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

/*app.get('/:articleName',function(req,res){
    //articleName==articleone
    //articles[articleName] == article[articleone]
    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});*/


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/favicon.ico', function (req, res) {

  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));

});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var names=[];
app.get('/submit-name',function(req,res){
   //var name=req.params.name;
   var name=req.query.name;
    names.push(name);
    
    res.send(JSON.stringify(names));
});
