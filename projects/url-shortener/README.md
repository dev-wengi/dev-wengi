# URL Shortener

## Project Overview

Build a URL shortener application that converts long URLs into short, shareable links. This project demonstrates API integration, URL validation, and clipboard functionality.

## Core Features

- Input a long URL and generate a shortened link
- Display the generated short URL clearly
- Allow copying the short link to the clipboard
- Handle invalid URLs with clear error feedback
- Optional: Track click counts for shortened URLs
- Optional: Custom short codes or aliases
- Optional: URL expiration dates
- Responsive layout for desktop and mobile

## Technical Recommendations

- Framework: React, Vue, or Svelte with a simple, focused layout
- Backend: Node.js with Express for URL shortening API
- Database: SQLite, PostgreSQL, or Redis for storing URL mappings
- URL Validation: Use the URL constructor or a validation library
- Clipboard: Navigator Clipboard API for copy functionality
- Styling: Tailwind CSS or CSS Modules for clean, centered layouts
- Short Code Generation: Random string generation or hash-based codes

## API Endpoints

- POST /api/shorten - Create a shortened URL
- GET /api/urls/:code - Get URL details and stats
- GET /api/urls - List all shortened URLs (optional)
- DELETE /api/urls/:code - Delete a shortened URL (optional)
- GET /:code - Redirect to the original URL

## Success Criteria

- Users can shorten URLs quickly and reliably
- The app includes validation and helpful messaging
- Copy functionality works smoothly
- The final product feels polished and complete
- The interface is intuitive and responsive
