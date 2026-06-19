# Rate Limiter

## Project Overview

Build a rate limiter service that controls the rate of requests to APIs or endpoints. This project demonstrates middleware patterns and request throttling techniques for protecting backend services from abuse.

## Core Features

- Rate limit requests based on IP address, user ID, or API key
- Configurable rate limits (requests per minute/hour)
- Multiple rate limiting algorithms (fixed window, sliding window, token bucket)
- Return appropriate HTTP status codes (429 Too Many Requests)
- Provide rate limit headers (X-RateLimit-Limit, X-RateLimit-Remaining)
- Optional: Distributed rate limiting with Redis
- Optional: Different rate limits for different endpoints or users

## Technical Recommendations

- Runtime: Node.js with Express or Fastify
- Language: TypeScript for type safety
- Storage: In-memory for single-instance, Redis for distributed
- Algorithms: Implement fixed window, sliding window, or token bucket
- Middleware: Express middleware or Fastify plugin pattern
- Headers: Standard rate limit response headers
- Testing: Jest or Vitest for unit and integration tests
- Monitoring: Optional metrics for rate limit hits

## Middleware Implementation

```typescript
// Example rate limiter middleware
app.use('/api/', rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later'
}));
```

## API Response Headers

- X-RateLimit-Limit - Maximum requests allowed in window
- X-RateLimit-Remaining - Requests remaining in current window
- X-RateLimit-Reset - Time when the rate limit resets
- Retry-After - Seconds until retry is allowed (on 429)

## Success Criteria

- Requests exceeding the limit receive 429 status code
- Rate limit headers are included in all responses
- The limiter handles concurrent requests correctly
- Different limit strategies can be configured
- The middleware integrates cleanly with Express/Fastify
