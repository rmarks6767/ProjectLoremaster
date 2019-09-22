const { SQLCONNECT } = require('./sql_connect');  


module.exports = {
    SELECT: function(table, expression){
        const connection = SQLCONNECT();
        return new Promise((success, failure) => {
            connection.query(`
            SELECT * FROM ${table} ` + 
            (expression) ? `WHERE ${expression}`: ``, function(error, result){
                if (error){
                    return failure(error);
                }
                return success(result.forEach(element => {
                    return element;
                }));
            });
        })
    }
}