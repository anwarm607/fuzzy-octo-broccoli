# Your Project Name

Short description or tagline about your project.

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Getting Started

Brief instructions on how to get a copy of the project up and running on a local machine.

### Installation

Step-by-step guide on how to install and set up the project.

```bash
# Clone the repository
git clone https://github.com/anwarm607/fuzzy-octo-broccoli.git

# Navigate to the project directory
cd your-project

# Install dependencies
yarn
```

## Scripts

``bash
# Start the development server
yarn dev

# Build the project for production
yarn build
``

## Project Structure
The project follows a standard React application structure with the added benefits of Vite, Tailwind and daisyUI for faster development. Here are the key directories and files:

- src/: This is where the main source code resides.
  - assets/: Assets of the applications like icon and images
  - components/: React components used throughout the application.
      - Card.tsx
      - DrawerMenu.tsx
      - ...: Rest of the components
  - pages/: React components representing individual pages/screens.
      - home/: Home screen folder
        - components/: Components specific to home screen
          - categories/: categories component 
            - index.tsx 
          - ...
      - ...: Rest of the pages
  - App.tsx: The main entry point where routes are defined.
  - main.js: The entry file that renders the React app.
- public/: Static assets like images, fonts, etc.
- index.html: The HTML template used as the base for the app.
- vite.config.js: Vite configuration file.
- package.json: Project metadata, dependencies, and scripts.