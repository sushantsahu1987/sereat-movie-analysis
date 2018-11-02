const config = require('./config');
const test = require('./test');

console.log('Arguments to read from command line');
console.log(process.argv);
console.log('Enviorment variables to read from process');
console.log(`PORT = ${process.env.PORT}`);
console.log(`DEV = ${process.env.DEV}`);
config.init();
test();

