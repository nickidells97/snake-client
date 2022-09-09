const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  conn.setEncoding("utf8");

  // function move1() {
  //   conn.write("Move: up");
  // };
  // function move2() {
  //   conn.write("Move: left");
  // };

  conn.on("connect", () => {
    console.log("Connection Successful!!")
    conn.write("Name: NDF");
    // setTimeout(move1, 500);
    // setTimeout(move2, 1000)
    // setTimeout(move1, 1500)
    // setTimeout(move1, 2000)
    // setTimeout(move1, 2500)
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