const form = document.querySelector('form');
const email = document.getElementById('emailinput');
const errorTxt = document.querySelector('.error-text');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const emailVal = email.value;
    if (!validateEmail(emailVal)){
        email.classList.add("error");
        errorTxt.style.display = "block";
    }else{
        email.classList.remove("error");
        errorTxt.style.display = "none";
    }
})
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}