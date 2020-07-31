const os = require('os');
const http = require('http');
const cluster = require('cluster');

const app = require('./app');

const numCPUs = os.cpus().length

console.log('numCPUs : ', numCPUs);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  console.log(`There are ${numCPUs} cores`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(3000, () => console.log('Gator app listening on port 3000!'));
  console.log(`Worker ${process.pid} started`);
}
