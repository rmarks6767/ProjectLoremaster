const Account = require('./account');
const accountGraph = require('./model/accountGraph');
const And = require('../where/and')
const { GraphQLList, GraphQLString } = require('graphql'); 

module.exports = {
    getAccount: {
        name: "account",
        description: "an account",
        type: new GraphQLList(accountGraph),
        args: {
            userName: {
                name: 'userName',
                type: GraphQLString
            },
            passwordHash: {
                name: 'passwordHash',
                type: GraphQLString
            },
            where: {
                name: 'where',
                type: And
            }
        },
        resolve: Account.GetAccountWhere.bind(Account)
    }
}