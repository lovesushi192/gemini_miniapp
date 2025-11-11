const tg = window.Telegram.WebApp;
tg.expand();

const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = sender === "user" ? "user-message" : "bot-message";
    msg.innerHTML = `<p>${text}</p>`;
    chat.appendChild(msg);
    chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
    const text = input.value.trim();
    if (!text) return;
    appendMessage("user", text);
    input.value = "";
    appendMessage("bot", "💭 Думаю...");

    // Отправка данных в бота
    tg.sendData(JSON.stringify({ message: text }));
}

sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", e => { if(e.key === "Enter") sendMessage(); });
