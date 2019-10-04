var { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql');

const mapData = new GraphQLObjectType({
    name: "mapData",
    description: "The data of the map",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        image_link: { type: new GraphQLNonNull(GraphQLString) },
    }
})

module.exports = {
    mapData
}