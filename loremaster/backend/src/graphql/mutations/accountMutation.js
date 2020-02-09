const { GraphQLNonNull } = require('graphql');
const { Insert } = require('../../repositories/dynamicRepo');
const { StatusCode } = require('../model/outputs/statusCode')
const { AccountInput } = require('../model/inputs/account/accountInput');

const createAccount = {
    type: StatusCode,
    description: 'an account',
    args: {
        account:{
            name:'account',
            type: new GraphQLNonNull(AccountInput),
        }
    },
    resolve: async (source, args, root, ast) => {
        if (args.account) {
            // Get the friends 
            const friends = args.account["friends"];

            // Remove the key from the other object
            delete args.account.friends;
            
            const accountResp = await Insert(
                "accounts",
                Object.keys(args.account),
                Object.values(args.account)
            ).catch((error) =>{
                return error;
            }).then((result) => {
                return result;
            });

            (friends) ? (friends.forEach(async friend => {
                await Insert(
                    "friends",
                    Object.keys(friend),
                    Object.values(friend)
                ).catch((error) =>{
                    throw new Error(error);
                }).then((result) => {
                    return result;
                });
            })) : null;
            

            if (accountResp.code == 200) {
                return accountResp;
            }
            else {
                return new Error("Error entering the account into the db!");
            }
        } else {
            // Throw an error that tells them that they need to include an account
            return new Error("Must provide an account input!");
        }
    }
}

module.exports = {
    createAccount
}