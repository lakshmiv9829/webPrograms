function register() {
    // event.preventDefault(e)
    var box = document.getElementById("Name");
    if (box.value == '') {
        alert("enter valid First Name");

        return false;
    }
    var textbox = document.getElementById("Age");
    if (textbox.value == '') {
        alert("enter valid Age");
        return false;
    }
    var textbox = document.getElementById("Email");
    if (textbox.value == '') {
        alert("enter valid First Email");
        return false;
    }
    var textbox = document.getElementById("password");
    if (textbox.value == '') {
        alert("enter valid password");
        return false;
    }
    var textbox = document.getElementById("Date Of Joining");
    if (textbox.value == '') {
        alert("enter valid dob");
        return false;
    }


}

document.getElementById('my-select11').addEventListener('change', function () {
    console.log('You selected: ', this.value);
});

var rates = document.getElementById('one').value;
var rate_value;
if (rates == 'Definitely') {
    rate_value = document.getElementById('r1').value;

} else if (rates == 'Maybe') {
    rate_value = document.getElementById('r2').value;

} else if (rates == 'NotSure') {
    rate_value = document.getElementById('r3').value;
}

document.getElementById('results').innerHTML = rate_value;
    // document.mainform.onclick = function(){
    //     var radVal = document.mainform.lang.value;
    //     result.innerHTML = 'You selected: '+radVal;
    // }