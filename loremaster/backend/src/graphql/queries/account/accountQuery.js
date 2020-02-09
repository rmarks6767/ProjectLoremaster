

const accountQuery = {
    name: "account",
    description: "an account",
    type: new GraphQLList(map),
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
            type: AndInput
        }
    },
    resolve: async (source, args, root, ast) => {
        if (args.userName && args.passwordHash){
            
        }
        else if (args.where){

        }
        else {

        }
    }
}