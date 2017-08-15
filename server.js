var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

var content={
  title: 'Article one | Asmita Mutgekar',
  heading: 'Article one',
  date: 'August 15 2017',
  cotentstring:     ` <p>
            This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.
        </p>
        <p>
            This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.
        </p>
        <p>
            This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.This is Article one of the web app.
        </p>`
};

function createtemplate(data){

var date=data.date;
var content = data.contentstring;
var heading=data.heading;
var title=data.tile;

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
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
    res.send(createtemplate(articleone));
});

app.get('/article-two',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
