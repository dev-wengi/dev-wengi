# GitHub Explorer

## Project Overview

Build a GitHub Explorer application that allows users to search for GitHub profiles, view repositories, and explore user activity. This project demonstrates API integration with GitHub's public API and presents developer data in an organized interface.

## Core Features

- Search for GitHub users by username
- Display user profiles with avatar, bio, and statistics
- View user repositories with details (stars, forks, language)
- Filter repositories by language or sort by stars/forks
- Display user activity and contribution graph (optional)
- Show repository README preview
- Responsive design for mobile and desktop

## Technical Recommendations

- Framework: React, Vue, or Svelte with a profile-focused layout
- API: GitHub REST API (no authentication required for public data)
- HTTP Client: Axios or fetch API for API requests
- Styling: Tailwind CSS or CSS Modules for clean, GitHub-inspired layouts
- State Management: React Context, Pinia, or Svelte stores
- Routing: React Router, Vue Router, or similar for navigation
- Markdown: marked.js or similar for rendering README files
- Icons: SVG icons for repository stats and actions

## Key Views

- Search - User search input and results
- Profile - Detailed user profile page
- Repositories - List of user's repositories
- Repository - Individual repository details with README

## API Endpoints Used

- GET /users/{username} - Get user profile
- GET /users/{username}/repos - Get user repositories
- GET /repos/{owner}/{repo} - Get repository details
- GET /repos/{owner}/{repo}/readme - Get repository README

## Success Criteria

- Users can search for and find GitHub profiles
- User profiles display accurate and complete information
- Repository lists are well-organized and filterable
- The interface is clean and responsive
- API errors and loading states are handled gracefully
