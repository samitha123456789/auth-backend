<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🚀 NestJS Authentication Backend

![NestJS](https://img.shields.io/badge/NestJS-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWY0ZjEwMjM1NTM2YjY0MTJjODAzZmUwZDJhMjk0NGEzMWVmMmEyNCZjdD1n/IeRdg7zSCRwy3CyY9i/giphy.gif" width="150" />
</p>

## 🔐 Features

- ✅ **User Registration** (with hashed passwords)
- ✅ **Secure Login with JWT**
- 🔁 **Refresh Tokens**
- 🔒 **Role-based Authorization**
- 🧠 **Forgot Password (Email Token)**
- 📦 PostgreSQL as Database
- 📕 Prisma or TypeORM support
- ⚙️ Full REST API with versioning support

---

## 🛠️ Technologies Used

```bash
NestJS · TypeScript · PostgreSQL · JWT · Bcrypt · PassportJS · Nodemailer

```
## ⚙️ Setup & Run
```bash
# Clone the repo

git clone https://github.com/your-username/nestjs-auth-backend.git
cd nestjs-auth-backend

# Install dependencies
npm install

# Setup PostgreSQL DB and env file
cp .env.example .env
# Add DB credentials and JWT_SECRET to .env

# Run the dev server
npm run start:dev

