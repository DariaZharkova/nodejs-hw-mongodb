## Description (English)

This is a RESTful API for managing user contacts. Built as an educational project to practice CRUD operations, JWT authentication with sessions and cookies, password reset via Brevo SMTP using Nodemailer, and uploading photos to Cloudinary.

### 🚀 Main Features

- 🔑 User registration, login, logout, and session refresh (JWT + Cookies)
- 🔐 Protected contacts routes with Bearer Token
- 📬 Password reset via email (Brevo SMTP + Nodemailer)
- 📇 Contacts:
  - Create, read, update, delete
  - Upload contact photos (Cloudinary)
  - Categorize contacts (work, home, personal)
  - Mark as favourite
  - Filter, sort, and paginate
- 📑 API documentation with Swagger (`/api-docs`)

### ⚙️ Technologies Used

Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer + Brevo SMTP, Cloudinary, Swagger UI, Render

### 📜 Available Scripts

- `npm run dev` — start in development mode with **nodemon**
- `npm run start` — start in production mode
- `npm run build-docs` — bundle OpenAPI (`swagger.json` with Redocly)
- `npm run preview-docs` — preview Swagger docs with Redocly

### 📂 How to Run Locally

1️⃣ Install dependencies:

```bash
npm install
```

2️⃣ Create `.env`:

```env
# Server
PORT=3000

# MongoDB Atlas
MONGODB_USER=your_mongo_user
MONGODB_PASSWORD=your_mongo_password
MONGODB_URL=your-cluster.mongodb.net
MONGODB_DB=your_db_name

# JWT
JWT_SECRET=your_jwt_secret

# App domain (used for password reset email link)
APP_DOMAIN=http://localhost:3000
# For production:
APP_DOMAIN=https://your-frontend-domain.com

# Brevo (Sendinblue) SMTP for Nodemailer
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_brevo_login@example.com
SMTP_PASSWORD=your_brevo_smtp_key
SMTP_FROM=your_brevo_login@example.com

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Google Auth (optional)
GOOGLE_AUTH_CLIENT_ID=your_google_client_id
GOOGLE_AUTH_CLIENT_SECRET=your_google_client_secret
```

3️⃣ Run in development:

```bash
npm run dev
````

4️⃣ Open Swagger:

```
http://localhost:3000/api-docs
```

### 🌐 Demo

**[Swagger UI on Render](https://nodejs-hw-mongodb-4maf.onrender.com/api-docs)**
⚠️ Render may sleep — wait a few seconds if needed.

### ⚠️ Important

- Swagger UI does not store cookies — use Postman or your frontend to test logout and session refresh.
- Use valid Brevo SMTP credentials.
- APP_DOMAIN must match your frontend.

### 🧑‍💻 Author

Developed as an educational project for [GoIT](https://goit.global/).

# 📇 Contacts Management API

## Опис (Ukrainian)

Це RESTful API для керування контактами користувачів. Реалізовано як навчальний проєкт для відпрацювання CRUD-операцій, JWT-аутентифікації з сесіями та куками, скидання пароля через Brevo SMTP (Nodemailer) та завантаження фотографій у Cloudinary.

### 🚀 Основні можливості

- 🔑 Реєстрація, логін, логаут, оновлення сесії (JWT + Cookies)
- 🔐 Захищені маршрути для контактів (Bearer Token)
- 📬 Відновлення пароля через email (Brevo SMTP + Nodemailer)
- 📇 Контакти:
  - створення, перегляд, оновлення, видалення
  - завантаження фото (Cloudinary)
  - категоризація (work, home, personal)
  - обране
  - фільтрація, сортування та пагінація
- 📑 Swagger документація (`/api-docs`)

### ⚙️ Використані технології

Node.js, Express, MongoDB, Mongoose, JWT, Nodemailer + Brevo SMTP, Cloudinary, Swagger UI, Render

### 📜 Доступні скрипти

- `npm run dev` — запуск у режимі розробки з **nodemon**
- `npm run start` — запуск у продакшн
- `npm run build-docs` — збірка OpenAPI (`swagger.json` через Redocly)
- `npm run preview-docs` — попередній перегляд Swagger через Redocly

### 📂 Як запустити локально

1️⃣ Встановіть залежності:

```bash
npm install
```

2️⃣ Створіть `.env`:

```env
# Server
PORT=3000

# MongoDB Atlas
MONGODB_USER=your_mongo_user
MONGODB_PASSWORD=your_mongo_password
MONGODB_URL=your-cluster.mongodb.net
MONGODB_DB=your_db_name

# JWT
JWT_SECRET=your_jwt_secret

# App domain (для посилання в листі відновлення пароля)
APP_DOMAIN=http://localhost:3000
# Для продакшену:
APP_DOMAIN=https://your-frontend-domain.com

# Brevo (Sendinblue) SMTP для Nodemailer
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_brevo_login@example.com
SMTP_PASSWORD=your_brevo_smtp_key
SMTP_FROM=your_brevo_login@example.com

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Google Auth (опціонально)
GOOGLE_AUTH_CLIENT_ID=your_google_client_id
GOOGLE_AUTH_CLIENT_SECRET=your_google_client_secret
```

3️⃣ Запустіть у dev:

```bash
npm run dev
```

4️⃣ Відкрийте Swagger:

```
http://localhost:3000/api-docs
```

### 🌐 Демо

**[Swagger UI на Render](https://nodejs-hw-mongodb-4maf.onrender.com/api-docs)**
⚠️ Render може «спати» — зачекайте кілька секунд.

### ⚠️ Важливо

- Swagger UI не зберігає куки — логаут і рефреш тестуйте через Postman або frontend.
- Використовуйте реальні SMTP дані Brevo.
- APP_DOMAIN має збігатись з вашим frontend.

### 🧑‍💻 Автор

Розроблено як навчальний проєкт для [GoIT](https://goit.global/).

---
