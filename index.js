const http = require('http');
const redis = require('redis');
const redisClient = redis.createClient(process.env.REDIS_URL);

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  const d = Date.now();
  redisClient.SET('the_key', `time: ${d.toString()}`, (err, y) => {
    res.setHeader('Content-Type', 'text/plain');
    if (err) {
      res.statusCode = 500;
      res.end('err!');
      return;
    }

    res.statusCode = 200;
    res.end(`Hello World${process.env.FOO_BAR}`);
  });
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
