require("dotenv").config();
require("./db/dbConnection");

const app = require("./app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
