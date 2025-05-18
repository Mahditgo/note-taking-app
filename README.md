# 📝 Simple Note-Taking App

A minimal and cleanly structured note-taking app built with **TypeScript**, **Express**, and **Sequelize**.

---

## 🚀 Features

- Create, Read, Update, and Delete (CRUD) notes
- Clean architecture (separation of routes, controllers, services, etc.)
- Sequelize ORM with support for PostgreSQL / MySQL / SQLite
- TypeScript for better maintainability and safety
- Environment-based configuration with `.env`

---

## 📂 Project Structure

my-app/
├── src/
│ ├── config/ # Database and environment config
│ ├── controllers/ # Express route handlers (controllers)
│ ├── models/ # Sequelize models (e.g. Note)
│ ├── routes/ # Express routes
│ ├── services/ # Business logic layer
│ ├── middlewares/ # Custom middlewares (e.g. error handler)
│ ├── utils/ # custom error handler
| ├── validations/ # validate with zode
│ └── index.ts # App entry point
├── .env # Environment variables
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md



## 📌 Tech Stack

Node.js

Express

TypeScript

Sequelize

PostgreSQL





