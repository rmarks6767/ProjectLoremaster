const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const OperationEnum = require('./operationEnum'); 

const RequestFilter = new GraphQLInputObjectType({
    name: "Filter",
    description: "Used to choose an operation to query back different types of data",
    fields: {
        operation: { type: new GraphQLNonNull(OperationEnum) },
        value: { type: new GraphQLNonNull(GraphQLString) },
        property: { type: new GraphQLNonNull(GraphQLString) }
    }
})

module.exports = RequestFilter
