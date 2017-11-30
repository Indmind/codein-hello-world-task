const hello = require("./");
// const hello = require("codein-hello-world-task");

hello("dogci").then(mess => log(mess)).catch(mess => log(mess));

const log = mess => console.log(mess);