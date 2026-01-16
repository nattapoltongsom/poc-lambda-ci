# 🚀 AWS SAM + TypeScript Serverless API (Hono)

โปรเจกต์ต้นแบบ (PoC) สำหรับการพัฒนา **Serverless API บน AWS Lambda** ด้วย **Hono Framework** และ **TypeScript** ออกแบบภายใต้แนวคิด **Clean Architecture** เพื่อให้
- พัฒนาได้เร็ว
- ทดสอบได้ง่าย (Local / Docker / Cloud)
- โครงสร้างชัดเจน รองรับการขยายในอนาคต

เหมาะสำหรับทั้ง **PoC**, **Internal Service** และต่อยอดเป็น **Production API** ได้ทันที

---

## ✨ Tech Stack
- **Runtime:** Node.js 20.x
- **Framework:** Hono (Fast, Web-standard based)
- **Language:** TypeScript
- **Infrastructure:** AWS Lambda + API Gateway
- **IaC:** AWS SAM
- **Local Simulation:** SAM CLI + Docker
- **CI/CD:** GitHub Actions

---

## 🛠 Prerequisites (สิ่งที่ต้องมีในเครื่อง)
ตรวจสอบว่าคุณติดตั้งเครื่องมือเหล่านี้เรียบร้อยแล้ว:
- **Node.js 20.x** หรือสูงกว่า
- **Docker** (ใช้จำลอง Lambda และ API Gateway)
- **AWS CLI** (`aws configure` ต้องตั้งค่าเรียบร้อย)
- **AWS SAM CLI**

---

## 📁 Project Structure
โครงสร้างออกแบบตามแนวคิด **Clean Architecture** เพื่อแยกความรับผิดชอบชัดเจน

```bash
src/
├── index.ts          # Lambda Entry Point (AWS เรียกไฟล์นี้)
├── server.ts         # Local Dev Server (รันตรงด้วย Node.js)
├── handlers/         # Interface Layer: Route / Controller
│   └── user.handler.ts
├── adapters/         # Infrastructure Layer: DB, External API, Kafka, etc.
│   └── user.adapter.ts
├── application/      # Use case / Business logic
├── domain/           # Entity / Domain model

template.yaml         # AWS Infrastructure (Lambda, API Gateway, IAM)
samconfig.toml        # Config จาก sam deploy --guided
.github/workflows/    # CI/CD (deploy.yml)
package.json          # Dependencies & Scripts
```

### 🧱 Layer Responsibility (สรุปสั้น)
- **handlers/** → รับ/ตอบ HTTP, validate request
- **application/** → Business logic
- **domain/** → Core model (ไม่ผูก framework)
- **adapters/** → เชื่อมต่อของภายนอก

---

## ▶️ Getting Started

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Local Development (แนะนำ)
```bash
npm run dev
```
- รัน Hono ด้วย Node.js
- เร็วมาก เหมาะกับการเขียนและแก้ Business Logic
- Default: http://localhost:3000

---

## 🧪 Testing Strategy

| ระดับการทดสอบ | คำสั่ง | ความเร็ว | ความแม่นยำ | เหมาะใช้เมื่อ |
|---|---|---|---|---|
| Logic Test | `npm run dev` | 🚀 เร็วมาก | 🟡 ปานกลาง | เขียน / แก้โค้ดทั่วไป |
| Integration Test | `npm run visual-dev` | 🐢 ช้า | 🟢 สูง | เช็ค API Gateway + Lambda |
| Unit Test | `npm test` | 🚀 เร็วมาก | 🟡 ปานกลาง | ก่อน Push โค้ด |

---

## 🧱 Simulate Lambda & API Gateway (Docker)
ใช้สำหรับทดสอบ Environment ใกล้ Production มากที่สุด

```bash
npm run visual-dev
```
- จำลอง Lambda + API Gateway ด้วย Docker
- ตรวจสอบ `template.yaml` และ Env config

---

## ☁️ Deployment

### 🚀 Deploy ครั้งแรก (ครั้งเดียว)
```bash
sam deploy --guided
```
- สร้าง CloudFormation Stack
- Generate ไฟล์ `samconfig.toml`

### 🔁 Deploy ครั้งถัดไป
```bash
npm run deploy
```
- ใช้ config เดิมทั้งหมด
- เหมาะกับ Manual deploy จากเครื่อง

---

## 🤖 CI/CD (GitHub Actions)
- Deploy อัตโนมัติเมื่อ Push / Merge
- Workflow อยู่ที่ `.github/workflows/deploy.yml`
- ใช้ AWS Credentials จาก GitHub Secrets

---

## 🎯 Why Hono + SAM?
- ⚡ เร็วกว่า Express
- 🌐 ใช้มาตรฐาน Web (Fetch API)
- 🧪 Test ง่าย
- ☁️ Native กับ Serverless
- 🧱 โครงสร้างพร้อม Scale

---

## 📌 Use Case ที่เหมาะสม
- Backend สำหรับ Web / Mobile App
- Microservice
- Event-driven API
- Internal Tools

---

## 📝 Notes
- แนะนำให้เขียน Business Logic แยกจาก Handler
- หลีกเลี่ยงการผูก AWS SDK ใน Domain/Application
- Production ควรเพิ่ม Observability (Logs, Metrics, Tracing)

---

