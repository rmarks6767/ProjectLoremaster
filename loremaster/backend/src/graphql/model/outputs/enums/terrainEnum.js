var {GraphQLEnumType} = require('graphql');
const TerrainEnum = new GraphQLEnumType({
  name: "TerrainEnum",
  values: {
    IMPASSABLE: { value: 0 },
    PASSABLE: { value: 1 },
    ROUGH:{ value: 2 },
    SLIPPERY:{ value: 3 },
  }  
})

module.exports = {
  TerrainEnum
}