const os = require('os');
const app = require('./app');

const numCPUs = os.cpus().length
console.log('numCPUs : ', numCPUs);

app.listen(3000, () => console.log('Gator app listening on port 3000!'));
