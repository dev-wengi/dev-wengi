# Code Review Bot

Category: Advanced

## Project Overview

Build a Code Review Bot that evaluates code snippets, identifies issues, and provides constructive feedback for improvement. The application should act as an automated reviewer that helps developers write better code.

## Core Features

- Accept code input from users in multiple languages
- Analyze code for style, logic, and best practices
- Offer clear review comments and suggestions
- Highlight potential bugs or maintainability concerns
- Provide severity ratings for identified issues
- A user-friendly review interface with code highlighting

## Technical Recommendations

- Frontend: React, Vue, or Next.js with a code editor and review layout
- AI Integration: OpenAI API, Anthropic API, or similar LLM service
- Backend: Node.js with Express or Next.js API routes for AI analysis
- Code Highlighting: Prism.js, highlight.js, or Monaco Editor for syntax highlighting
- State Management: React Context, Zustand, or Vuex for code and review state
- Styling: Tailwind CSS or CSS Modules for clean, editor-focused layouts
- Language Support: Configure prompts for multiple programming languages

## Success Criteria

- Users receive helpful code review feedback with specific examples
- The tool explains issues clearly with actionable suggestions
- Code analysis covers style, logic, and best practices
- The final app feels like a trustworthy code review assistant
- The application handles API errors and loading states gracefully
