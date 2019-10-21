const { GraphQLEnumType } = require('graphql');

const OperationEnum = new GraphQLEnumType({
  name: "OperationEnum",
  values: {
    EQUALS: { value: 0 },
    CONTAINS: { value: 1 },
    LT: { value: 2 },
    LTE: { value: 3 }, 
    GT: { value: 4 },
    GTE: { value: 5 },
  }  
})

module.exports = {
  OperationEnum
}