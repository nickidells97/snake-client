let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up'), 500;
  }
  if (key === 'a') {
    connection.write('Move: left'), 500;
  }
  if (key === 's') {
    connection.write('Move: down'), 500;
  }
  if (key === 'd') {
    connection.write('Move: right'), 500;
  }
  if (key === 'q') {
    connection.write("Say: Hello!!");
  }
  if (key === 'e') {
    connection.write("Say: I'm better!!");
  }
  if (key === 'f') {
    connection.write("Say: F in chat boys");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {setupInput};