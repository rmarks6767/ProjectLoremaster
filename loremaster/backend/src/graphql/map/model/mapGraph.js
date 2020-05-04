const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');
const tileGraph = require('./tileGraph')

const mapGraph = new GraphQLObjectType({
    name: "map",
    description: "The entire map",
    fields: () => ({
        id: { type: GraphQLString },
        imageLink: { type:new GraphQLNonNull(GraphQLString) },
        name: { type:new GraphQLNonNull(GraphQLString) },
        tiles: { type: new GraphQLList(tileGraph)} 
    })
})

module.exports = mapGraph