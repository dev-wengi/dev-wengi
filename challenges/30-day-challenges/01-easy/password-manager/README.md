# Password Manager

Category: Easy

## Project Overview

Build a Password Manager that stores login credentials securely and allows users to manage passwords in a simple interface. The application should help users organize their credentials while maintaining a sense of security and trust.

## Core Features

- Add new password entries with site name, username, and password
- Hide passwords by default with a reveal option
- Edit and remove stored credentials
- Preserve data locally between sessions
- Copy passwords to clipboard with a single click
- A clean and reassuring UI with security-focused design

## Technical Recommendations

- Frontend: React, Vue, or vanilla JavaScript
- Storage: LocalStorage or IndexedDB for client-side persistence
- Encryption: Use the Web Crypto API for basic password hashing or obfuscation
- Clipboard: Navigator Clipboard API for copy functionality
- Styling: Tailwind CSS or CSS Modules for a clean, trustworthy interface
- Icons: Use SVG icons for visibility toggles and actions

## Success Criteria

- Users can manage credentials easily and securely
- Password entries are presented securely and clearly
- The UI supports a strong yet approachable design
- Data persists reliably between sessions
- The application provides clear feedback for all actions
