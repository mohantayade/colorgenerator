const getColor = ()=>{
    // hex code
    const randamNumber = Math.floor(Math.random()*16777215);
    const randamCode = "#"+randamNumber.toString(16);
  document.body.style.backgroundColor = randamCode;
  document.getElementById("color-code").innerHTML =randamCode;
  document.getElementById("btn").style.backgroundColor = randamCode;
  navigator.clipboard.writeText(randamCode);
}
// event function
document.getElementById("btn").addEventListener("click",getColor)
// initial function
getColor();