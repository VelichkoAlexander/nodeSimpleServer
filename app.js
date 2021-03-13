const http = require('http');
require('dotenv').config()

const options = {
  port: process.env.PORT || 3000,
  delay: process.env.DELAY || 1000,
  limit: process.env.LIMIT || 3000,
};

console.log(options)
const server = http.createServer(async (req, res) => {
  console.log(req.path)
  if ('GET' === req.method && '/' === req.url) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    await timer(res);
  }
})

server.listen(options.port, () => {
  console.log(`Server running at port ${options.port}`);
})


function timer(res) {
  const timerId = setInterval(() => {
    timeToConsole();
  }, options.delay);

  setTimeout(() => {
    clearInterval(timerId);
    res.end(`${new Date().toLocaleDateString()}`);
  }, options.limit);
}

function timeToConsole() {
  let date = new Date();
  console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
}