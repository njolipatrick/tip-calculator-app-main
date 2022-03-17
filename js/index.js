const evaluate = (a, p, i) => {
  let individuals = Number(i);
  let amount = Number(a);
  let percent = Number(p);

  if (amount) {
    let per = amount * percent;
    let total = Number((per + amount) / individuals).toFixed(2);
    let tip = Number(per / individuals).toFixed(2);

    document.querySelector(".tip span").innerHTML = tip;
    document.querySelector(".total span").innerHTML = total;
  }
};
// Functions
let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let clickedPercent = document.querySelector(".input-wrapper");

const getKeyPressed = (value, event) => {
  value.addEventListener(event, function keydown(e) {
    // people = Number(people.value);
    let ple = Number(people.value);
    let ill = Number(bill.value);

    getClicked(clickedPercent, ple, ill);
  });
};

getKeyPressed(bill, "keyup");
getKeyPressed(people, "keyup");

const getClicked = (value, people, bill) => {
  percent = 0;

  value.addEventListener("click", function keydown(e) {
    if (e.target.value === "5%") {
      percent = 0.05;
      evaluate(bill, percent, people);
    } else if (e.target.value === "10%") {
      percent = 0.1;
      evaluate(142.55, percent, people);
    } else if (e.target.value === "15%") {
      percent = 0.15;
      evaluate(bill, percent, people);
    } else if (e.target.value === "25%") {
      percent = 0.25;
      evaluate(142.55, percent, people);
    } else if (e.target.value === "50%") {
      percent = 0.5;
      evaluate(142.55, percent, people);
    } else if (e.target.value === undefined) {
      console.log("sorry this is not defined");
    }
  });
};
