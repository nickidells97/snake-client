const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", (connect) => {
    console.log("Connection Successful!!");
  });

  //Logs message from the server once kicked for being idle
  conn.on("data", (data) => {
    console.log(data);
  });

  
  
  return conn;
};

module.exports = {
  connect,
  net
};