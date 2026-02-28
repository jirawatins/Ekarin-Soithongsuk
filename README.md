# Portfolio Website (Ekarin Soithongsuk)

This repository contains the source code for a personal portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**, bundled using **Vite**. The project showcases various pages like Home, About, Expertise, Portfolio, and Contact with modern animations and responsive design.

---

## 🚀 Technologies Used

- **React 19** – Front-end library for building user interfaces
- **TypeScript** – Static typing for JavaScript
- **Vite** – Fast development build tool
- **Tailwind CSS** – Utility-first CSS framework
- **motion (Motion One)** – Lightweight animation library
- **react-router-dom** – Client-side routing
- **lucide-react** – Icon library
- **next-themes** – Theme (dark/light) support
- **recharts** – Charting library for React


---

## 📁 Project Structure

```
src/
 ├─ components/        # Reusable UI components and sections
 ├─ pages/             # Individual page components (Home, About, etc.)
 ├─ lib/               # Utility functions and data
 ├─ types/             # Shared TypeScript types and interfaces
 ├─ index.css          # Tailwind base styles
 ├─ main.tsx           # Application entry point
 └─ App.tsx            # Root component with router and layout
```

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18+) or Bun (v1+)
- Yarn, npm, or Bun for package management

### Installation

```bash
# using npm
npm install

# or using Bun
bun install

# or using yarn
yarn
```

### Running Locally

```bash
# start development server
npm run dev

# or with Bun
bun run dev
```

By default the app runs on port 3000. You can open your browser to [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
npm run preview   # to test the production build locally
```

### Lint / Type-check

```bash
npm run lint
```

---

## 🛠 Customization

- Tailwind configuration is defined in `tailwind.config.js`.
- Global styles in `src/index.css`.
- Routes are managed in `src/App.tsx` using React Router.
- Content (projects, stats, etc.) can be updated in `src/lib/data.ts`.

---

## 🎨 Features

- Dark/light theme toggle
- Page transitions and animations using Motion One
- Responsive layout with Tailwind CSS
- Clean, modern portfolio design

---

## 📄 License

This project is available under the [MIT License](LICENSE) (if applicable).

---

Feel free to fork and adapt it for your own portfolio!
