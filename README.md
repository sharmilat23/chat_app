# Chat App Frontend

This README details the frontend setup for a real-time chat application using HTML, CSS, and JavaScript with Socket.IO.

## Overview

This frontend application is designed to work in conjunction with a backend chat server, allowing users to join chat rooms, send and receive messages in real-time, and view active users and rooms. It uses Socket.IO for seamless real-time communication.

## Features

- Real-time messaging.
- User can join and leave chat rooms.
- Displays messages dynamically in the chat window.
- Shows active users in the current room.
- Lists all active chat rooms.
- Indicates when a user is typing a message.


## Setup

### Prerequisites

- Node.js and npm installed on your system
- Basic knowledge of HTML, CSS, and JavaScript

### Files Included

- `index.html`: The main HTML file
- `style.css`: Styling for the application
- `app.js`: JavaScript file handling the client-side logic
- `server.js`: Node.js backend server using Socket.IO


## Usage

### 1. Install dependencies for the backend

Open a terminal in the project directory and run:

```sh
npm install express socket.io
```

### 2. Start the backend server

```sh
node server.js
```
The backend will run on http://localhost:8000

### 3. Start the frontend

Open `index.html` in your browser using Live Server or by opening the file directly. (If using Live Server, it will typically run at http://127.0.0.1:5500)

### 4. Chat!

1. Enter your name and a room name, then join the room.
2. Start sending messages. You will see real-time updates, user lists, and room lists.


## Key Components

- **Socket.IO Client**: Establishes a connection with the backend server (see `app.js`).
- **Socket.IO Server**: Handles real-time events and room/user management (see `server.js`).
- **Event Listeners**: Handles chat messages, joining rooms, and displaying user and room lists.
- **UI Interactions**: Updates the chat display and shows user activities like typing.

## Event Handling

- `message`: For sending and receiving messages.
- `enterRoom`: For a user entering a chat room.
- `activity`: To show when a user is typing.
- `userList`: To display the list of users in a room.
- `roomList`: To display a list of active rooms.

## HTML Structure

- Forms for joining a room and sending messages.
- A display area for chat messages.
- Sections to show active users and chat rooms.

## CSS

`style.css` includes basic styles to organize the layout and appearance of the chat application.

## JavaScript

`app.js` contains the logic for connecting to the Socket.IO server, handling events, and updating the UI in response to server messages.


## Conclusion

This project provides a fully functional real-time chat application with both frontend and backend code. Use it as a starting point to learn about real-time web communication with Socket.IO.