const mysql = require('mysql');
const getArgs = require('../extraFunctions/proccessCommandLineArgs');

function Connect() {
    // Get all of the info to connect to the db 
    const connection = mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.SQLPASSWORD
    })
    connection.connect( (error) => {
        // If we cannot connect to the db then we should have a way to handle that
        if(error){
            if ( getArgs().verbose )
                console.log(error);
            throw new Error(error);                
        }
    })
    return connection;
}

module.exports = {
    Select: (table, expression = null) => {
        // Establish a connection with the MySQL Server
        const connection = Connect();

        // Eventually this will be logged for every query made to the db
        const query = `
            SELECT * FROM ${table}
            ${(expression) ? 'WHERE '+ expression : ``}`;

        //Output what the user is doing
        if ( getArgs().verbose )
            console.log(query);

        // Return a promise with the data that was just gathered
        return new Promise((success, failure) => {
            connection.query(query, (error, result) => {
                if (error){
                    if ( getArgs().verbose )
                        console.log(error);
                    failure(error);
                } else {
                    // Convert the result that is all in tables into a json object
                    success(result.map(value => {
                        var data = {};
                        for(key in value) 
                            data[key] = value[key];
                        return data;
                    }));
                }
            })
            connection.end();
        })
    },
    Insert: (table, keys, values) => {
        const connection = Connect();

        const query = `
            INSERT INTO ${table} 
            (${keys.join()}) VALUES ("${values.join(`","`)}")`;

        if ( getArgs().verbose )
            console.log(query);

        return new Promise((success, failure) => {
            connection.query(query, (error) => {
                if (error) {
                    if ( getArgs().verbose )
                        console.log(error);
                    failure({
                        code: "400", 
                        message: error.message
                    });
                } else {
                    success({
                        code: 200, 
                        message: "Successfully inserted data!"
                    });
                }
            });
            connection.end();
        })
    }
}