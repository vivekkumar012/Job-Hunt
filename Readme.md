# 🏢 MERN Stack Job Portal

A **full-featured Job Portal** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) with role-based authentication, job posting, and application management.  
The platform allows **job seekers** to search and apply for jobs and **recruiters** to post and manage job listings.

---

## 🚀 Features

- 🔐 **Role-based Authentication** (JWT + bcrypt)
- 👨‍💻 **Job Seeker Features**
  - Search & filter jobs
  - Apply to jobs
  - Track application status
- 🏢 **Recruiter Features**
  - Post, edit, and delete jobs
  - View applicants for a job
- 🎨 **Modern UI/UX** with Tailwind CSS & ShadCN/UI
- 📡 **REST API** integration
- 💾 MongoDB for data storage
- ⚡ Fast & responsive frontend with React

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Tailwind CSS / ShadCN UI
- Axios
- React Router DOM

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Cloudinary (for file uploads)

**Other Tools**
- Stripe / Razorpay (for premium features) *(if integrated)*
- Postman (API Testing)

---

## 📂 Project Structure

```bash
📦 job-portal
 ┣ 📂 backend
 ┃ ┣ 📂 config
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 models
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 middleware
 ┃ ┗ index.js
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 context
 ┃ ┃ ┗ App.jsx
 ┣ package.json
 ┗ README.md
