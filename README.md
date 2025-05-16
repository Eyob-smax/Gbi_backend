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

gbi_backend/

├── controller/
│ ├── admin.controller.js
│ └── user.controller.js
├── middleware/
│ ├── isAuthenticated.js
│ └── adminAuth.js
├── model/
│ └── DatabaseConfig.js
├── prisma/
│ └── schema.prisma
│ └── migration/
├── routes/
│ ├── admin.routes.js
│ └── user.routes.js
├── utils/
│ └── utils.js
├── server.js
└── README.md

```

```
