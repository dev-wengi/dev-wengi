# Auth API

## Project Overview

Build a robust authentication API that handles user registration, login, session management, and protected route access. This backend service provides secure authentication endpoints that can be consumed by various client applications.

## Core Features

- User registration with email and password
- User login with JWT token generation
- Password hashing and secure storage
- Protected route middleware
- Token refresh mechanism
- User profile management
- Password reset functionality
- Email verification (optional)

## Technical Recommendations

- Runtime: Node.js with Express or Fastify
- Language: TypeScript for type safety
- Database: PostgreSQL or MongoDB for user data storage
- Authentication: JWT (JSON Web Tokens) for stateless auth
- Password Hashing: bcrypt or argon2 for secure password storage
- Validation: Zod or Joi for input validation
- Security: Helmet for security headers, CORS configuration
- Testing: Jest or Vitest for unit and integration tests
- Documentation: OpenAPI/Swagger for API documentation

## API Endpoints

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login and receive JWT tokens
- POST /api/auth/refresh - Refresh access token
- POST /api/auth/logout - Invalidate current session
- GET /api/auth/profile - Get current user profile
- PUT /api/auth/profile - Update user profile
- POST /api/auth/forgot-password - Request password reset
- POST /api/auth/reset-password - Reset password with token

## Success Criteria

- Users can register and login securely
- Passwords are hashed and never stored in plain text
- JWT tokens are generated and validated correctly
- Protected routes return 401 for unauthenticated requests
- The API is well-documented and testable
- Error handling is consistent and informative
