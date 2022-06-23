(()=>{

const forma=document.getElementById('forma');

forma.addEventListener('submit',(e)=>{
    e.preventDefault();

  const requiredFormInputs = Array.from(
    document.getElementsByClassName("required")
  );


  requiredFormInputs.forEach((element) => {
    if (element.value.trim() === ""|| element.value.trim.length < 2) {
      element.placeholder = "Morate popuniti ovo polje!";
      element.style.border="3px solid red";
    }
})

const [fName,fEmail, fPhone,fMessage]=requiredFormInputs;

fetch("https://formsubmit.co/ajax/f8bafe5f11a25d2253a4a8ddae1ac614", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: fName.value,
        email: fEmail.value,
        subject:fPhone.value,
        message:fMessage.value
    })
}


)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


})
})();