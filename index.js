// Add your code here
function submitData(name,email) {
    let formData = {
        name: name,
        email: email
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(resp => resp.json())
    .then(json => {
        let body = document.querySelector('body')
        body.textContent = json.id
    })
    .catch(error => {
        let body = document.querySelector('body')
        body.textContent = error.message
    })
}