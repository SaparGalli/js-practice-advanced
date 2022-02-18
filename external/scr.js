var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
var year = today.getFullYear();
var date = today.getDate();
var month = today.getMonth() + 1;
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("displayDateTime").innerHTML = 'Year: ' + year + ' <br> Today is: ' + daylist[day] + ' <br> Date: ' + date + ' <br> Month: ' + month + ' <br> Current time is: ' + time;

var date1 = new Date("02/03/2022");
var date2 = new Date("08/06/2024");
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
document.write(Difference_In_Days + " days left until the freedom!");

function multiplyBy() {
    num1 = document.getElementById(
        "firstNumber").value;
    num2 = document.getElementById(
        "secondNumber").value;
    document.getElementById(
        "result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById(
        "firstNumber").value;
    num2 = document.getElementById(
        "secondNumber").value;
    document.getElementById(
        "result").innerHTML = num1 / num2;
}
