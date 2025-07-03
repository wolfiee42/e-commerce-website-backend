# E-commerce-Website-Qtech

This is a backend for an e-commerce website built with Node.js, Express, TypeScript, and MongoDB (via Mongoose). It provides basic API endpoints for product management deployed on Vercel.

## Live Link & Client Side

[Live Link](https://e-commerce-website-backend-gules-nu.vercel.app)
[Client side repo](https://github.com/wolfiee42/e-commerce-website)

## Features

- **Express.js** server with TypeScript support
- **MongoDB** integration using Mongoose
- Basic **product API endpoints** (`/products`, `/product/:id`)
- Graceful error handling for unhandled promise rejections and uncaught exceptions

## Project Structure

```
.
├── app.ts                # Main application entry point
├── model.ts              # Mongoose product model
├── package.json          # Project metadata and scripts
├── .env                  # Environment variables (not committed)
├── .env.example          # Example environment variables
├── vercel.json           # Vercel deployment config
└── .vercel/              # Vercel project metadata (not committed)
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/wolfiee42/e-commerce-website-backend.git
   cd e-commerce-website-backend
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

3. **Configure environment variables:**

   - Copy `.env.example` to `.env` and fill in your values:
     ```
     DATABASE_URL=mongodb://localhost:27017/your-db
     PORT=5000
     ```

4. **Run the development server:**

   ```sh
   pnpm dev
   ```

   The server will start on the port specified in your `.env` file.

### Build

- **Build the project:**
  ```sh
  pnpm build
  ```

## API Endpoints

- `GET /`  
  Health check endpoint. Returns server status and timestamp.

- `GET /products`  
  Returns a list of all products.

- `GET /product/:id`  
  Returns a single product by its MongoDB ObjectId.

## Deployment

- **Vercel:**  
  The project includes a `vercel.json` for deployment configuration.
