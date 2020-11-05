/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const keyMappings = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

const handleUserInput = function(key) {
  let cmd = '';
  if (key === '\u0003') {
    process.exit();
  } 
  if (keyMappings[key]) {
    connection.write(keyMappings[key]);
  } 
  // switch(key) {
  //   case '\u0003': 
  //     process.exit();
  //   case 'w':
  //     // cmd = 'up';
  //     // break;
  //   case 'a':
  //     // cmd = 'left';
  //     // break;
  //   case 's':
  //     // cmd = 'down';
  //     // break;
  //   case 'd': 
  //     // cmd = 'right'
  //     // break;
  //   case 'z':
  //     connection.write(keyMappings[key]);
  //     break;
  // }
  // if (cmd) {
  //   connection.write("Move: " + cmd)
  // }
}

module.exports = { setupInput };