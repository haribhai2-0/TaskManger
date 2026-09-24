# 📝 Task Manager — CRUD Application

A modern and user-friendly **Task Manager web application** built with **React.js** that allows users to create, view, update, search, filter, and delete tasks.

The project demonstrates the implementation of **CRUD operations**, React component-based architecture, state management, routing, and responsive UI design.

---

## 🚀 Project Overview

The Task Manager is designed to help users organize and manage their daily tasks from a simple dashboard.

Users can:

* Create new tasks
* View all tasks
* Update existing tasks
* Delete tasks
* Search for tasks
* Filter tasks based on their status
* Track total, pending, and completed tasks
* Navigate between the dashboard and task form
* Manage tasks through an interactive and responsive interface

The project is developed using a modern frontend architecture and can be connected to a backend API and database for persistent data storage.

---

## ✨ Features

### 1. 📊 Dashboard

The Home page provides an overview of the user's tasks.

It displays:

* Total number of tasks
* Number of pending tasks
* Number of completed tasks
* Complete task list
* Task status
* Task actions

Example:

```text
-------------------------------------------------
              TASK MANAGER
-------------------------------------------------

Total Tasks       Pending Tasks       Completed
    10                 6                  4

-------------------------------------------------
My Tasks

Search Tasks...          All | Pending | Completed

-------------------------------------------------
Task Title
Task Description

[Pending]                 [Edit] [Delete]
-------------------------------------------------
```

---

### 2. ➕ Create Task

Users can create a new task using the dedicated **TaskForm** page.

A task can contain information such as:

* Task title
* Description
* Status
* Date / deadline
* Other required task information

The form provides a simple interface for entering task details.

---

### 3. 👀 Read / View Tasks

All available tasks are displayed on the Home dashboard.

Each task contains:

* Title
* Description
* Status
* Edit button
* Delete button

The task list updates according to search and filter conditions.

---

### 4. ✏️ Update Task

Users can edit an existing task by clicking the **Edit** button.

The application navigates to the TaskForm page with the selected task information.

Example route:

```text
/task/:id
```

The user can modify the task and save the updated information.

---

### 5. 🗑️ Delete Task

Users can remove a task using the **Delete** button.

The selected task is removed from the task list.

Example API operation:

```text
DELETE /tasks/:id
```

---

### 6. 🔍 Search Tasks

The dashboard includes a search box that allows users to quickly find tasks.

For example:

```text
Search: React
```

The application displays tasks matching the search term.

---

### 7. 🔎 Filter Tasks

Tasks can be filtered according to their status.

Available filters:

```text
All
Pending
Completed
```

This makes it easier to focus on unfinished or completed work.

---

### 8. 📱 Responsive Design

The application is designed to work across different screen sizes.

Supported layouts include:

* Desktop
* Laptop
* Tablet
* Mobile

The UI uses responsive CSS/Tailwind utility classes to adapt the layout.

---

## 🛠️ Technologies Used

### Frontend

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React.js     | Building the user interface   |
| JavaScript   | Application logic             |
| JSX          | React component structure     |
| React Router | Page navigation               |
| Tailwind CSS | Styling and responsive design |
| Vite         | Development and build tool    |

### Backend

If the backend is included in your project:

| Technology | Purpose                 |
| ---------- | ----------------------- |
| Node.js    | Server-side runtime     |
| Express.js | REST API                |
| MongoDB    | Database                |
| Mongoose   | MongoDB object modeling |

---

## 🏗️ Project Architecture

The application follows a component-based React architecture.

```text
                    Task Manager
                         │
                         │
                    React App
                         │
              ┌──────────┴──────────┐
              │                     │
           Components             Pages
              │                     │
           Header.jsx        ┌──────┴──────┐
                             │             │
                          Home.jsx     TaskForm.jsx
                             │             │
                             └──────┬──────┘
                                    │
                              API Requests
                                    │
                                    ↓
                              Express Server
                                    │
                                    ↓
                                MongoDB
```

