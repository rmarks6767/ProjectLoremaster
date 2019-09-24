const { SQLCONNECT } = require('./sql_connect');  

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
                return success(result.forEach(element => {
                    console.log(element);
                    return element;
                }))
            });
        })
    },
    SELECTJOIN: function(table1, table2, property1, property2, expression = null){
        const connection = SQLCONNECT();
        return new Promise((success, failure) => {
            connection.query(`
            SELECT * FROM ${table1} 
            RIGHT JOIN ${table2} ON 
            ${table1}.${property1}=${table2}.${property2}
            ${(expression) ? 'WHERE '+ expression : ``}`, function(error, result){
                console.log(error);
                if (error){
                    return failure(error);
                }
                return success(result.forEach(element => {
                    console.log(element);
                    return element;
                }))
            });
        })
    }
}

// ON
// ${table1}.${property1}=${table2}.${property2}