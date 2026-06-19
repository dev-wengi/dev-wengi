# Chat App

## Project Overview

Build a real-time chat application that allows users to send and receive messages instantly. This frontend-focused project demonstrates WebSocket communication and modern chat UI patterns.

## Core Features

- Real-time messaging with instant message delivery
- Multiple chat rooms or channels
- User presence indicators (online/offline status)
- Message history and persistence
- Typing indicators
- User avatars and display names
- Responsive chat interface for mobile and desktop
- Optional: Direct messaging between users

## Technical Recommendations

- Frontend: React, Vue, or Svelte with a chat-focused UI
- Real-time: Socket.IO client or native WebSockets
- State Management: React Context, Pinia, or Svelte stores for chat state
- Styling: Tailwind CSS or CSS Modules for clean chat bubble layouts
- HTTP Client: Axios or fetch for REST API calls
- Storage: LocalStorage or IndexedDB for message history
- Icons: SVG icons for chat actions and presence indicators

## Key Components

- ChatRoom - Main chat container with message list
- MessageInput - Text input for composing messages
- MessageBubble - Individual message display component
- UserList - Sidebar showing online users
- ChannelList - List of available chat channels
- TypingIndicator - Shows when another user is typing

## Success Criteria

- Users can send and receive messages in real time
- Messages appear in chronological order
- The interface is comfortable for conversation
- Real-time updates work without page refresh
- The application handles connection states gracefully
