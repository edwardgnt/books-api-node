# Books API 

A production-ready Node.js + TypeScript API template featuring **Express**, **Knex**, **Zod** validation, and a clean layered architecture.  
Designed for building scalable backend services with clear separation of concerns and a strong developer experience.

---

## 🚀 Features

- **Node.js + TypeScript** - modern, strongly typed backend foundation  
- **Express** - minimal and flexible API routing  
- **Knex.js** - SQL query builder (supports MySQL, PostgreSQL, SQLite, and more)  
- **Zod** - schema validation + DTO enforcement  
- **Clean Architecture**  
  - Routes  
  - Controllers  
  - Services  
  - Repositories  
  - DTOs  
- **Environment variable support** using dotenv  
- **CORS enabled**  
- **Development server** with ts-node-dev  
- **Production build** with TypeScript compiler  

---

## 📂 Project Structure

```text

src/
├─ app.ts
├─ server.ts
├─ db/
│ └─ knex.ts
├─ routes/
│ └─ example.routes.ts
├─ controllers/
│ └─ example.controller.ts
├─ services/
│ └─ example.service.ts
├─ repositories/
│ └─ example.repository.ts
├─ dtos/
│ └─ example.dto.ts
.env.example
tsconfig.json
package.json
.gitignore

```

### 🔹 Layer Responsibilities

**Routes** – define API endpoints  
**Controllers** – handle HTTP requests/responses  
**Services** – business logic  
**Repositories** – database operations  
**DTOs** – input validation using Zod  

---

## 🛠 Installation

Clone this repository:

```bash
git clone https://github.com/edwardgnt/node-ts-api-template.git
cd node-ts-api-template

```

Install dependencies:<br />
    npm install


Copy environment file:<br />
    cp .env.example .env


Server runs at:<br />
    http://localhost:5001

Production Build: <br />
    npm run build
    npm start

Example Endpoint: <br />
    GET /api/example

Response:
    {
        "message": "Hello from the repository layer!"
    }


## 🧩 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![Knex](https://img.shields.io/badge/Knex.js-3A3A3A?style=flat-square&logo=knex&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=flat-square&logo=mysql&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-306DCE?style=flat-square)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat-square)
![ts-node-dev](https://img.shields.io/badge/ts--node--dev-3178C6?style=flat-square)


