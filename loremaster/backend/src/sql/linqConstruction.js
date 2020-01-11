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



function Or(Filters) { 
    try {
        Filters.forEach(filter => {
            console.log(filter);
            console.log(filter.Operation);
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
        console.log("Whoops");
        throw new Error("Data type could not be properly compared!")
    }
    
}
function And(ORList) {
    console.log(ANDList["or"]);
    const or = null; 
    return new Promise((success) => {
        ORList["or"].forEach(OR => {
            if (or){
                or = `(${or} OR ${Or(OR)})`;    
            } else {
                or = Or(OR);
            }
        });
        return success(or);
    });
}
function Where(ANDList) {
    console.log(ANDList["and"]);
    const and = null;
    return new Promise((success) => {
        ANDList["and"].forEach(AND => {
            if (and){
                and = `(${and} AND ${And(AND)})`;    
            } else {
                and = And(AND);
            }
        });
        console.log(and);
        return success(and);
    });
}
    
module.exports = {
    Where
}