const express = require('express'); //Serves requests
const express_graphql = require('express-graphql') //express-graphql
const { schema } = require('./graphql/schema')

const port = 4000;
const path = "/";

const app = express(); //Creating an app instance
app.use(path, express_graphql({
    schema: schema,
    graphiql: true,
}));

app.listen(port, () => console.log(`Listening on http://localhost:${port}${path}`));