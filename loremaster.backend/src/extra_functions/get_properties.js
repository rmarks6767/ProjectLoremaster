// This function will recursively get all of the 
module.exports = {
    GetProperties: function(selectionSet, name){
        return selectionSet.selections.map(selection => {
            if (selection.name.value == name){
                return this.GetProperties(selection.selectionSet, "")
            } else {
                return selection.name.value;
            } 
        }); 
    }
}