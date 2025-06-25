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
* Easy to deploy on Node.js-compatible hosting platforms.
* Can be extended with features like chat rooms, message persistence, and authentication.

---

## 🚀 Live Demo

Check out the live app here:
👉 [https://chat-app-4nio.onrender.com](https://chat-app-4nio.onrender.com)

---

## 💻 How to Run Locally

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

## 🌐 Deployment Instructions (Render.com)

### 📦 Steps:

1. Push your complete project to a **GitHub repository**

2. Go to [https://render.com](https://render.com) and sign in

3. Click **New +** → **Web Service**

4. Connect your GitHub repository containing this project

5. Configure your Web Service:

   * **Name**: your choice (e.g. `chat-app`)
   * **Environment**: `Node`
   * **Build Command**: *(leave empty or type `npm install` if asked)*
   * **Start Command**:

     ```
     node server.js
     ```

6. Click **Create Web Service** and wait for deployment to complete

7. Access your live app via the public URL provided by Render (like [https://chat-app-4nio.onrender.com](https://chat-app-4nio.onrender.com))

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

