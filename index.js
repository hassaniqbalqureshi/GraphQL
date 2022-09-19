const express = require("express");
const app = express();
const PORT = 6969;
const userData = require("./MOCK_DATA.json");
const graphql = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { type } = require("os");
const schema = require("./Schema/index");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log("Server is Up");
});
