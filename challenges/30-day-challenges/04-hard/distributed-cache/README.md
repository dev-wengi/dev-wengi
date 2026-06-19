# Distributed Cache

Category: Hard

## Project Overview

Build a Distributed Cache that provides a system for storing and retrieving cached data across multiple nodes with faster repeated access. The application should demonstrate core distributed caching concepts with data distribution and synchronization.

## Core Features

- Cache items with key/value storage across multiple nodes
- Retrieve cached values quickly with consistent hashing or routing
- Synchronize or distribute items across nodes
- Handle cache expiration, invalidation, and eviction policies
- A dashboard or interface to inspect cache state and node health
- Support for basic cache operations (get, set, delete)

## Technical Recommendations

- Backend: Node.js, Go, or Python for cache server implementation
- Communication: gRPC, HTTP, or WebSockets for inter-node communication
- Storage: In-memory storage (Redis-like) with optional persistence
- Consistency: Implement eventual consistency or strong consistency models
- Hashing: Consistent hashing for data distribution across nodes
- Dashboard: React, Vue, or a simple web interface for monitoring
- Networking: Socket programming or HTTP servers for node communication

## Success Criteria

- The cache improves repeated access performance significantly
- Data distribution behaves reliably across nodes
- The system demonstrates practical distributed caching concepts
- Cache operations are atomic and consistent
- The dashboard provides clear visibility into cache state
