//import { GraphQLSchema, GraphQLObjectType } from './graphql';
//import { mapQuery } from './queries/map_query';
//import { createMap } from './mutations/map_mutation';
const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { mapQuery } = require('./queries/map_query');
const { createMap } = require('./mutations/map_mutation');

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