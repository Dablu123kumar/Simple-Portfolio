const cvBtn = document.getElementById("cvBtn")
const submit = document.getElementById("submit")
const bar = document.getElementById("bar")
cvBtn.addEventListener("click",  ()=>{
    alert("Downloade Succesfully")
})
submit.addEventListener("click",  ()=>{
  const email = document.getElementById("email")
  const password =document.getElementById("pass")
  const phone_number = document.getElementById("phone")
  
    if(email.value == "" && password.value == "" && phone_number.value ==""){
        alert("please fill the all details")
      }

      else{
        alert("LogedIn Succesfully")
      }
})
const ul = document.querySelector("ul")
bar.addEventListener("click", () => {
    ul.classList.toggle("showData")

})