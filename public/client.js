const socket = io();

const form = document.getElementById("chat-form");
const input = document.getElementById("m");
const usernameInput = document.getElementById("username");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const message = input.value.trim();

  if (!username) {
    alert("Please enter your name");
    return;
  }

  if (message) {
    socket.emit("chat message", {
      username: username,
      message: message
    });
    input.value = "";
  }
});

// Receive messages
socket.on("chat message", (data) => {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${data.username}</strong> [${data.time}]: ${data.message}`;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});
