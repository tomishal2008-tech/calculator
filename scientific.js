const screen = document.getElementById("screen");
const keys = document.querySelectorAll(".keys span");

let current = "";

keys.forEach(btn => {
  btn.addEventListener("click", () => {

    const val = btn.dataset.val;
    const func = btn.dataset.func;

    if(val === "C"){
      current = "";
      screen.innerText = "0";
      return;
    }

    if(val === "="){
      try{
        current = eval(current).toString();
        screen.innerText = current;
      }catch{
        screen.innerText = "Error";
        current="";
      }
      return;
    }

    if(func){
      scientific(func);
      return;
    }

    current += val;
    screen.innerText = current;
  });
});

function scientific(type){
  let num = parseFloat(current || screen.innerText);
  let result = 0;

  switch(type){
    case "sin": result = Math.sin(num * Math.PI/180); break;
    case "cos": result = Math.cos(num * Math.PI/180); break;
    case "tan": result = Math.tan(num * Math.PI/180); break;
    case "log": result = Math.log10(num); break;
    case "sqrt": result = Math.sqrt(num); break;
    case "pow": result = Math.pow(num,2); break;
  }

  current = result.toString();
  screen.innerText = result.toFixed(5);
}
