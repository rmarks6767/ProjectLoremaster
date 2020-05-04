const { GraphQLEnumType } = require('graphql');

const terrainEnum = new GraphQLEnumType({
  name: "terrainEnum",
  values: {
    IMPASSABLE: { value: 0 },
    PASSABLE: { value: 1 },
    ROUGH:{ value: 2 },
    SLIPPERY:{ value: 3 },
  }  
})

module.exports = terrainEnum