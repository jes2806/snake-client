const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', (data) => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write("Name: JES");
  });

//  setInterval(() => {
//    conn.write("Move: up");
//  }, 500);

  conn.on('data', (data) => {
    console.log(`server says: ${data}`);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;