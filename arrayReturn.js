function evenNumber() {
    var evens = array.filter(number => {
        if (number % 2 == 0) {

            document.write('Even Numbers: ' + evens);
        }
        if (number % 2 != 0) {
            console.log("no even elements")
        }
        if(number!=''){
            console.log("empty array")
        }
    });
}
    var array = [3, 9, 2, 4]
evenNumber()
    // for (var i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         document.writeln(array [i]+ "<br />");
    //     }


    //      if(array[i]!=0){
    //         console.log("no even elements")
    //     }

    //     else if(array==''){
    //         alert("empty");
    //     }   
    //     }
        
    






