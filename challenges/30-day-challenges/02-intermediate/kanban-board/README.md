# Kanban Board

Category: Intermediate

## Project Overview

Build a Kanban Board that enables users to organize tasks into columns, move cards between stages, and manage workflows visually. The application should provide a flexible task management experience with drag-and-drop functionality.

## Core Features

- Create task cards with titles, descriptions, and optional tags
- Drag and drop cards between columns (To Do, In Progress, Done)
- Add, edit, and delete cards or columns
- Persist board state locally so changes remain after refresh
- Optional: Assign tasks to team members or set due dates
- A responsive, flexible layout

## Technical Recommendations

- Frontend: React, Vue, or Svelte with drag-and-drop libraries
- Drag and Drop: react-dnd, SortableJS, or Vue.Draggable for card movement
- Storage: LocalStorage or IndexedDB for persisting board state
- State Management: React Context, Vuex, or Svelte stores
- Styling: Tailwind CSS or CSS Modules for clean, column-based layouts
- Icons: SVG icons for task actions and column headers

## Success Criteria

- Users can manage workflow stages intuitively
- The board supports dynamic task movement with smooth animations
- Cards and columns can be created, edited, and deleted easily
- The app feels stable and polished for task organization
- The interface is responsive and works on different screen sizes
