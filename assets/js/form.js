fetch("https://formsubmit.co/ajax/f8bafe5f11a25d2253a4a8ddae1ac614", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));