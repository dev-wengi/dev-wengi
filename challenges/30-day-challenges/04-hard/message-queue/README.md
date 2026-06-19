# Message Queue

Category: Hard

## Project Overview

Build a Message Queue that provides reliable messaging between producers and consumers with ordering and delivery behavior. The application should demonstrate core message queuing concepts with guaranteed delivery and processing.

## Core Features

- Enqueue messages from producers with topics or routing keys
- Dequeue messages for consumers with pull or push mechanisms
- Support message acknowledgement, retry behavior, and dead-letter queues
- Track queue status, depth, and processing metrics
- Handle message ordering and priority if needed
- A clear interface for queue operations and monitoring

## Technical Recommendations

- Backend: Node.js, Go, or Python for message queue server implementation
- Communication: TCP, WebSockets, or HTTP for producer/consumer interaction
- Storage: In-memory storage with optional persistence for message durability
- Protocols: Implement AMQP-like or custom messaging protocols
- Ordering: Sequence numbers or partition keys for message ordering
- Dashboard: React, Vue, or a simple web interface for monitoring
- Networking: Socket programming or HTTP servers for queue operations

## Success Criteria

- Messages flow reliably from producers to consumers
- The queue supports basic delivery guarantees (at-least-once, at-most-once)
- The implementation shows a practical message queuing system
- Failed messages are handled with retries or dead-letter queues
- The dashboard provides clear visibility into queue metrics
