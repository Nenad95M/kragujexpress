(() => {

  const forma = document.getElementById('forma');
  const notification = document.getElementById('successMessage');
  //niz od svih korisnickih unosa
  const requiredFormInputs = Array.from(document.getElementsByClassName("required"));
  const warningClass = 'warning';

  forma.addEventListener('submit', (e) => {

    e.preventDefault();

    if (formValidation()) {
      sendMessage();
    }

    //iteracija kroz sve unose kako bi se proverilo da nisu prazni
    function formValidation() {
      for (const input of requiredFormInputs) {
        if (input.value.trim() === "") {
          input.placeholder = "Morate popuniti ovo polje!";
          input.classList.add(warningClass);
          return false;
        }
      }
      return true;
    }

    //Ako dobijemo odgovor sa sajta o uspesnosti slanja poruke,
    //dodajemo a zatim uklanjamo css klase da bi se prikazala poruka u DOM-u
    //uklanjamo warningCSS klase, i praznimo inpute
    function showMessage(res) {
      if (res === 'true') {
        notification.classList.remove('none');
        setTimeout(() => { notification.classList.add('none') }, 2000);
        for (const input of requiredFormInputs) {
          if (input.classList.contains(warningClass)) {
            input.placeholder = "";
            input.classList.remove(warningClass);
          }
          input.value = null;
        }
      }
    }
    //funkcija koja salje poruku

    function sendMessage() {

      const [fName, fEmail, fPhone, fMessage] = requiredFormInputs;

      fetch("https://formsubmit.co/ajax/f8bafe5f11a25d2253a4a8ddae1ac614", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: fName.value,
          email: fEmail.value,
          subject: fPhone.value,
          message: fMessage.value
        })
      }
      )
        .then(response => response.json())
        .then(data =>
          //moja funkcija koja obavestava korisnika o uspesnosti slanja
          //kao argument uzima poruku sa servera 
          showMessage(data.success))
        .catch(error => console.log(error));
    }
  }
  )
})();