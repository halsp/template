const spawn = require("cross-spawn");

const opts = {
  stdio: "inherit",
};

spawn("halsp start ms-user", opts);
spawn("halsp start ms-todo", opts);

setTimeout(() => {
  spawn("halsp start app", opts);
}, 2000);
