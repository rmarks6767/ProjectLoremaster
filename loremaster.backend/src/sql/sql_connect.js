var mysql = require('mysql');

module.exports = {
    SQLCONNECT: function(){
        var connection = mysql.createConnection({
            host: "localhost",
            database: "loremaster",
            user: "root",
            password: process.env.SQLPASSWORD
        })
        connection.connect(function(error){
            if(error){
                console.log(error);
                connection = null
            }
        })
        return connection;
    }
}