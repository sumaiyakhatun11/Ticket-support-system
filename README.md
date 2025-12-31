# Assignment 7 - React Ticket Support System

A React + Vite application for managing customer support tickets and tracking ticket status.

## Project Structure

```
src/
├── components/
│   ├── Banner/        - Main banner section
│   ├── CartSection/   - Shopping cart functionality
│   ├── Navbar/        - Navigation bar
│   ├── TaskStatusSection/ - Task status display
│   └── FotterSection/ - Footer component
├── App.jsx           - Main application component
├── main.jsx          - Application entry point
├── App.css           - Application styles
└── index.css         - Global styles
```

## Features

- **Navigation Bar** - Header navigation component
- **Banner** - Hero/welcome section
- **Ticket Cart** - Shopping cart-style ticket management
- **Task/Ticket Status** - Display ticket status and tracking information
- **Footer** - Footer section
- **Customer Ticket Data** - Loads customer support tickets from JSON

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technology Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code quality tool
- **CSS** - Styling

## Data

Customer support tickets are loaded from `public/customersInfo.json`
