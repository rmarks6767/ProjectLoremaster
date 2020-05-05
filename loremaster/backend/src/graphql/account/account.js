const { Insert, Select } = require('../../sql/sqlFunctions');
const bcrypt = require('bcrypt');

class Account {

    // ( source, args.{ username, password } )
    static async GetAccount( _, { userName, password } ){
        if (userName && password){

            // Get the account info from the db, returning the account if the passwordhash and password match
            const account = await Select("accounts", `userName="${userName}"`);
            
            // Check to make sure the password is correct
            const same = await bcrypt.compare(password, account[0]["passwordHash"]);

            // If they are the same, we will return the account, otherwise we will return an error
            if (same) {
                return account;
            }
            else {
                return new Error("Incorrect login information");
            }
        }
        else {
            return new Error("Must provide a userName and password!");
        }
    }

    // ( source, args.{ account } )
    static async CreateAccount ( _, { account } ) {
        if (account) {
            // First make the passed in password a hashed one
            account.passwordHash = await bcrypt.hash(String(account.password),10);
            // Get the friends 
            //const friends = account["friends"];

            // Remove the key from the other object
            delete account.friends;
            // Remove that old property from the account 
            delete account.password;
            
            // Insert the account into the db
            return await Insert( "accounts", Object.keys(account),Object.values(account))
            .catch( ( error ) => { return error; } )
            .then( ( result ) => { return result; } );

            /*(friends) ? (friends.forEach(async friend => {
                await Insert( "friends", Object.keys(friend), Object.values(friend) )
                .catch((error) => { return new Error(error); } )
                .then((result) => { return result; } );
            })) : null;
            */
        } else {
            // Throw an error that tells them that they need to include an account
            return new Error("Must provide an account input!");
        }
    }
}

module.exports = Account