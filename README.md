# 🧠 Gbi Backend API

A RESTful backend built with **Express.js** that handles **Admin** and **User** management. This project uses **JWT-based authentication**, **Prisma ORM**, and role-based middleware for route protection. also uses **supabase** for database service.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (via Supabase)
- Railway (for deployment)
- JSON Web Tokens (JWT)

---

## 🔐 Authentication

Some routes are protected and require:

- A valid JWT in the `Authorization`.
- Some routes also require the admin to have **general(super) admin privileges**

---

### 🧑‍💼 Admin Routes

**Base URL**: `/api/admin`

| Method | Endpoint | Description          | Auth Required                                                                                                                            |
| ------ | -------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`  | `/`      | Get all admins       | ✅ `protect` <this is to check is the adminis authenticated>, `isGeneralAdmin`                                                           |
|        |
| `POST` | `/`      | Register a new admin | ✅ `protect`<this is to check is the adminis authenticated>, `isGeneralAdmin`<this is to check weather the user is general(super) admin> |

| `POST` | `/login` | Login admin | ❌ Public |

| `POST` | `/register` | Public admin registration | ❌ Public |

| `GET` | `/:id` | Get admin by ID | ✅ `protect`, `isGeneralAdmin` |

| `PUT` | `/:id` | Update admin by ID | ✅ `protect`, `isGeneralAdmin` |

| `DELETE` | `/:id` | Delete admin by ID | ✅ `protect`, `isGeneralAdmin` |

---

### 👤 User Routes

**Base URL**: `/api/user`

| Method   | Endpoint | Description       | Auth Required                                               |
| -------- | -------- | ----------------- | ----------------------------------------------------------- |
| `GET`    | `/`      | Get all users     | ✅ `protect`<this is to check is the adminis authenticated> |
| `POST`   | `/`      | Add new user      | ✅ `protect`                                                |
| `GET`    | `/:id`   | Get user by ID    | ✅ `protect`                                                |
| `PUT`    | `/:id`   | Update user by ID | ✅ `protect`                                                |
| `DELETE` | `/:id`   | Delete user by ID | ✅ `protect`                                                |

---

## 🔐 Auth Middleware Overview

- **`protect`**: Verifies JWT and adds user info to `req.admin`.
- **`isGeneralAdmin`**: Verifies if the user has a `assign the above req.use with generalAdmin by checking general admin credentials` role.

---

## 📦 Deployment

- **Backend**: [Railway](https://gbibackend-production.up.railway.app)`you should use this base url to connect with the backend`
- **Database**: [Supabase PostgreSQL](https://supabase.com/)

---
