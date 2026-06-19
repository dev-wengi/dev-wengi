# Mini Kubernetes

Category: Hard

## Project Overview

Build a Mini Kubernetes project that simulates basic container orchestration, scheduling workloads and managing service connectivity. The application should demonstrate core Kubernetes concepts in a simplified, educational implementation.

## Core Features

- Schedule containerized workloads or jobs to nodes
- Manage simple service discovery between components
- Monitor pod or container state and health
- Support deployment and lifecycle operations (create, update, delete)
- Implement basic networking between services
- Present the orchestration model clearly with a visual interface

## Technical Recommendations

- Backend: Go, Node.js, or Python for the orchestration engine
- Containerization: Docker or containerd for container management
- Networking: Implement overlay networks or port mapping for service communication
- Scheduling: Implement basic scheduling algorithms (round-robin, resource-based)
- API: REST or gRPC API for cluster management operations
- Dashboard: React, Vue, or a simple web interface for cluster visualization
- State Management: Track pod, node, and service states

## Success Criteria

- The system demonstrates core orchestration behavior
- Workloads are scheduled and managed consistently
- The implementation communicates the Kubernetes concept effectively
- Services can discover and communicate with each other
- The dashboard provides clear visibility into cluster state
