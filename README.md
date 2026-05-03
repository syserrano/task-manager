# My Tasks

A warm, minimal task manager built with Next.js and React. Add, complete, and delete tasks with your list saved automatically between sessions.

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- React (hooks: useState, useEffect)
- Tailwind CSS
- Google Fonts (Lora, DM Sans)
- localStorage for persistence

## Features

- Add and delete tasks
- Mark tasks complete with a custom circular checkbox
- Filter by All / Active / Done
- Progress bar showing completion percentage
- Tasks persist across page refreshes via localStorage
- Browser tab updates to show remaining task count

## How to Run

1. Clone the repository:
```bash
   git clone https://github.com/syserrano/task-manager.git
   cd task-manager
```

2. Install dependencies:
```bash
   npm install
```

3. Start the development server:
```bash
   npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## What I Learned

- How to manage and share state across multiple React components using props and callbacks
- How to safely use localStorage in Next.js by deferring reads to after component mount, avoiding SSR hydration mismatches
- How to derive computed values (filtered lists, progress percentage) from a single source of state rather than duplicating data
- How to use React's useEffect hook to sync state to external systems like localStorage and the document title
- How to build a cohesive UI design system using consistent fonts, spacing, and a warm color palette