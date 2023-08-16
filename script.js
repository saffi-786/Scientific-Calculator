let input = document.getElementById("screen");
let buttons = document.querySelectorAll(".btn");
const tap = new Audio('right.mp3');

let string = "";
let temp = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      tap.play();
      string = eval(string);
      input.value = string;
      string = string.toString();
      temp = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      temp = "";
      input.value = "0";
    } else if (e.target.innerHTML == "CE") {
      string = string.slice(0, string.length - 1);
      temp = temp.slice(0, temp.length - 1);
      input.value = temp;
    } else if (
      e.target.innerHTML == "+" ||
      e.target.innerHTML == "-" ||
      e.target.innerHTML == "/" ||
      e.target.innerHTML == "*" ||
      e.target.innerHTML == "%"
    ) {
      string = string.concat(e.target.innerHTML);
      temp = "";
      input.value = e.target.innerHTML;
    } else {
      string = string.concat(e.target.innerHTML);
      temp = temp.concat(e.target.innerHTML);
      input.value = temp;
    }
  });
});
