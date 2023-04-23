const spawn = require("cross-spawn");

const opts = {
  stdio: "inherit",
};

spawn("halsp start ms-user -p 5001", opts);
spawn("halsp start ms-todo -p 5002", opts);

setTimeout(() => {
  spawn("halsp start app -p 3002", opts);
}, 2000);
