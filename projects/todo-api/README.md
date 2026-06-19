# Todo API

## Project Overview

Build a RESTful API for managing todo items with full CRUD operations. This backend service provides endpoints for creating, reading, updating, and deleting todos, serving as the data layer for a todo application.

## Core Features

- Create new todo items with title, description, and status
- Retrieve all todos or a single todo by ID
- Update todo items (title, description, completion status)
- Delete todo items
- Filter todos by status (pending, completed) or date
- Pagination for large todo lists
- Input validation and error handling
- Optional: User-specific todo lists with authentication

## Technical Recommendations

- Runtime: Node.js with Express or Fastify
- Language: TypeScript for type safety
- Database: SQLite, PostgreSQL, or MongoDB for todo storage
- Validation: Zod or Joi for request validation
- Authentication: JWT for user-specific todos (optional)
- Documentation: OpenAPI/Swagger for API documentation
- Testing: Jest or Vitest for unit and integration tests
- Error Handling: Centralized error handling middleware

## API Endpoints

- GET /api/todos - Get all todos (with optional filters)
- GET /api/todos/:id - Get a single todo by ID
- POST /api/todos - Create a new todo
- PUT /api/todos/:id - Update an existing todo
- DELETE /api/todos/:id - Delete a todo
- PATCH /api/todos/:id/complete - Mark todo as complete

## Request/Response Examples

**Create Todo:**
```json
POST /api/todos
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "dueDate": "2024-12-31"
}
```

**Response:**
```json
{
  "id": "1",
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "completed": false,
  "dueDate": "2024-12-31",
  "createdAt": "2024-01-15T10:00:00Z"
}
```

## Success Criteria

- All CRUD operations work correctly
- Input validation prevents invalid data
- The API returns appropriate HTTP status codes
- Error messages are clear and helpful
- The API is well-documented and testable
