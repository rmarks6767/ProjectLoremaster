const { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const { OperationEnum } = require('../../outputs/enums/operationEnum'); 

const RequestFilterInput = new GraphQLInputObjectType({
    name: "FILTER",
    description: "Used to choose an operation to query back different types of data",
    fields: {
        operation: { type: new GraphQLNonNull(OperationEnum) },
        value: { type: new GraphQLNonNull(GraphQLString) },
        property: { type: new GraphQLNonNull(GraphQLString) }
    }
})

module.exports = {
    RequestFilterInput
}