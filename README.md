# Pintree - A Modern Bookmark Manager

This project is a refactored version of an online bookmark manager, built with a modern frontend stack including React, TypeScript, and Tailwind CSS.

## Core Features

*   **Modern UI/UX Design**: A clean and intuitive user interface.
*   **Robust Component Architecture**: Built with `React` and `TypeScript` for a scalable and maintainable codebase.
*   **Responsive & Customizable Styling**: Utilizes `Tailwind CSS` for a utility-first CSS workflow.
*   **Lightweight State Management**: Managed by `Zustand` for efficient and simple state handling.
*   **Blazing Fast Development**: Powered by `Vite` for an instant server start and lightning-fast HMR.
*   **Optimized for Deployment**: Configured for seamless deployment on `Cloudflare Pages`.

## Tech Stack

*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Zustand](https://github.com/pmndrs/zustand)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and `npm` (or `yarn`/`pnpm`) installed on your machine.

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

## Deployment

This project is optimized for deployment on **Cloudflare Pages**.

1.  **Push to Git**: Push your code to a GitHub or GitLab repository.
2.  **Connect Git Repository**: In the Cloudflare dashboard, create a new Pages project and connect it to your Git repository.
3.  **Framework Preset**: Select `Vite` as the framework preset.
4.  **Build Command**: Set the build command to `npm run build`.
5.  **Output Directory**: Set the output directory to `dist`.
6.  **Save and Deploy**: Click "Save and Deploy" to initiate the deployment.
