# Andrew Baxter - Portfolio Site

Welcome to the source code for my personal portfolio website, available at [andrewbaxter.dev](https://andrewbaxter.dev) (or the corresponding Firebase hosting URL).

This portfolio was built from the ground up using **React**, **Vite**, and **Vanilla CSS** to deliver a highly interactive, dual-mode experience.

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
