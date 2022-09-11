const {MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, ENCODING} = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  // Following code is used for snake movement
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up'), 500;
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left'), 500;
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down'), 500;
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right'), 500;
  }
  // Following code is used to display messages on-screen
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
  connection = conn; // Allows for data to be sent to the server
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {setupInput};