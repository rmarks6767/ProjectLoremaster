const StatusCode = require('../statusCode/statusCode');
const accountInput = require('./model/accountInput');
const Account = require('./account');
const { GraphQLNonNull } = require('graphql');

module.exports = {
    createAccount: {
        type: StatusCode,
        description: 'an account',
        args: {
            account:{
                name:'account',
                type: new GraphQLNonNull(accountInput),
            }
        },
        resolve: Account.CreateAccount.bind(Account)
    }    
}