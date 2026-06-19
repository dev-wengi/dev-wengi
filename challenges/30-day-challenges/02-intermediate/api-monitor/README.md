# API Monitor

Category: Intermediate

## Project Overview

Build an API Monitor that lets users check endpoint status and review API health in a monitoring dashboard. The application should provide real-time or scheduled health checks for APIs with clear status reporting and historical data.

## Core Features

- Monitor API endpoints for availability and response time
- Show response status codes and uptime summaries
- Display recent check results with timestamps
- Configure check intervals for different endpoints
- Visual indicators for healthy, degraded, and down services
- Responsive layout for monitoring at a glance

## Technical Recommendations

- Frontend: React, Vue, or Svelte with a dashboard-focused layout
- Backend: Node.js with Express or a serverless function for health checks
- Scheduling: node-cron or setInterval for periodic checks
- Storage: LocalStorage, IndexedDB, or a simple backend database for history
- Charts: Chart.js or Recharts for uptime and response time visualization
- Styling: Tailwind CSS or CSS Grid for dashboard panels
- HTTP Client: Axios or fetch for making API requests

## Success Criteria

- Users can track API status easily with clear visual indicators
- Monitoring data is presented clearly with charts and summaries
- The dashboard supports simple reliability checks
- Historical data is stored and displayed meaningfully
- The application handles network errors gracefully
