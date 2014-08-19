/**
 * Created by mortred on 2014/8/19.
 */
var http = require("http");
var url = require("url");

var start = function(router,handle) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        var postData = "";

        request.setEncoding("utf8");
        request.addListener("data",function(data){
            postData += data;
        });
        request.addListener("end",function(){
            router(handle,pathname,response,postData);
        });

    }).listen(8000);
    console.log('server is listening ');
};
exports.start = start;