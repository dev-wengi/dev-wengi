const form = document.getElementById("chat-form");
const input = document.getElementById("message-input");
const messagesContainer = document.getElementById("messages");

let messages = [];

function renderMessages() {
  messagesContainer.innerHTML = "";

  messages.forEach(msg => {
    const div = document.createElement("div");
    div.classList.add("message", msg.type);
    div.textContent = msg.text;
    messagesContainer.appendChild(div);
  });

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  // Add user message
  messages.push({ text, type: "user" });

  // Simulate reply
  setTimeout(() => {
    messages.push({ text: "Auto reply: " + text, type: "other" });
    renderMessages();
  }, 500);

  input.value = "";
  renderMessages();
});
