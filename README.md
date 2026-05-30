# Andrew Baxter - Portfolio Site

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Welcome to the source code for my personal portfolio website, available live at **[andrewbaxter.dev](https://andrewbaxter.dev)**!

This portfolio was built from the ground up using **React**, **Vite**, and **Vanilla CSS** to deliver a highly interactive, dual-mode experience. I designed this site to not only showcase my projects but to serve as a technical demonstration of my front-end capabilities and design sensibilities.

> **Note to Employers/Recruiters:** Please feel free to explore the code! I focused on clean component architecture, responsive design, and performance optimization.

## Features

- **Dual-Mode Interface**: Toggle seamlessly between a modern, glassmorphic Graphic User Interface (GUI) and an interactive, fully-functional Command Line Interface (CLI) terminal.
- **Interactive Terminal**: The CLI mode supports standard Unix-like commands (e.g., `ls`, `cd`, `cat`, `clear`) allowing visitors to navigate the portfolio directories as if they were exploring a real filesystem.
- **Agentic AI Chatbot**: Includes a custom-built, floating AI assistant that can answer questions about my work history, technical skills, and featured projects using an integrated knowledge base.
- **Responsive Design**: Carefully optimized for both desktop and mobile devices, ensuring complex interfaces (like the CLI and Chatbot) work flawlessly on smaller screens and virtual keyboards.
- **Performance Optimized**: Built with Vite for rapid Hot Module Replacement (HMR) during development and highly optimized, minified bundles for production.

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Glassmorphism)
- **Icons**: Lucide React
- **Hosting**: Firebase Hosting

## Why I Built This

I wanted a portfolio that stood out from standard templates. By implementing a custom CLI and an AI Chatbot from scratch, I was able to deeply explore state management in React, create complex interactive UI components without relying on heavy third-party component libraries, and practice deploying a highly-optimized single-page application.

## Local Development

To run this project locally on your machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/asbaxter/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment

This project is configured to deploy to Firebase Hosting.

```bash
npm run build
npx firebase deploy --only hosting
```

## Contact

Feel free to reach out via the contact form on the live site or connect with me on [LinkedIn](https://www.linkedin.com/in/andrew-baxter-78575a235).
