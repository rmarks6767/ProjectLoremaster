const { Insert } = require('../../repositories/dynamicRepo');

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
            _ = Object.keys(args.account).pop();
            
            const friendValues = Object.values(args.account).pop();

            if (friendValues) {

            }
            
            return resp;
        } else {
            // Throw an error that tells them that they need to include an account
            return new Error("Must provide an account input!");
        }
    }
}