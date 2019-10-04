const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { mapQuery } = require('./queries/map/mapQuery');
const { createMap } = require('./mutations/mapMutation');

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
        createMap: createMap
    })
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
});

module.exports = { schema }