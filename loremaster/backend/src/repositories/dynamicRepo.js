const { SQLCONNECT } = require('../sql/SQLConnect');  

module.exports = {
    SELECT: function(table, expression = null){
        const connection = SQLCONNECT();
        return new Promise((success, failure) => {
            connection.query(`
            SELECT * FROM ${table}
            ${(expression) ? 'WHERE '+ expression : ``}`, function(error, result){
                if (error){
                    return failure(error);
                }
                return success(result.map(value => {
                    var data = {};
                    for(key in value) data[key] = value[key];
                    console.log(data);
                    return data;
                }));
            })
        })
    }  
}