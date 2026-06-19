# File Upload Service

## Project Overview

Build a file upload service that handles file uploads, validation, storage, and retrieval. This backend service provides a robust API for managing file uploads with support for multiple file types and sizes.

## Core Features

- Accept file uploads via multipart/form-data
- Validate file types, sizes, and formats
- Store files locally or in cloud storage (S3, GCS)
- Generate unique file identifiers and URLs
- Support for multiple file uploads
- File metadata extraction (name, size, type, dimensions)
- Optional: Image thumbnail generation
- Optional: File download and deletion endpoints

## Technical Recommendations

- Runtime: Node.js with Express or Fastify
- Language: TypeScript for type safety
- File Upload: Multer, formidable, or similar middleware
- Storage: Local filesystem, AWS S3, Google Cloud Storage, or Cloudinary
- Validation: Zod or Joi for file validation rules
- Image Processing: Sharp or Jimp for image manipulation
- Database: PostgreSQL or MongoDB for storing file metadata
- Security: Implement file type validation and size limits
- Testing: Jest or Vitest for unit and integration tests

## API Endpoints

- POST /api/upload - Upload a single file
- POST /api/upload/multiple - Upload multiple files
- GET /api/files/:id - Get file metadata
- GET /api/files/:id/download - Download a file
- DELETE /api/files/:id - Delete a file
- GET /api/files - List all uploaded files

## Success Criteria

- Files are uploaded successfully with proper validation
- File metadata is stored and retrievable
- The service handles large files efficiently
- File types are validated to prevent malicious uploads
- The API is well-documented and testable
