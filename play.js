const {connect, net} = require('./client');

const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect()); // Passes connect inside setupInput to allow for data to be sent to server