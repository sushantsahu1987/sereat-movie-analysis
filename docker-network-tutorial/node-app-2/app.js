const express = require('express');
const app = express();

app.get('/app', (req, resp)=> {
    resp.send({app: 'app2'});
});

app.listen(3002,()=> {
    console.log('server app 2 running at port 3002');
})