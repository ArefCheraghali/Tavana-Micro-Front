# Tavana-Micro-Front

Version: 1.0.0

This project is a micro-frontend application built with React, Redux, and TypeScript. It features a modular architecture designed for scalability and maintainability, incorporating various UI components, configuration-driven pages, and common development tools.

## Key Features & Technologies

*   **Framework/Libraries:**
    *   React (`react`, `react-dom`)
    *   Redux (`@reduxjs/toolkit`, `react-redux`, `redux-persist`) for state management
    *   React Router (`react-router-dom`) for navigation
    *   Axios for HTTP requests
    *   Formik for form handling
    *   PrimeReact & React Bootstrap for UI components
    *   React Icons for icons
*   **Build Tools:**
    *   Webpack (`webpack`, `webpack-cli`, `webpack-dev-server`)
    *   Babel (`@babel/core`, `@babel/preset-react`, etc.) for JavaScript transpilation
*   **Language:** JavaScript (ES6+) and TypeScript (`typescript`, `@babel/preset-typescript`)
*   **Styling:** CSS (potentially with PostCSS and Autoprefixer, as seen in devDependencies)

## Available Scripts

In the project directory, you can run:

*   `yarn start` or `npm run start`
    Runs the app in development mode.
    Open [http://localhost:YOUR_PORT](http://localhost:YOUR_PORT) (check webpack config for port, often 8080 or similar) to view it in the browser.

*   `yarn start:live` or `npm run start:live`
    Runs the app in development mode with live reload and hot module replacement.

*   `yarn build` or `npm run build`
    Builds the app for production to the `dist` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.

*   `yarn build:dev` or `npm run build:dev`
    Builds the app in development mode (non-minified) to the `dist` folder.

*   `yarn build:start` or `npm run build:start`
    Serves the `dist` folder (production build) on port 3001.

## Getting Started

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone https://github.com/ArefCheraghali/Tavana-Micro-Front.git
    cd Tavana-Micro-Front
    ```

2.  **Install dependencies:**
    If you use Yarn:
    ```bash
    yarn install
    ```
    Or if you use npm:
    ```bash
    npm install
    ```

3.  **Start the development server:**
    If you use Yarn:
    ```bash
    yarn start
    ```
    Or if you use npm:
    ```bash
    npm run start
    ```

## Folder Overview

*   **`src/Assets`**: Contains static files like global styles, fonts, and images.
*   **`src/Components`**: Houses reusable UI components that are used across different parts of the application. Examples include `Form`, `PageLayout`, `RenderDataTable`, `RenderMenu`, etc.
*   **`src/Configuration`**: Stores configuration files for different aspects of the application, such as page-specific settings (`BaseInfoCityPage.config.jsx`), menu items (`MenuItems.config.jsx`), and routing (`Routes.config.jsx`).
*   **`src/Context`**: Includes React Context API implementations, like `ToastContext.tsx` for managing application-wide notifications.
*   **`src/Examples`**: Provides sample implementations and usage patterns for various features or libraries, such as `RenderFormExample.tsx`, `SetReduxValueExample.js`, and `UseAxiosExample.js`.
*   **`src/Features`**: Contains Redux-related logic, including the root reducer (`rootReducer.js`), store configuration (`store.js`), and feature-specific slices (e.g., `user` slice).
*   **`src/Hooks`**: Defines custom React Hooks to encapsulate reusable logic, such as `useAxios.js` for API calls, `useErrorHandler.js` for error handling, and `useReduxHook.js` for interacting with Redux.
*   **`src/Pages`**: Contains the main page components of the application, which are typically composed of smaller components from the `Components` directory.

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [YOUR LICENSE HERE] License - see the LICENSE.md file for details (e.g., MIT License).

---

This is a comprehensive starting point. You can further customize it by adding more specific details about your project's goals, architecture decisions, deployment instructions, or contribution guidelines.
