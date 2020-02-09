const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { mapQuery } = require('./queries/map/mapQuery');
const { createMap } = require('./mutations/mapMutation');
const { createAccount } = require('./mutations/accountMutation');

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'The topmost query',
    fields: () => ({
        map: mapQuery
    })
});

const RootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    description: 'The topmost mutation',
    fields: () => ({
        createMap: createMap,
        createAccount: createAccount
    })
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

module.exports = { schema }