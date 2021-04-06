function num() {
    var x,text;
    x=document.getElementById("demo").value
        if(isNaN(x)||x<1||x>1000){
            var text=document.getElementById("message")
            text.innerHTML="enter the numaric values only";
            text.style.color="red";
            text.style.textDecoration="underline";
        }
            // else{
            //    // var text=document.getElementById("message")
            //     text= "input is ok";
            //     text.style.color="green";
            //     text.style.textDecoration="underline";
            // }
           // document.getElementById("data").innerHTML=text;
        }
        function fact(){
            var num,fact,x;
            fact=1;
            // var factorial="<br> factorial numbers are: <br>"
            num=document.getElementById("demo").value;
            for( x=1;x<=num; x++){
                fact=fact*x; 
                // factorial+=x + "<br>"
            }
            document.getElementById("result").value=fact;

        }
        function even(){
            var i,start=1;
            var evenNum="<br> Even Numbers: <br>"
            var end=parseInt( document.getElementById("demo").value);
            for(i=start;i<=end;i++){
                if(i % 2 == 0){
                  evenNum += i +"<br>";                 
                
            }
        }
        document.getElementById("out").innerHTML=evenNum;
    }
    function prime(){
        var number=parseInt(document.getElementById("demo").value); 
        var primeNumber="<br>prime number:<br>";
        for(var i=2;i<=number;i++){
        var isprime=true;
        for(var j=2;j<i;j++){
            if(i % j === 0 && i !==j){
                isprime=false;
            }
        }
        if(isprime===true){
            primeNumber +=i +"<br>";
            
        }
        document.getElementById("answer").innerHTML=primeNumber;
    }

    }