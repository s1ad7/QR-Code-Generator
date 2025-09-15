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
    check.innerHTML = "Please enter a valid text or URL"
  }
});
press.addEventListener('click',()=>{
    if (input.value.trim() === ""){
        check.style.color = "red"
        check.style.display = "block"
        check.style.paddingTop = "15px"
        check.innerHTML = "Please enter a valid text or URL"
    }
    else{
        check.style.display = "block"
        check.style.color = "green"
        check.style.paddingTop = "15px"
        check.innerHTML = "Thank you for using our service"
    }
})

