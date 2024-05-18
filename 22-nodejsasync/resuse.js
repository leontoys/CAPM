module.exports = {
    
    printArrayReuse : function(arrayParameter){
        for (let index = 0; index < arrayParameter.length; index++) {
            const element = arrayParameter[index];
            console.log(element);
        }
    },

    getCount:function(arrayParameter){
        console.log(arrayParameter.length);
    }

}