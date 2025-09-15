document.querySelector(".cta").addEventListener("click", ()=>{
    alert("Thank you for subscribing ");
})

var input = document.querySelector(".content");
var check = document.getElementById("valid");
var press = document.querySelector(".qr_button")


console.log(input)
console.log(check)

input.addEventListener('input', () => {
  if (input.value.trim() === "") {
    check.style.color = "red";
    check.style.display = "block";
  }
});
press.addEventListener('click',()=>{
    if (input.value.trim() === ""){
        check.style.color = "red"
        check.style.display = "block"
        check.style.paddingTop = "15px"
    }
})

