function printOccurrence (value){
    var newValue=" "
    for(var i=0;i<value.length;i++){
        if(!newValue.includes(value.charAt(i))){
            newValue=newValue+value.charAt(i)
        }
    }
    console.log(newValue)

}
var value="sajhags"
printOccurrence(value)