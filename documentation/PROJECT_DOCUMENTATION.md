# Project Documentation

## Overview

This project is a web application built with [Next.js](https://nextjs.org) using the modern App Router architecture. It leverages React Server Components and dynamic routing to build a scalable, modular, and maintainable application. The project appears to focus on collecting and processing user information through multiple steps, including login, personal info, bank info, internship info, verification, and thank-you pages.

## Project Structure

- **src/app/**  
  Contains the main Next.js app routes and pages organized into feature folders:  
  - `login` — user authentication page  
  - `bank-info` — bank-related information pages  
  - `personal-info/[id]` — dynamic route capturing user-specific personal info  
  - `internship-info` — internship-related pages  
  - `verify-info` — verification step pages  
  - `thank-you` — post-submission confirmation page  
  Each folder under `src/app` includes a `page.js` file representing the React Server Component for that route.

- **src/api/**  
  Holds API route handlers separated by domain, e.g.,  
  - `bank/route.js` — API functionality related to bank info  
  - `auth/route.js` — authentication API handlers  
  - `trainee/[id]/route.js` — dynamic API routes for trainee information  
  Routes are defined by exporting HTTP method handlers (GET, POST, PATCH, DELETE, etc.) in these `route.js` files following Next.js Route Handlers.

- **src/components/**  
  Contains reusable React components such as form navigation and form wrappers that help organize UI and UX logic consistently across pages.

- **src/lib/**  
  Includes utility modules like:  
  - `auth.js` for authentication utilities  
  - `cryptoUtil.js` for cryptographic functions  
  - `db.js` for database interaction utilities

- **src/schema/**  
  Presumed to hold schema definitions, likely for validation or data structure modeling, for example, `auth.js` schema file.

## Routing and Dynamic Routes

- Utilizes Next.js App Router conventions with folders representing routes and `page.js` files as server components.
- Dynamic routing is demonstrated with folders named `[id]` to capture parameters passed in the URL, allowing page and API routes to serve data dynamically per user or entity.

## API Route Handlers

- Implemented in `route.js` files within domain-specific folders inside `src/api`.
- Each handler exports functions corresponding to HTTP methods (e.g., GET, POST) to handle requests and responses in a RESTful manner.

## Features Summary

- **Authentication:** Login page and API routes handle user authentication.
- **User Data Collection:** Personal info, bank details, internship info collected across steps.
- **Verification:** Dedicated verification pages to review entered data before submission.
- **Thank You:** Confirmation page signaling process completion.

## Utilities and Helpers

- Authentication and crypto utilities abstract common security functions.
- Database utilities provide a common layer for data access and manipulation.

## Coding Conventions and Best Practices

- Follows Next.js App Router paradigm emphasizing server components for pages.
- Uses dynamic routing patterns effectively for scalability.
- Structures API routes with Next.js Route Handlers exporting HTTP method functions.
- Organizes reusable UI components separately for maintainability.
- Utilizes utility libraries to encapsulate domain logic.
- README contains basic starter instructions generated from create-next-app (can be extended for project specifics).

## Getting Started

Refer to the existing README instructions for running the project locally:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000](http://localhost:3000) in the browser.

## Further Recommendations

- Extend README with detailed API documentation and component usage.
- Add code comments in complex or non-obvious logic.
- Maintain consistent styling and error handling for robustness.

---

*This document summarizes the current state and structure of the project to help developers onboard and contribute effectively.*