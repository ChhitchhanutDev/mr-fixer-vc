# Backend Setup

## 1) Configure environment

Copy `.env.example` to `.env` and fill in your MySQL values:

```bash
cp .env.example .env
```

## 2) Ensure users table exists

Use your SQL:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    phone VARCHAR(50),
    role VARCHAR(50),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 3) Run backend

```bash
npm install
npm run dev
```

Backend runs at `http://localhost:4000`.
