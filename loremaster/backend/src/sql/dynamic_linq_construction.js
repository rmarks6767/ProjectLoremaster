module.exports = {
    WHERE: function(ANDList) {
        ANDList.forEach(AND => {
            return this.AND(AND);
        });
    },
    AND: function(ORList) {
        const ors = ORList.forEach(OR => {
            return this.OR(OR);
        });

        if (ors.length == 1){
            return ors;
        } 
    },
    OR: function(Filters) {
        Filters.forEach(filter => {
            switch(filter.Operation) {
                case 0: // EQUALS operation
                    return `maps.${filter.property}="${filter.value}"`;
                case 1: // CONTAINS operation
                    return `maps.${filter.property}.contains("${filter.vallue}")`;
                case 2: // LT operation
                    return `maps.${filter.property}<${filter.value}`;                    
                case 3: // LTE operation
                    return `maps.${filter.property}<=${filter.value}`;                                        
                case 4: // GT operation
                    return `maps.${filter.property}>${filter.value}`;                                                    
                case 5: // GTE operation
                    return `maps.${filter.property}>=${filter.value}`;                                                    
            }
        });
    }
}