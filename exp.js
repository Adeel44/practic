const path = require('path');
const express = require('express');

 //const publicDir = (path.join(__dirname, 'public'))
 const app = express();

 // set static folder 
 app.use(express.static(path.join(__dirname , 'public')))

app.get('/', function(req, res){
    res.send('Hello Home ');
 });

 app.get('/help', function(req, res){
    res.send('Help page');
 });

 app.get('/about', function(req, res){
    res.send('About us');
 });

 app.get('/weather', function(req, res){
    res.send({
        forcast:'Its snowing' ,
        location: 'Holinad'
    })
 });


app.listen(3000, function(){
    console.log('Server is runing port on 3000')
});

