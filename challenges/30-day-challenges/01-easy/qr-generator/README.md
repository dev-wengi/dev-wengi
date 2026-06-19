# QR Generator

Category: Easy

## Project Overview

Build a QR Generator that lets users create QR codes from text or URLs and present the result clearly. The application should provide a simple interface for generating, previewing, and downloading QR codes.

## Core Features

- Input text or a URL to generate a QR code
- Display the QR image immediately after generation
- Allow downloading the QR code as an image file
- Provide error feedback for invalid or empty input
- Optional: Customize QR code colors or size
- Responsive design for mobile and desktop

## Technical Recommendations

- Frontend: React, Vue, or vanilla JavaScript
- QR Generation: qrcode.js, QRCode.js, or a similar library for generating QR codes
- Canvas: HTML5 Canvas API for rendering QR codes
- Download: Blob API and download attribute for saving QR images
- Styling: Tailwind CSS or CSS Modules for clean, centered layouts
- Validation: Simple input validation before generating QR codes

## Success Criteria

- Users can generate a valid QR code instantly
- The output is easy to use and visually clear
- Download functionality works reliably
- The interface is polished and functional
- The application handles edge cases gracefully
