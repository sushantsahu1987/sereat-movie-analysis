const config = require('./config');

const test = () => {
    console.log(config.db);
    console.log(config.password);
}

module.exports = test;