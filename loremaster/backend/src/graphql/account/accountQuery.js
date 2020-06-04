const Account = require('./account');
const accountGraph = require('./model/accountGraph');
const And = require('../where/and')
const { GraphQLList, GraphQLString, GraphQLNonNull } = require('graphql'); 

module.exports = {
    getAccount: {
        name: "account",
        description: "an account",
        type: new GraphQLList(accountGraph),
        args: {
            userName: {
                name: 'userName',
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                name: 'password',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: Account.GetAccount.bind(Account)
    }
}