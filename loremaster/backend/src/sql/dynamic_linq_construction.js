module.exports = {
    WHERE: function(ANDList) {
        const and = null;
        return new Promise((success) => {
            ANDList.forEach(AND => {
                if (and){
                    and = `${and} AND ${this.AND(AND)}`;    
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
                    or = `${or} OR ${this.OR(OR)}`;    
                } else {
                    or = this.OR(OR);
                }
            });
            return success(or);
        });
    },
    /// SHOULD ADD A FUNCTION FOR TRY CATCHING IF THE COMPARISON VALUES ARE NOT NUMBERS
    OR: function(Filters) { 
        Filters.forEach(filter => {
            switch(filter.Operation) {
                case 0: // EQUALS operation
                    return `${filter.property}="${filter.value}"`;
                case 1: // CONTAINS operation
                    return `${filter.property} LIKE ("${filter.vallue}")`;
                case 2: // LT operation
                    return `${filter.property}<${filter.value}`;                    
                case 3: // LTE operation
                    return `${filter.property}<=${filter.value}`;                                        
                case 4: // GT operation
                    return `${filter.property}>${filter.value}`;                                                    
                case 5: // GTE operation
                    return `${filter.property}>=${filter.value}`;                                                    
            }
        });
    }
}