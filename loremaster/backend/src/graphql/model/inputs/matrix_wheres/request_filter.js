const { GraphQLInputObjectType, GraphQLString } = require('graphql');
const { OperationEnum } = require('../../outputs/enums/operation_enum'); 

module.exports = {
    RequestFilterInput = new GraphQLInputObjectType({
        name: "Request Filter",
        description: "Used to choose an operation to query back different types of data",
        fields: {
            operation: { type: new GraphQLNonNull(OperationEnum) },
            value: { type: new GraphQLNonNull(GraphQLString) },
            property: { type: new GraphQLNonNull(GraphQLString) }
        }
    })
}