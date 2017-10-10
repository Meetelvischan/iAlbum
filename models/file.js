const fs = require('fs');
exports.getAllAlbums = function(callback){
    fs.readdir('./uploads',function(err,files){
        if(err){
            callback('没有找到upload文件夹',null);
            return;
        }
        var allAlbums = [];
        (function iteraor(i){
            if(i===files.length){
                callback(null,allAlbums);
                return;
            }
            fs.stat('./uploads/'+files[i],function(err,stats){
                if(err){
                    callback('找不到文件'+files[i],null)
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iteraor(i+1);
            })
        })(0);
    })
}

exports.getAllAlbumsByAlbumName = function(albumName,callback){
    fs.readdir('./uploads/'+albumName,function(err,files){
        if(err){
            callback('没有找到'+albumName+'文件夹',null);
            return;
        }
        var allImages = [];
        (function iteraor(i){
            if(i===files.length){
                callback(null,allImages);
                return;
            }
            fs.stat('./uploads/'+albumName+'/'+files[i],function(err,stats){
                if(err){
                    callback('找不到文件'+files[i],null)
                    return;
                }
                if(stats.isFile()){
                    allImages.push(files[i]);
                }
                iteraor(i+1);
            })
        })(0);
    })
}