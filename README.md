# Assignment 7 - React Customer Management App

A React + Vite application for managing customer information and cart operations.

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
- **Banner** - Hero section
- **Cart Management** - Shopping cart functionality
- **Task Status** - Display task status information
- **Footer** - Footer section
- **Customer Data** - Loads customer information from JSON

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

Customer information is loaded from `public/customersInfo.json`
