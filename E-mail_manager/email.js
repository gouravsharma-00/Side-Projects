// Email server
console.clear();

{ // Modules
    var http = require('http');
    var file = require('fs');
    var url  = require('url');
    var nodemailer = require('nodemailer'); // Email
}

{ // E-mail
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gourav.sharma.apsmat2932@gmail.com',
            pass: 'bhmx cnxl lcpm vlsx'
        }
    });

    var mailOptions = {
        from: 'gourav.sharma.apsmat2932@gmail.com',
        to: 'gourav.sharma.apsmat2932@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was Easy!'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) console.log(error);
        else console.log('Email send: ' + info.response);
    });
}

// Server
http.createServer((request, response) => {
    const path = url.parse(request.url, true).pathname;
    console.log(path);
    const fileName = '.' + path;
    file.readFile(fileName, (error, data) => {
        if(error){
            response.writeHead(404, {'Content-Type': 'text/html'})
            return response.end('404 Eror');
        }else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            return response.end(data);
        }
    });
}).listen(8080);
