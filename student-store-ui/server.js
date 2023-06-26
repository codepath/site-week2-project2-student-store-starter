const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port` + port);
});