---

## 📁 Folder Structure

A possible project structure is:

```text
task-manager/
│
├── public/
│
├── src/
│   │
│   ├── Components/
│   │   └── Header.jsx
│   │
│   ├── Pages/
│   │   ├── Home.jsx
│   │   └── TaskForm.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

If you have a backend:

```text
task-manager/
│
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# 🔄 CRUD Operations

CRUD stands for:

```text
C → Create
R → Read
U → Update
D → Delete
```

The Task Manager implements all four operations.

---

## 1. Create

The user enters task information through the TaskForm.

```text
User
 ↓
TaskForm
 ↓
POST Request
 ↓
Backend
 ↓
Database
```

Example:

```http
POST /tasks
```

---

## 2. Read

The Home page retrieves the available tasks.

```text
Database
 ↓
Backend
 ↓
GET Request
 ↓
React Home
 ↓
Task List
```

Example:

```http
GET /tasks
```

---

## 3. Update

The user selects a task and clicks Edit.

```text
Task
 ↓
Edit
 ↓
TaskForm
 ↓
PUT Request
 ↓
Database
```

Example:

```http
PUT /tasks/:id
```

---

## 4. Delete

The user clicks Delete.

```text
Delete Button
 ↓
DELETE Request
 ↓
Backend
 ↓
Database
```

Example:

```http
DELETE /tasks/:id
```

---

# 🔗 Application Routes

The frontend can use routes such as:

| Route           | Purpose            |
| --------------- | ------------------ |
| `/`             | Home dashboard     |
| `/taskform`     | Create new task    |
| `/taskform/:id` | Edit existing task |

