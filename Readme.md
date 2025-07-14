# 📝 Notes API - Backend Project (MEN Stack)

This is a basic **Notes Management API** built with Node.js, Express.js, and MongoDB using Mongoose ODM.  
It supports creating, reading, updating, and deleting notes—perfect for practicing backend fundamentals in the MEN stack.

---

## 🚀 Features

- Add new notes with title and content
- Fetch all saved notes
- Delete notes by ID
- Update notes by ID
- Connected to MongoDB Atlas using Mongoose
- Structured for clean and scalable development

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- Nodemon (for development)

---

## ⚙️ Project Setup

1. **Delete existing `node_modules`** if any (to start fresh)

2. **Initialize your project:**
   ```bash
   npm init -y
3. **Install required packages:**
    npm install express mongoose
4. **Run the development server:**
    npm run dev
5. **Visit on browser/Postman:**
    http://localhost:3000
    

    **📁 Folder Structure **
            notes-app/
        ├── src/
        │   ├── DB/
        │   │   └── db.js               # Database connection logic
        │   ├── models/
        │   │   └── note.model.js       # Schema + model for notes
        ├── index.js                    # Server entry point
        ├── .env                        # MongoDB Atlas URI and secrets

💙 Special Mention
This project was built during my 6th backend class, where I practiced real-world concepts like:

MongoDB Atlas setup

Mongoose connection

Modular DB imports

Folder structuring for production

POST route with destructuring