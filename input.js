const { connect } = require("http2");
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  };
  if (key === '\u0077') {
    connection.write("Move: up");
  };
  if (key === '\u0061') {
    connection.write("Move: left");
  };
  if (key === '\u0073') {
    connection.write("Move: down");
  };
  if (key === '\u0064') {
    connection.write("Move: right");
  };
  if (key === '\u0031') {
    connection.write("Say: feeeeed me!")
  };
  if (key === '\u0032') {
    connection.write("Say: my tail is so long!")
  };
  if (key === '\u0033') {
    connection.write("Say: so many snakes!")
  };
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

module.exports = setupInput;