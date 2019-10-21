/// The structure that the following would interpret would look something like this:
// {
//     "where": {
//         "and": [{
//             "or": [{
//                 "operator": EQUALS,
//                 "property": "id",
//                 "value": "kjd8ddf9isd93k3-d-3-d3e3ed3-3dds"
//             },
//             {
//                 "operator": EQUALS,
//                 "property": "id",
//                 "value": "zsdsdsdsdsdcksj-d-3-d3e3ed3-3dds"
//             }]
//         }]
//     }
// }
//
// This translates to SELECT * FROM maps WHERE id="kjd8ddf9isd93k3-d-3-d3e3ed3-3dds" OR id="zsdsdsdsdsdcksj-d-3-d3e3ed3-3dds"
// The WHERE clause is built by the following functions



module.exports = {
    WHERE: function(ANDList) {
        const and = null;
        return new Promise((success) => {
            ANDList.forEach(AND => {
                if (and){
                    and = `(${and} AND ${this.AND(AND)})`;    
                } else {
                    and = this.AND(AND);
                }
            });
            return success(and);
        });
    },
    AND: function(ORList) {
        const or = null; 
        return new Promise((success) => {
            ORList.forEach(OR => {
                if (or){
                    or = `(${or} OR ${this.OR(OR)})`;    
                } else {
                    or = this.OR(OR);
                }
            });
            return success(or);
        });
    },
    OR: function(Filters) { 
        try {
            Filters.forEach(filter => {
                switch(filter.Operation) {
                    case 0: // EQUALS operation
                        return `${filter.property}="${filter.value}"`;
                    case 1: // CONTAINS operation
                        return `${filter.property} LIKE ("${filter.vallue}")`;
                    case 2: // LT operation
                        return `${filter.property}<${Number(filter.value)}`;                    
                    case 3: // LTE operation
                        return `${filter.property}<=${Number(filter.value)}`;                                        
                    case 4: // GT operation
                        return `${filter.property}>${Number(filter.value)}`;                                                    
                    case 5: // GTE operation
                        return `${filter.property}>=${Number(filter.value)}`;                                                    
                }
            });
        }
        catch {
            throw new Error("Data type could not be properly compared!")
        }
        
    }
}