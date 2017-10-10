var express = require('express');
var app = express();
var router = require('./controller/router.js');
app.set('view engine','ejs');

app.use(express.static('./public'));
app.use(express.static('./uploads'));
app.get('/',router.showIndex);
app.listen(3000);
app.get('/up',router.showUp);
app.get('/:albumName',router.showAlbum);
app.post('/up',router.doPost);
app.use(function(req,res){
    res.render('err');
})