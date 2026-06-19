# Distributed File Storage

Category: Hard

## Project Overview

Build a Distributed File Storage system that stores files across multiple nodes with redundancy and accessible retrieval. The application should demonstrate distributed storage principles with data replication and fault tolerance.

## Core Features

- Upload and store files in a distributed manner across nodes
- Retrieve files by key or path with consistent routing
- Maintain redundancy or replication across multiple nodes
- Show storage health, node status, and file distribution
- Handle node failures and data recovery
- A clean interface for file management and monitoring

## Technical Recommendations

- Backend: Node.js, Go, or Python for storage node implementation
- Communication: gRPC, HTTP, or WebSockets for inter-node communication
- Storage: Local filesystem or object storage with metadata tracking
- Replication: Implement replication factor and consistency protocols
- Hashing: Consistent hashing for file distribution across nodes
- Dashboard: React, Vue, or a simple web interface for monitoring
- Networking: Socket programming or HTTP servers for node communication

## Success Criteria

- Files are stored and retrieved reliably across nodes
- Data distribution is handled clearly with proper replication
- The system demonstrates distributed file storage principles
- Node failures are handled gracefully with data recovery
- The dashboard provides clear visibility into storage health
