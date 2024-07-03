// Node.JS App
// npm install formidable { to get files on your system/server }

{ // Module(s)
    var http = require('http');
    var url  = require('url');
    var file = require('fs');
    var formidable = require('formidable'); // to allow user to upload files to your server.
}

http.createServer((request, response) => {
    const path = url.parse(request.url, true).pathname;
    const fileName = '.' + path;
    file.readFile(fileName, (error, data) => {
        if(request.url == '/fileupload'){
            var form = new formidable.IncomingForm();
            form.parse(request, (error, feilds, files) => {
                let oldPath = files.fileUpload[0].filepath;
                let newPath = 'C:\\Users\\Dell\\' + files.fileUpload[0].originalFilename;
                file.rename(oldPath, newPath, (error) => {
                    if(error) throw error;
                    response.write(`File Uploaded and moved to: `);
                    response.write(newPath);
                    response.end();
                })
            });
        }
        else if(error){
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end('404 Page Not Found');
        }else{90
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            return response.end();
        }
    });
}).listen(8080);
