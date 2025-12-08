# 🍽️ Restaurant Management Website  
A full-stack MERN restaurant management platform designed to enhance customer experience, streamline restaurant operations, and provide a modern interactive UI.  
This project includes authentication, food management, ordering system, and a clean responsive interface with animations and theme switching.

---

## 🔗 Live Links
- **Live Website:** *Add your Netlify/Surge/Vercel link here*  
- **Client Repository:** *Add your GitHub client repo link here*  
- **Server Repository:** *Add your GitHub server repo link here*  

---

## 📌 Project Purpose
The goal of this project is to build a complete restaurant management system using the **MERN stack**.  
It allows customers to explore food items, place orders, and view galleries, while authenticated users can add/manage foods, and track orders.

This project is designed to meet real-world functionality and recruiter-friendly design expectations.

---

## ✨ Key Features

### ✅ Public Features
- Responsive Home Page with Slider/Banner  
- Top Foods Section (top-selling items)  
- All Foods Page with:
  - Search by name  
  - Pagination  
  - Server-side filtering  
- Gallery Page:
  - At least 10 images  
  - Lightbox preview  
  - Infinite scrolling (optional)  
- Single Food Details Page  
- Theme Toggle (Light/Dark)

---

### 🔐 Authentication (Firebase)
- Email & Password Login/Register  
- Google / GitHub social login (any one)  
- Form validation (uppercase, lowercase, min 6 chars)  
- Protected routes using:
  - Firebase authentication  
  - JWT stored on client  

---

### 👤 User Features (Private)

#### 1️⃣ Add Food  
- Add name, category, price, origin, description, photo, quantity  
- Stores data in MongoDB  
- Toast notification on success  

#### 2️⃣ My Foods  
- Shows foods added by logged-in user  
- Update food info  
- Users cannot update others’ food items  

#### 3️⃣ Purchase Food  
- Prefilled Buyer Name & Email  
- Valid quantity check  
- Prevent buying own food item  
- Stores purchase in DB  
- Show toast on success  

#### 4️⃣ My Orders  
- Orders purchased by logged-in user  
- Human readable date (moment.js)  
- Delete order option  

---

## 🎯 Challenge Features
- Quantity validation (block purchase if quantity = 0)  
- Search, filter, and pagination (server-side)  
- Gallery infinite scroll + animations  
- TanStack Query mutations  
- Framer Motion animations  

---

## 🛠️ Technologies Used

### Client
- React.js  
- React Router  
- Tailwind CSS + DaisyUI  
- Firebase Authentication  
- Axios  
- TanStack Query  
- Framer Motion  
- Lightbox Library  
- Moment.js  

### Server
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- CORS  
- dotenv  

---

## 🔐 Environment Variables

### Client `.env`
- VITE_apiKey=xxxx
- VITE_authDomain=xxxx
- VITE_projectId=xxxx
- VITE_storageBucket=xxxx
- VITE_messagingSenderId=xxxx
- VITE_appId=xxxx
- VITE_server_url=https://your-server-url.com

### Server `.env`
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_secret_key
- CLIENT_URL=https://your-frontend-domain.com


---

## 🚀 Deployment Checklist
✔ No CORS/404/504 errors in production  
✔ Add client domain to Firebase Authorized Domains  
✔ Private routes MUST NOT redirect to login on reload  
✔ Hide Firebase + MongoDB credentials  
✔ Live link must open without any route error  

---

## 📁 Folder Structure

### Client
src/
├── components/
├── pages/
├── hooks/
├── providers/
├── routes/
├── contexts/
├── assets/
└── utils/


### Server
server/
├── index.js
├── routes/
├── controllers/
├── middleware/
├── models/
└── config/


---

## 🧪 API Endpoints

### Auth & JWT
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /jwt | Create JWT token |
| POST | /logout | Clear JWT cookie |

### Foods
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /foods | Get foods (search, filter, pagination) |
| GET | /foods/:id | Get single food |
| POST | /foods | Add food |
| PUT | /foods/:id | Update food |
| DELETE | /foods/:id | Delete food |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /orders | Get user orders |
| POST | /orders | Add order |
| DELETE | /orders/:id | Delete order |

---

## 🎬 Framer Motion Animations
- Banner fade-in  
- Slide-up + stagger for food cards  
- Smooth gallery transitions  

---

## 📦 Installation

### Clone repos
```bash
git clone <client repo>
git clone <server repo>
cd client && npm install
cd ../server && npm install

# Client
npm run dev

# Server
npm start
