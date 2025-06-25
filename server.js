const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (data) => {
    const msgWithTime = {
      username: data.username,
      message: data.message,
      time: new Date().toLocaleTimeString(),
    };

    io.emit("chat message", msgWithTime);

    // Simulate smart reply from random bot after a delay
    setTimeout(() => {
      const botUsernames = [
        "John",
        "Mahesh",
        "Suresh",
        "Ananya",
        "Priya",
        "David",
        "Sneha",
        "Karthik",
        "Aisha"
      ];

      const userMessage = data.message.toLowerCase();

      let botReply = "";

      if (userMessage.includes("hi") || userMessage.includes("hello")) {
        botReply = "Hello there! 👋";
      } else if (userMessage.includes("how are you")) {
        botReply = "I'm good, thank you! How about you? 😊";
      } else if (userMessage.includes("good morning")) {
        botReply = "Good morning! Have a great day ahead! ☀️";
      } else if (userMessage.includes("bye")) {
        botReply = "See you soon! 👋";
      } else if (userMessage.includes("what's up") || userMessage.includes("sup")) {
        botReply = "Not much, just chatting around! 😎";
      } else {
        // Fallback random reply
        const fallbackReplies = [
          "Cool! 😄",
          "Interesting... 🤔",
          "Haha, nice one!",
          "I agree with you. 👍",
          "Hmm... okay!",
          "That’s awesome!",
          "Wow, didn’t expect that!",
          "Tell me more!"
        ];
        botReply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
      }

      // Pick a random bot name
      const randomName = botUsernames[Math.floor(Math.random() * botUsernames.length)];

      // Emit bot reply
      io.emit("chat message", {
        username: randomName,
        message: botReply,
        time: new Date().toLocaleTimeString(),
      });
    }, 1500);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

http.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
