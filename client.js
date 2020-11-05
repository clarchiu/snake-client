const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log("connected to server");
    conn.write("Name: CC");
    
  });

  conn.on('data', (data) => {
    console.log(data);
    process.exit();
  })

  return conn;
}

module.exports = { connect };