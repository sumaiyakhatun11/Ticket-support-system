# Assignment 7 - React Ticket Support System

React + Vite app for browsing customer support tickets, managing a cart-like queue, and tracking ticket status in a streamlined UI.

## Overview

- Purpose: manage customer support tickets with quick navigation, cart-style selection, and status tracking.
- Audience: support agents or learners practicing React state management and UI composition.
- Data source: static JSON dataset at public/customersInfo.json.

## Tech Stack

- React 19 + React DOM 19
- Vite 7 (dev/build tooling)
- Tailwind CSS 4 + DaisyUI (styling)
- React Icons, React Toastify (UI utilities)
- ESLint 9 (linting)

## Core Features

- Navigation bar and hero banner for quick context.
- Ticket cart to collect/select tickets for action.
- Task/ticket status display to visualize current progress.
- Footer with supporting links/info.
- Static customer data loaded from public/customersInfo.json.

## Dependencies

- Runtime: @tailwindcss/vite, react, react-dom, react-icons, react-toastify, tailwindcss
- Dev: @eslint/js, @types/react, @types/react-dom, @vitejs/plugin-react, daisyui, eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, vite

## Run Locally (step-by-step)

1) Install Node.js 14+ and npm.
2) Install packages: 
```bash
npm install
```
3) Start dev server:
```bash
npm run dev
```
4) Open http://localhost:5173 in your browser.
5) Optional: production build & preview
```bash
npm run build
npm run preview
```

## Live Links & Resources

- Live demo: https://dapper-dragon-1506d9.netlify.app/
