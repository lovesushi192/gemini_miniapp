const tg = window.Telegram.WebApp;
tg.expand();

const chat = document.getElementById("chat");
const input = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// При нажатии кнопки — отправляем сообщение в бота
sendBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  appendMessage("user", text);
  tg.sendData(JSON.stringify({ message: text })); // ← отправляем боту
  input.value = "";
});

function appendMessage(role, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", role);
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}
