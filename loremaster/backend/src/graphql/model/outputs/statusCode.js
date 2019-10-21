var { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const StatusCode = new GraphQLObjectType({
    name: "statusCode",
    description: "status code graph type",
    fields: {
        code: { type: new GraphQLNonNull(GraphQLString) },
        message: { type: new GraphQLNonNull(GraphQLString) },
    }
})

module.exports = {
    StatusCode
}