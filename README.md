# Express.js Starter Template with TypeScript

This is a basic Express.js starter template configured to use TypeScript for development. It includes Prettier for code formatting and linting for maintaining code quality.

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
DATABASE_URL=Enter your database url
DB_Name=Enter your database collection name
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

- **Fix Prettier Errors Automatically**

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

- **Fix Linting Errors Automatically**

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

Feel free to use your preferred package manager (`pnpm`, `yarn`, or `npm`) throughout the installation and development process. If you have any questions or run into issues, don't hesitate to reach out for assistance. Happy coding! 🚀
