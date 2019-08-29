var express = require('express'); //Serves requests
var express_graphql = require('express-graphql') //express-graphql
var {buildSchema} = require('graphql')
var { createMap } = require('./mutations/map_mutation')
var fs = require('fs')

const schema = buildSchema(fs.readFile("../schema.graphql"))

var root = {
    createMap: createMap

}

var app = express() //Creating an app instance
app.use("/graphql",express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(4000)