const express = require('express');
const cors = require('cors');
const express_graphql = require('express-graphql') 
const { schema } = require('./graphql/schema')
const getArgs = require('./extraFunctions/proccessCommandLineArgs')

const port = 4000;
const path = "/";

const app = express(); 

// Add cors
app.use(cors());

app.use(path, express_graphql({
    schema: schema,
    graphiql: (getArgs().env == 'dev'),  // We are only going to make use the GraphiQL while in dev
}));

app.listen(port, () => { if (getArgs().verbose) console.log(`Listening on http://localhost:${port}${path}`) } );