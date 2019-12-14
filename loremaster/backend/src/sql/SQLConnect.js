const mysql = require('mysql');

module.exports = {
    SqlConnect: function(){
        var connection = mysql.createConnection({
            host: process.env.HOST,
            database: process.env.DATABASE,
            user: process.env.USER,
            password: process.env.SQLPASSWORD
        })
        connection.connect(function(error){
            if(error){
                console.log(error);
                throw new Error(error);                
                //connection = null
            }
        })
        return connection;
    }
}