# Habit Tracker

Category: Easy

## Project Overview

Build a Habit Tracker that helps users manage daily routines by adding habits, marking them as complete, and viewing progress over time. The application should provide a motivating interface for building consistent habits with visual progress indicators.

## Core Features

- Add, edit, and remove habits with custom names and frequencies
- Mark habits as completed for the current day
- Display streaks or completion indicators for each habit
- Persist habit data locally so progress remains after refresh
- View weekly or monthly completion history
- Clean and responsive interface that works on mobile and desktop

## Technical Recommendations

- Frontend: React, Vue, or vanilla JavaScript
- Storage: LocalStorage or IndexedDB for persisting habit data
- State Management: React Context, Vuex, or Zustand
- Date Handling: date-fns or Luxon for streak calculations and date formatting
- Styling: Tailwind CSS or CSS Modules for clean, card-based layouts
- Charts: Chart.js or Recharts for progress visualization (optional)

## Success Criteria

- Users can quickly track their daily routines
- The app preserves state in the browser across sessions
- Streak calculations are accurate and motivating
- The UI is intuitive enough for regular daily usage
- The application works smoothly on both mobile and desktop
