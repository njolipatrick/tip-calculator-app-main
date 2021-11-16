let people = document.querySelector("#people");

// let bill = document.querySelector("#bill").value;

// let tip = (document.querySelector(".tip span").innerHTML = "2.3");

// let total = (document.querySelector(".total span").innerHTML = "200");

// const calc = function () {
//   let five = document.querySelector("input[name=five]").value === "5%" ? 5 : 0;
//   let ten = document.querySelector("input[name=ten]").value === '10%' ? 10 : 0;
//   let fifteen = document.querySelector("input[name=fifteen]").value === '15%' ? 15 : 0;
//   let twenty_five = document.querySelector("input[name=twenty-five]").value === '25%' ? 25 : 0;
//   let fifty = document.querySelector("input[name=fifty]").value === '50%' ? 50 : 0;
//   let custom = document.querySelector("input[name=custom]").value;
//   let custom_No = typeof custom === "string" ? Number(custom) : 0;
// };

// function evaluate(amount, percent, individuals) {
//   let individuals = Number(individuals);
//   let amount  = Number(amount);
//   let percent = Number(percent);

//   if(amount){
//     let per = amount * percent;
//     let total = ( per + amount)/individuals;
//     let tip = per/individuals;
//   }
// }
let five = document.querySelector("input[name=ten]");

// Functions
//this gets the value of the key pressed event
function getKeyPressed(value, event) {
  value.addEventListener(event, function keydown(e) {
    console.log(e.target.value);
  });
}
getKeyPressed(five, "click");
getKeyPressed(people, "keyup");
