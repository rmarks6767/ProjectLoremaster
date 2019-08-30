var express = require('express'); //Serves requests
var express_graphql = require('express-graphql') //express-graphql
var { schema } = require('./graphql/schema')

const port = 4000

var app = express() //Creating an app instance
app.use("/graphql", express_graphql({
    schema: schema,
    graphiql: true,
}))

app.listen(port, () => console.log(`Listening on http://localhost:${port}/graphql`))