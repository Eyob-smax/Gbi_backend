# 🧠 Gbi Backend API

A RESTful backend built with **Express.js** that handles **Admin** and **User** management.  
This project includes:

- **JWT-based authentication**
- **Prisma ORM**
- **Role-based middleware protection**
- **Supabase** as a PostgreSQL database service
- **Railway** for backend deployment

---

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **Prisma ORM**
- **PostgreSQL** (via Supabase)
- **Railway** (deployment)
- **JWT** (JSON Web Tokens for auth)

---

## 🔐 Authentication

Some routes are protected and require:

- A valid **JWT token** in the `Authorization` header as `Bearer <token>`
- Some routes require the admin to have **general (super) admin privileges**

---

## 🧑‍💼 Admin Routes

**Base URL**: `/api/admin`

| Method   | Endpoint    | Description               | Auth Middleware                |
| -------- | ----------- | ------------------------- | ------------------------------ |
| `GET`    | `/`         | Get all admins            | ✅ `protect`, `isGeneralAdmin` |
| `POST`   | `/`         | Register a new admin      | ✅ `protect`, `isGeneralAdmin` |
| `POST`   | `/login`    | Login admin               | ❌ Public                      |
| `POST`   | `/register` | Public admin registration | ❌ Public                      |
| `GET`    | `/:id`      | Get admin by ID           | ✅ `protect`, `isGeneralAdmin` |
| `PUT`    | `/:id`      | Update admin by ID        | ✅ `protect`, `isGeneralAdmin` |
| `DELETE` | `/:id`      | Delete admin by ID        | ✅ `protect`, `isGeneralAdmin` |

> 🔐 `protect` checks if the admin is authenticated.  
> 🛡️ `isGeneralAdmin` checks if the authenticated admin has general/super admin privileges.

---

## 👤 User Routes

**Base URL**: `/api/user`

| Method   | Endpoint | Description       | Auth Middleware |
| -------- | -------- | ----------------- | --------------- |
| `GET`    | `/`      | Get all users     | ✅ `protect`    |
| `POST`   | `/`      | Add a new user    | ✅ `protect`    |
| `GET`    | `/:id`   | Get user by ID    | ✅ `protect`    |
| `PUT`    | `/:id`   | Update user by ID | ✅ `protect`    |
| `DELETE` | `/:id`   | Delete user by ID | ✅ `protect`    |

> 🔐 All user routes are protected and require a valid JWT token.

---

## 🧱 Auth Middleware Overview

- **`protect`**  
  Verifies JWT token and adds the authenticated admin info to `req.admin`.

- **`isGeneralAdmin`**  
  Checks if the authenticated admin has a `generalAdmin` role by validating credentials attached to `req.admin`.

---

## 🌍 Deployment Info

- **Backend (API Base URL)**:  
  [https://gbibackend-production.up.railway.app](https://gbibackend-production.up.railway.app)

  > Use this base URL when consuming API endpoints.

- **Database**:  
  Hosted on **[Supabase PostgreSQL](https://supabase.com/)**

---

## 📁 Project Folder Structure

gbi-backend/
├── auth/
│ └── auth.js # Auth logic (JWT generation, etc.)
│
├── controller/
│ ├── admin.controller.js # Admin CRUD and auth handlers
│ └── user.controller.js # User CRUD handlers
│
├── middleware/
│ ├── isAuthenticated.js # JWT verification middleware
│ └── adminAuth.js # Middleware to verify general admin
│
├── model/
│ └── DatabaseConfig.js # Database configuration/setup
│
├── prisma/
│ ├── schema.prisma # Prisma schema file
│ └── migration/ # Contains migration history
│
├── routes/
│ ├── admin.routes.js # Admin route definitions
│ └── user.routes.js # User route definitions
│
├── utils/
│ └── utils.js # Utility functions
│
├── server.js # Entry point for Express server
└── README.md # This file

```

```
