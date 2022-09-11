const net = require('net');
const {IP, PORT, ENCODING, NAME} = require('./constants');


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding(ENCODING);

  conn.on("connect", () => {
    console.log("Connection Successful!!");
    conn.write(`Name: ${NAME}`);
  });

  //Logs message from the server once kicked for being idle
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {
  connect
};