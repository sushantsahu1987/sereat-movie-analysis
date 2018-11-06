const express = require('express');
const redis = require('redis');

const app = express();
// redis-server is the service name of container
// defined in docker-compose.yml 
const client = redis.createClient({
    host:'redis-server',
    port: 6379
});
client.set('visits',0);

app.get('/', (req, resp) => {

    client.get('visits', (err, visits) => {
        let msg = '';
        if (err) {
            msg = `Error has occured ${err}`;
        } else {
            msg = `no. of visits ${visits}`;
        }
        console.log(msg);
        resp.send(msg);
        client.set('visits', parseInt(visits) + 1);
    });

});

app.listen(3000, ()=> {
    console.log('server is running on port 3000');
})