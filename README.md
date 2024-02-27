# Express.js Starter Template with TypeScript

This is a basic Express.js starter template configured to use TypeScript for development. It includes Prettier for code formatting and linting for maintaining code quality.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/iibrahim70/express-mvc-template
cd express-mvc-template
```

### 2. Install Dependencies

```bash
yarn
```

### 3. Set Environment Variables
Create a .env file in the root directory and add the following variables:

```bash
PORT=5000
DATABASE_URL=dbUrl
DB_Name=dbName
```

### 4. Build the TypeScript Code

```bash
yarn build
```

### 5. Start the Server

```bash
yarn start:dev
```

The server should now be running at `http://localhost:5000/`.


### Prettier and Linting

This template includes Prettier for code formatting and ESLint for linting. You can format the code using:

```bash
yarn prettier
```

You can also fix prettier errors automatically with:

```bash
yarn prettier:fix
```

And lint the code using:

```bash
yarn lint
```

You can also fix linting errors automatically with:

```bash
yarn lint:fix
```