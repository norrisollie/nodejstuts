var url = require("url");
var fs = require("fs");

function renderHTML(path, response) {
	fs.readFile(path, null, function(error, data) {
        if (error) {
            fs.write(error);
        } else {
            response.write(data);
        }
        response.end();
    });
};

// app.js
module.exports = {

    handleRequest: function(request, response) {
        response.writeHead(200, { "Content-Type": "text/html" });

        var path = url.parse(request.url).pathname;
        switch (path) {
            case "/":
            renderHTML("./index.html", response);
            break;
            case "/login":
            renderHTML("./login.html", response);
            break;
            default:
            response.writeHead(404);
            response.write("Route not found");
            response.end();
        }
    }
};