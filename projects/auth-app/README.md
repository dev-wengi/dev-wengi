# Auth App

## Project Overview

Build a frontend authentication application that provides a complete user authentication flow including registration, login, and protected pages. This app consumes the Auth API to demonstrate a full-stack authentication system.

## Core Features

- User registration form with validation
- User login with email and password
- Protected routes that require authentication
- User profile page displaying account information
- Logout functionality
- Password reset request flow
- Responsive design for mobile and desktop
- Form validation and error handling

## Technical Recommendations

- Framework: React, Vue, or Svelte
- Routing: React Router, Vue Router, or SvelteKit routing
- State Management: React Context, Pinia, or Svelte stores for auth state
- HTTP Client: Axios or fetch API for API communication
- Form Handling: React Hook Form, VeeValidate, or similar
- Validation: Zod or Yup for schema validation
- Styling: Tailwind CSS or CSS Modules for clean, modern UI
- Storage: LocalStorage or sessionStorage for token persistence

## Pages/Views

- /register - User registration form
- /login - User login form
- /profile - Protected user profile page
- /forgot-password - Password reset request
- /reset-password - Password reset form with token
- /dashboard - Protected dashboard (optional)

## Success Criteria

- Users can register and login through a clean interface
- Protected routes redirect unauthenticated users to login
- Auth tokens are stored and sent with API requests
- The app handles loading, error, and success states gracefully
- The interface is responsive and accessible
