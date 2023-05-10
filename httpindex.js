const http = require("http");
const PORT = 3000;
const server = http.createServer(function listener(request, response) {
  if ((request.url = "/home")) {
    response.end("Welcome to home");
  }
});

server.listen(PORT, function exec() {
  console.log(`Wooh Shubham. Server is up & running on PORT : ${PORT}`);
});
