let input = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");
const tap = new Audio('right.mp3');

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      tap.play();
      string = eval(string);
      input.value = string;
      string = string.toString();
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = "0";
    } else if (e.target.innerHTML == "CE") {
      string = string.slice(0, string.length - 1);
      input.value = string;
    } else if (
      e.target.innerHTML == "+" ||
      e.target.innerHTML == "-" ||
      e.target.innerHTML == "/" ||
      e.target.innerHTML == "*" ||
      e.target.innerHTML == "%"
    ) {
      string = string.concat(e.target.innerHTML);
      input.value = string;
    } else if (e.target.innerHTML == "sin") {
      sinFunc();
    } else if (e.target.innerHTML == "cos") {
      cosFunc();
    } else if (e.target.innerHTML == "tan") {
      tanFunc();
    } else if (e.target.innerHTML == "exp") {
      expFunc();
    } else if (e.target.innerHTML == "log") {
      logFunc();
    } else if (e.target.innerHTML == "π") {
      piFunc();
    } else if (e.target.innerHTML == "x!") {
      factFunc();
    } else if (e.target.innerHTML == "√") {
      sinFunc();
    } else if (e.target.innerHTML == "pow") {
      sinFunc();
    } else {
      string = string.concat(e.target.innerHTML);
      input.value = string;
    }
  });
});

function sinFunc() {
  string = Math.sin(eval(string)).toString();
  input.value = string;
}
function cosFunc() {
  string = Math.cos(eval(string)).toString();
  input.value = string;
}
function tanFunc() {
  string = Math.tan(eval(string)).toString();
  input.value = string;
}
function piFunc() {
  string = string.concat("3.14159265");
  input.value = string;
}
function expFunc() {
  string = string.concat("2.718281828");
  input.value = string;
}
function logFunc() {
  string = Math.log(eval(string)).toString();
  input.value = string;
}
function sqrtFunc() {
  string = Math.sqrt(eval(string)).toString();
  input.value = string;
}
function powFunc() {
  string = Math.pow(eval(string), 2).toString();
  input.value = string;
}
function factFunc() {
  var i, num, f;
  f = 1;
  num = eval(string);
  for (i = 1; i <= num; i++) {
    f = f * i;
  }

  i = i - 1;
  input.value = f;
}
