const { Insert, Select } = require('../../sql/sqlFunctions');

class Account {
    // ( source, args.{ username, password, where } )
    static async GetAccountWhere( _, { username, password, where } ){
        if (args.userName && args.passwordHash){
                
        }
        else if (args.where){

        }
        else {

        }
    }

    // ( source, args.{ account } )
    static async CreateAccount ( _, { account } ) {
        if (account) {
            // Get the friends 
            const friends = account["friends"];

            // Remove the key from the other object
            delete account.friends;
            
            const accountResp = await Insert(
                "accounts",
                Object.keys(account),
                Object.values(account)
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

module.exports = Account