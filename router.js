/**
 * Created by mortred on 2014/8/19.
 */
var router = function(handle,pathname,response,postData){
    if(typeof handle[pathname] ===  'function'){
        return handle[pathname](response,postData);
    }else{
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
    }
};

exports.router = router;