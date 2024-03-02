# Express.js Starter Template with TypeScript

Welcome to the Express.js starter template, configured to use TypeScript for robust and type-safe development. This template includes Prettier for code formatting and ESLint for maintaining code quality.

## What You'll Get After Installation

Upon cloning and setting up this Express.js starter template, you will have access to:

- A fully configured Express.js server with TypeScript.
- Pre-installed dependencies and dev dependencies for common tasks.
- Middleware functions to handle global errors, 404 Not Found responses, and request validation.
- Utility functions to send consistent and formatted responses and to wrap asynchronous route handlers.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/iibrahim70/express-mvc-template
cd express-mvc-template
```

### 2. Install Dependencies

Choose your preferred package manager to install the required dependencies:

Using `pnpm`:

```bash
pnpm i cors dotenv express http-status mongoose zod
```

Using `yarn`:

```bash
yarn add cors dotenv express http-status mongoose zod
```

Using `npm`:

```bash
npm install cors dotenv express http-status mongoose zod
```

### 3. Install Dev Dependencies

Next, install the development dependencies:

Using `pnpm`:

```bash
pnpm i -D @types/cors @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier prettier ts-node-dev typescript
```

Using `yarn`:

```bash
yarn add -D @types/cors @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier prettier ts-node-dev typescript
```

Using `npm`:

```bash
npm install --save-dev @types/cors @types/express @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier prettier ts-node-dev typescript
```

### 4. Set Environment Variables

Create a .env file in the root directory and add the following variables:

```bash
PORT=5000
DATABASE_URL=mongodb+srv://yourUserName:yourPassword@cluster0.jowkg7d.mongodb.net
DB_Name=collectionName
```

### 5. Build the TypeScript Code

To compile the TypeScript code, run:

Using `pnpm`:

```bash
pnpm build
```

Using `yarn`:

```bash
yarn build
```

Using `npm`:

```bash
npm build
```

### 6. Start the Server

Start the development server with:

Using `pnpm`:

```bash
pnpm start:dev
```

Using `yarn`:

```bash
yarn start:dev
```

Using `npm`:

```bash
npm start:dev
```

The server should now be running at `http://localhost:5000/`.

### 7. Prettier and Linting

This template comes pre-configured with Prettier for code formatting and ESLint for linting.

- **Formate Code With Prettier**
  Ensure consistent code style by formatting with Prettier:

Using `pnpm`:

```bash
pnpm prettier
```

Using `yarn`:

```bash
yarn prettier
```

Using `npm`:

```bash
npm prettier
```

- **Automatically Fix Prettier Errors**
  Fix any Prettier formatting errors automatically:

Using `pnpm`:

```bash
pnpm prettier:fix
```

Using `yarn`:

```bash
yarn prettier:fix
```

Using `npm`:

```bash
npm prettier:fix
```

- **Lint Code With EsLint**
  Maintain code quality and catch potential errors with ESLint:

Using `pnpm`:

```bash
pnpm lint
```

Using `yarn`:

```bash
yarn lint
```

Using `npm`:

```bash
npm lint
```

- **Automatically Fix ESLint Errors**
  Fix ESLint errors and adhere to code standards:

```bash
pnpm lint:fix
```

or

```bash
yarn lint:fix
```

or

```bash
npm lint:fix
```

## Adding Routes

To add new routes to your Express.js application, follow these guidelines:

1. **Create your route handler file** (e.g., `routes/ExampleRoute.ts`) and import it.

2. **Define your routes inside `routes` array of objects with the following structure:**

```bash
const routes = [
  { path: '/routesPath', route: ExampleRoute },
   // Add more routes as needed
];
```

Replace `/routesPath` with your desired route path, and `ExampleRoute` with the imported route

Feel free to explore and modify the template to suit your project needs. If you have any questions or run into issues, don't hesitate to reach out for assistance.

Happy coding! 🚀
