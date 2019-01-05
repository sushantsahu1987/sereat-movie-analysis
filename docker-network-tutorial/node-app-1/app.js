const express = require('express');
const http = require('http');
const app = express();

app.get('/test', (req, resp) => {

    console.log('node-app-1 : test');   

    const url = 'nodejs-app2-3/app';
    const request = http.get(url, rep => {
        let data = '';

        rep.on('data', chunk => {
            data += chunk;
        })

        rep.on('end', () => {
            const json = JSON.parse(data);
            console.log('node app 1');
            console.log(json);

            resp.send({
                app: 'app1:test',
                result: json
            });
        })

    });

});


app.get('/app', (req, resp) => {

    resp.send({
        app: 'app1'
    });

});

app.listen(3001, () => {
    console.log('server app 1 running at port 3001');
})