Example React Router configuration:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TaskForm from "./Pages/TaskForm";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/taskform"
                    element={<TaskForm />}
                />

                <Route
                    path="/taskform/:id"
                    element={<TaskForm />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
```

---

# 📦 Installation

## Step 1 — Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project:

```bash
cd task-manager
```

---

## Step 2 — Install Dependencies

```bash
npm install
```

---

## Step 3 — Start Development Server

```bash
npm run dev
```

The application will normally run at:

```text
http://localhost:5173
```

---

# 🔧 Required Dependencies

Install React Router if it is not already installed:

```bash
npm install react-router-dom
```

If you are using Tailwind CSS, install and configure Tailwind according to your project setup.

---

# 🧩 React Concepts Used

This project demonstrates several important React concepts.

### Components

The UI is divided into reusable components.

Example:

```jsx
<Header />
```

---

### useState

State is used to manage tasks, search values, and filters.

Example:

```jsx
const [tasks, setTasks] = useState([]);
```

---

### useEffect

If your application retrieves tasks from an API, `useEffect` can be used to fetch data when the component loads.

Example:

```jsx
useEffect(() => {
    fetchTasks();
}, []);
```

---

### React Router

React Router is used to navigate between pages.

Example:

```jsx
navigate("/taskform");
```

---

### Dynamic Routes

Task IDs can be passed through the URL.

Example:

```text
/taskform/123
```

The ID can then be accessed using:

```jsx
const { id } = useParams();
```

---

# 🎨 User Interface

The application focuses on:

* Clean dashboard
* Simple navigation
* Clear task status
* Responsive layout
* Easy-to-use buttons
* Search functionality
* Task filtering
* Separate task creation/editing page

---

# 🔐 Future Enhancements

The project can be extended with several advanced features.

### Authentication

Add:

* User registration
* Login
* Logout
* Protected routes

---

### User-Specific Tasks

Each user can have their own tasks.

```text
User A
 ├── Task 1
 ├── Task 2
 └── Task 3

User B
 ├── Task 4
 └── Task 5
```

---

### Task Priority

Add priority levels:

```text
High
Medium
Low
```

---

### Due Dates

Allow users to assign deadlines to tasks.

```text
Task: Complete React Project
Due: 30 September 2026
```

---

### Sorting

Tasks can be sorted by:

* Date
* Priority
* Status
* Title

---

### Dark Mode

Add a dark/light theme switcher.

---

### Notifications

Show notifications when:

* Task is created
* Task is updated
* Task is deleted
* Deadline is approaching

---

### Pagination

If the application contains many tasks, pagination can be implemented.

```text
1  2  3  4  5  Next →
```

---

# 📈 Learning Outcomes

Through this project, the following concepts can be practiced:

* React.js fundamentals
* Component-based development
* JSX
* React state management
* Event handling
* Conditional rendering
* List rendering
* Array methods
* Form handling
* React Router
* CRUD operations
* REST API integration
* Responsive UI development
* Frontend and backend communication
* Database integration

---

# 💡 Project Use Case

The Task Manager can be used by students, developers, employees, and other users who want to organize their daily activities.

Example:

```text
Today's Tasks

✓ Complete HTML assignment
✓ Practice DSA
○ Complete React project
○ Prepare interview questions
○ Push project to GitHub
```

The dashboard provides a simple way to track the progress of these tasks.

---

# 🚀 Future Scope

The application can be transformed into a complete productivity platform by adding:

* Authentication
* Multiple users
* Personal dashboards
* Task priorities
* Deadlines
* Reminders
* Categories
* Task sharing
* Team collaboration
* Real-time updates
* Email notifications
* Analytics
* Calendar integration

---

# 📸 Screenshots

Add screenshots of your application here.

Example:

```markdown
## Home Dashboard

![Home Dashboard](screenshots/home.png)

## Create Task

![Create Task](screenshots/create-task.png)

## Edit Task

![Edit Task](screenshots/edit-task.png)
```

Recommended screenshots:

1. Home dashboard
2. Task creation form
3. Task editing form
4. Search/filter functionality
5. Mobile responsive view

---

# 🧪 Testing

Before deploying the project, test the following:

### Create

* [x] Create a new task
* [ ] Validate required fields
* [ ] Verify task appears on dashboard

### Read

* [ ] Display all tasks
* [ ] Verify task information

### Update

* [ ] Open edit page
* [ ] Change task information
* [ ] Save changes
* [ ] Verify updated task

### Delete

* [ ] Delete a task
* [ ] Verify task disappears

### Search

* [ ] Search existing task
* [ ] Search unavailable task
* [ ] Clear search

### Filter

* [ ] All tasks
* [ ] Pending tasks
* [ ] Completed tasks

---

# 🤝 Contribution

Contributions are welcome.

To contribute:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Create a new branch:

```bash
git checkout -b feature/new-feature
```

Make your changes and commit:

```bash
git add .
git commit -m "Add new feature"
```

Push the branch:

```bash
git push origin feature/new-feature
```

Then create a Pull Request.

---

# 📄 License

This project is created for educational and portfolio purposes.

You can modify and extend the project according to your requirements.

---

# 👨‍💻 Author

**Harikrishna Patel**

B.Tech Computer Science & Engineering

Interested in:

* Full Stack Development
* MERN Stack
* React.js
* Node.js
* MongoDB
* Problem Solving
* Data Structures & Algorithms

---

## ⭐ If You Like This Project

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📌 Project Summary

**Task Manager** is a CRUD-based productivity application developed using React.js. It provides an interactive dashboard for managing tasks and demonstrates important frontend development concepts including state management, routing, form handling, search, filtering, and CRUD operations.

The project can be further extended with a Node.js/Express backend, MongoDB database, authentication, task priorities, deadlines, notifications, and other productivity features.

```

**Important:** If your actual project already has a **Node/Express + MongoDB backend**, send me your folder structure (or `package.json`, `App.jsx`, `TaskForm.jsx`, and backend routes/model). I can make this README **100% accurate to your actual project**, including the exact API endpoints, technologies, folder structure, setup commands, and screenshots section.
```
