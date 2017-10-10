var files = require('../models/file.js');
const formidable = require('formidable');
exports.showIndex = function(req,res){
    files.getAllAlbums(function(err,AllAlbums){
        if(err){
            res.send(err);
            return;
        }
        res.render('index',{
            "albums":AllAlbums,
        })
    })
}
exports.showAlbum = function(req,res){
    var albumName = req.params.albumName;
    files.getAllAlbumsByAlbumName(albumName,function(err,imagesArray){
        if(err){
            res.send(err);
            return;
        }
        res.render('album',{
            "albumName":albumName,
            "images":imagesArray
        })
    })
    
}

//显示上传
exports.showUp = function(req,res){
    files.getAllAlbums(function(err,AllAlbums){
        res.render('upload',{
            "albums":AllAlbums,
        })
    })
    
}
//上传表单
exports.doPost = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        console.log(files);
      });
      res.send("成功!")
   
    
}