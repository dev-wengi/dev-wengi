# Chat App Backend

## Project Overview

Build a backend service for a real-time chat application that handles WebSocket connections, message broadcasting, and chat room management. This server powers the Chat App with reliable real-time messaging infrastructure.

## Core Features

- WebSocket server for real-time bidirectional communication
- Chat room creation and management
- Message broadcasting to room participants
- User presence tracking (join/leave events)
- Message persistence and history retrieval
- Typing indicator broadcasting
- Optional: Direct messaging between users
- Optional: Message read receipts

## Technical Recommendations

- Runtime: Node.js with Express and Socket.IO
- Language: TypeScript for type safety
- Real-time: Socket.IO for WebSocket communication with fallbacks
- Database: PostgreSQL, MongoDB, or Redis for message storage
- Caching: Redis for session management and presence data
- Validation: Zod or Joi for message validation
- Authentication: JWT middleware for socket connection auth
- Testing: Jest or Vitest for unit and integration tests
- Documentation: OpenAPI/Swagger for REST endpoints

## API Endpoints

- WS /socket.io - WebSocket connection endpoint
- GET /api/rooms - List available chat rooms
- POST /api/rooms - Create a new chat room
- GET /api/rooms/:id/messages - Get message history for a room
- POST /api/rooms/:id/messages - Send a message to a room
- GET /api/users/online - Get list of online users

## Socket Events

- connection - New client connection
- join_room - User joins a chat room
- leave_room - User leaves a chat room
- send_message - Broadcast message to room
- typing_start - User started typing
- typing_stop - User stopped typing
- user_online - User came online
- user_offline - User went offline

## Success Criteria

- WebSocket connections are stable and handle reconnections
- Messages are broadcast to all room participants instantly
- User presence is tracked accurately
- Message history is persisted and retrievable
- The server handles multiple concurrent connections efficiently
