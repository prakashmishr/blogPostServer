# Project Name

## Overview

This project provides a REST API for managing user authentication and blog posts. It includes secure signup and login functionalities with JWT token-based authentication and CRUD operations for blog posts.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Configure the .env file:**
    -MONGODB_URL = 'mongodb+srv://id:password@cluster0.drbse.mongodb.net/postDB?retryWrites=true&w=majority'
     //replace id and password with your credentials
    -JWTSECRET= mySecreat

## REST API Endpoints
### Authentication

## User Signup:

POST /auth/signup
Example: http://localhost:7005/auth/signup
User Login:

POST /auth/login
Example: http://localhost:7005/auth/login

## Blog Post CRUD API
Get All Posts:

GET /
Example: http://localhost:7005/posts
Add a New Post:

POST /
Example: http://localhost:7005/posts
Delete All Posts:

DELETE /
Example: http://localhost:7005/posts
Get a Single Post:

GET /:id
Example: http://localhost:7005/posts/:id
Update a Post:

PUT /:id
Example: http://localhost:7005/posts/:id
Delete a Single Post:

DELETE /:id
Example: http://localhost:7005/posts/:id
Security
JWT token is implemented to secure blog post transactions.
"# blogPostServer" 
