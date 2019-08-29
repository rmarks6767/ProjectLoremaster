var {GraphQLEnumType} = require('graphql');
export const TerrainEnum = new GraphQLEnumType({
  name: "TerrainEnum",
  values: {
    IMPASSABLE: {
        value: 0
    },
    PASSABLE: {
        value: 1
    },
    ROUGH:{
        value:2
    },
    SLIPPERY:{
        value:3
    },
  }  
})