# Realtime Chat

Category: Intermediate

## Project Overview

Build a Realtime Chat application that supports live message exchange between users with an instantly updating conversation view. The application should provide a smooth chat experience with real-time messaging capabilities.

## Core Features

- Send and receive messages in real time
- Display conversation history with timestamps
- Show participant presence or typing state
- Support multiple chat rooms or channels
- Optional: Direct messaging between users
- Responsive chat interface

## Technical Recommendations

- Frontend: React, Vue, or Svelte with a chat-focused UI
- Backend: Node.js with Express and Socket.IO for WebSocket communication
- Real-time: Socket.IO, WebSockets, or Pusher for live messaging
- State Management: React Context, Vuex, or Svelte stores for chat state
- Styling: Tailwind CSS or CSS Modules for clean chat bubble layouts
- Storage: LocalStorage or a backend database for message history

## Success Criteria

- Users can chat live without page refresh
- Messages appear clearly and in chronological order
- The interface is comfortable for conversation
- Real-time updates are delivered reliably
- The application handles connection states gracefully
