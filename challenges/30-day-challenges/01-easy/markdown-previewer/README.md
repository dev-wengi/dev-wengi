# Markdown Previewer

Category: Easy

## Project Overview

Build a Markdown Previewer that lets users write Markdown content and instantly see a rendered preview side by side. The application should support common Markdown syntax and provide a clean, distraction-free writing environment.

## Core Features

- Text editor input for writing Markdown
- Live preview rendering the formatted Markdown in real time
- Support for headings, links, lists, code blocks, emphasis, and blockquotes
- Responsive layout that works in narrow and wide views
- Clean separation between input and preview panes
- Optional: Dark/light mode toggle for the editor

## Technical Recommendations

- Frontend: React, Vue, or vanilla JavaScript
- Markdown Parser: marked.js, markdown-it, or remark for parsing Markdown
- Syntax Highlighting: highlight.js or Prism.js for code blocks
- Styling: Tailwind CSS or CSS Modules for split-pane layout
- Editor: CodeMirror, Monaco Editor, or a simple textarea for input
- State Management: React hooks, Vue Composition API, or vanilla JS event handling

## Success Criteria

- Users can write Markdown and see the output immediately
- The preview is accurate and well-formatted
- Common Markdown elements render correctly
- The app is easy to use and visually polished
- The layout adapts well to different screen sizes
