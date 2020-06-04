const And = require('../where/and');
const mapGraph = require('./model/mapGraph');
const Map = require('./map')
const { GraphQLString, GraphQLList } = require('graphql'); 

module.exports = {
    getMap: {
        name: "map",
        description: "a map",
        type: new GraphQLList( mapGraph ),
        args: {
            id: {
                name: 'id',
                type: GraphQLString
            },
            where: {
                name: 'where',
                type: And
            }
        },
        resolve: Map.GetMap.bind( Map )
    }
}