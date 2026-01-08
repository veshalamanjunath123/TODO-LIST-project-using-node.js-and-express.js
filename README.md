# TODO-LIST-project-using-node.js-and-express.js
A simple full-stack Todo application built using Node.js, Express.js, and MySQL. The backend exposes REST APIs to add todo items and store them in a database, while a separate frontend consumes these APIs. This project demonstrates CRUD basics, database connectivity, and full-stack application structure.
# Todo Application (Full Stack)

A simple full-stack Todo application built using **Node.js**, **Express.js**, **MySQL**, and a separate frontend.  
This project demonstrates how to connect a backend server to a database and perform basic CRUD operations.
 Project Structure

todo/
│
├── backend/          # Backend source code (Express + MySQL)
├── frontend/         # Frontend application (HTML/CSS/JS or React)
├── node_modules/     # Installed dependencies
├── package.json      # Project configuration and dependencies
├── package-lock.json # Dependency lock file
└── README.md         # Project documentation
 Features

- Add todo items
- Store todos in MySQL database
- REST API using Express.js
- CORS enabled for frontend-backend communication
- JSON-based request handling

---

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- MySQL
- mysql2
- CORS

### Frontend
- HTML, CSS, JavaScript (or framework used inside `frontend`)

---

 Backend Setup
 Install Dependencies

npm install
to run node Server.js

SQL code 
CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todoItems (
  id INT AUTO_INCREMENT PRIMARY KEY,
  itemDescription VARCHAR(255) NOT NULL
);
