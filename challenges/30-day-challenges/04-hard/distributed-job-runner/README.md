# Distributed Job Runner

Category: Hard

## Project Overview

Build a Distributed Job Runner that breaks work into jobs, distributes them across workers, and tracks execution progress. The application should demonstrate distributed task processing with load balancing and fault tolerance.

## Core Features

- Submit jobs or tasks to the system with priority and requirements
- Distribute work to available workers based on capacity
- Monitor job status and completion progress in real time
- Handle retries or failures gracefully with error recovery
- Track worker and job metrics (throughput, latency, success rate)
- Show worker and job metrics in a monitoring dashboard

## Technical Recommendations

- Backend: Node.js, Go, or Python for job runner and worker implementation
- Communication: gRPC, HTTP, or message queues for job distribution
- Queue: Redis, RabbitMQ, or a custom queue for job management
- Scheduling: Implement work-stealing or round-robin distribution algorithms
- State Management: Track job state (pending, running, completed, failed)
- Dashboard: React, Vue, or a simple web interface for monitoring
- Networking: Socket programming or HTTP servers for worker communication

## Success Criteria

- Jobs are executed across multiple workers efficiently
- Progress is visible and manageable with clear status updates
- The system illustrates distributed job coordination concepts
- Failed jobs are retried or handled appropriately
- The dashboard provides real-time visibility into job execution
