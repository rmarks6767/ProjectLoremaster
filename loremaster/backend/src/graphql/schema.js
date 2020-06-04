const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { getMap } = require('./map/mapQuery');
const { createMap } = require('./map/mapMutation');
const { getAccount } = require('./account/accountQuery');
const { createAccount } = require('./account/accountMutation');

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    description: 'The topmost query',
    fields: () => ({
        map: getMap,
        account: getAccount
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