const TOKEN = "7535436707:AAGRBDJ5MoNBaw9FFrFIELODN18o52a_DeQ"
const CHAT_ID = '-1002626670088'
const submitBtn = document.querySelector("#service-button")
const usernameInput=document.querySelector("#username")
const phoneInput=document.querySelector("#phone")

let username;
let phone;

usernameInput.addEventListener("input", () => {
    username = usernameInput.value
})

phoneInput.addEventListener("input", () => {
    phone = phoneInput.value
})


const sendMessage = ()=> {
    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `Имя ${username} Телефон ${phone}`
        })
    })
}
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    sendMessage()
    usernameInput.value = ''
    phoneInput.value = ''
})




