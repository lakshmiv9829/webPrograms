document.write("<h1>Welcome</h1>")
console.log("introduction to JS")
console.log("JS is case sensitive")
console.log("JS is client side scripting language")
console.log("Js is used to make page interactive")
console.log("JS is not secure")
/*alert("alert") /*gives a alert message while loading the page*/
var a
a=10
console.log(typeof(a))
a=true
console.log(typeof(a))
a="robin"
console.log(typeof(a))
b=a
console.log(b)
/*hello()/*just experimentig*/
if(b){
    console.log("b is string")
}
for(var i=0;i<10;i++){
    console.log(i);
    document.write(i+" ")
}
//hello()
function hello(a,b){
    console.log("calling function")
    var name = document.getElementById("name")
    console.log("name")
    console.log(name.value)
    if(name.value==""){
        
        console.log("enter if")
        var message=  document.getElementById("message")
        message.innerHTML="please enter name"
        message.style.color="red"
        message.style.textDecoration="underline"
    }
    var lastName=document.getElementById("lastNAme")
    console.log("last name")
    console.log(lastName.value)
    if(lastName.value==""){
        var message2= document.getElementById("message2")
        message2.innerHTML="please enter last name"
        message2.style.color="red"
        message2.style.textDecoration="underline"
    }
    var emailId= document.getElementById("emailID")
    console.log("Email")
    console.log(emailID.value)
    if(emailId.value==""){
        var message3= document.getElementById("message3")
        message3.innerHTML="please enter email id"
        message3.style.color="red"
        message3.style.textDecoration="underline"
    }
   
    var password= document.getElementById("pwd")
    console.log("password")
    console.log(pwd.value)
    if(pwd.value==""){
        var message4= document.getElementById("message4")
        message4.innerHTML="enter the password"
        message4.style.color="red"
        message4.style.textDecoration="underline"
    }

    // if(document.formname.controlname){

    // }
    console.log(document.Registration.state[0].checked)
    console.log(document.Registration.state[1].checked)
    console.log(document.Registration.state[2].checked)
    if(document.Registration.state[0].checked==false
        && document.Registration.state[1].checked==false
        && document.Registration.state[2].checked==false){
            console.log("entered if")
            var err=document.getElementById("errState")
            err.innerHTML="please select state"
            err.style.color="red"
            err.style.textDecoration="underline"
        }
    
    //console.log(document.Registration.language)
    console.log(document.Registration.language.value)
    var language = document.Registration.language
    if(language.value=="0"){
        console.log("validating select")
        var err= document.getElementById("errLanguage")
        err.innerHTML="please select language"
        err.style.color="red"
        err.style.textDecoration="underline"
    }

    var num1= document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    console.log(num1,num2)
    console.log(num1.length,num2.length)


    var answer = document.getElementById("answer")
    answer.innerHTML= parseInt(num1)+parseInt(num2)
}
var res=function mock(){
    console.log("function mock invoked")

    }
    res()
    var assignment=function(){
        console.log("calling function")

    }
    assignment()
