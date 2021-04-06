function findPair(array ,key){
    var c
    var b=[]
    for(var i=0;i<array.length-1;i++){
        c=i+1
        if(array[i]+array[c]==key){
            b.push(array[i])
            b.push(array[c])
            return b;
        }
    }
    
}
var array=[3,9,2,5,6,7]
var key=11
var result=findPair(array ,key)
console.log(result)


function printOccurance(string){
    var newString=""
    for(var i=0;i<string.length;i++){
        if(!newString.includes(string.charAt(i))){
            newString=newString+string.charAt(i)
        }
    }
    console.log(newString)
}
var string="shagajs"
printOccurance(string)


function pair(array,key){
    var x
    var newArray=[]
    for(var i=0;i<length-1;i++){
        x=i+1
        if(array[i]+array[x]==key){
    newArray.push(array[i])
    newArray.push(array[x])
    return newArray;

        }
    }


}
var array=[3,9,2,5,6,7]
var key=11
var result1=pair(array.key)
console.log(result1)


