# 📱 Real-Time Chat Application

A simple, real-time web-based chat application built using **Node.js**, **Express**, and **Socket.IO**. This project allows multiple users to chat simultaneously, display usernames and timestamps, and get smart, context-aware replies from random bot users.

---

## 📌 Features

* Real-time, bi-directional messaging using WebSockets (via Socket.IO)
* Users can enter their own usernames
* Messages display with timestamps
* Random bot users simulate replies
* Bots intelligently respond to greetings like `hi`, `hello`, `how are you?`, etc.
* Clean, simple UI with message history

---

## 📑 Approach

The application uses **Node.js with Express** to serve a static frontend, while **Socket.IO** establishes a real-time WebSocket connection between clients and the server.
Whenever a user sends a message:

* It's broadcast to all connected clients in real-time.
* A simulated random bot user responds with either a context-aware reply (if a keyword is detected) or a random fallback message after a short delay.
* All messages are timestamped and visible across connected clients instantly.

---

## ⚙️ Tech Stack / Libraries Used

### 🖥️ Backend:

* **Node.js**
* **Express**
* **Socket.IO**

### 🎨 Frontend:

* **HTML**
* **CSS**
* **Vanilla JavaScript**
* **Socket.IO Client**

---

## ✅ Pros

* Real-time communication without page reloads.
* Lightweight, clean, and beginner-friendly code.
* Smart simulated bots to make chat interactive.
* Easy to deploy on Node.js-compatible hosting platforms (like **Render** or **Railway**).
* Can be extended with features like chat rooms, message persistence, and authentication.

---

## 🚀 How to Run Locally

1️⃣ Install dependencies:

```bash
npm install
```

2️⃣ Start the server:

```bash
node server.js
```

3️⃣ Open your browser at:

```
http://localhost:3000
```

Open in multiple tabs to test real-time messaging.

---

## 🌐 Deployment

> ⚠️ **Note:** This app cannot be hosted on GitHub Pages as it requires a Node.js backend and WebSocket server.

✅ Recommended hosting:

* **Render.com**
* **Railway.app**
* **Glitch.com** (for quick testing)

**Start Command for hosting:**

```
node server.js
```

---

## 📁 Project Structure

```
chat-app/
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
├── package.json
├── server.js
├── .gitignore
├── README.md
```

---

## 🙌 Credits

Built as a simple demonstration project to practice real-time web apps with Node.js, Express, and Socket.IO.

