const { SQLCONNECT } = require('./sql_connect');  


module.exports = {
    DOSTUFF: function(data, database, properties, operation){
        const connection = SQLCONNECT();

        connection.query(_ => {
            return ""
        });
    }
}