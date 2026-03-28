# 🎉 Synergia Event Booking API

A RESTful API built using Node.js, Express, and MongoDB to manage event bookings for Synergia.

---

## 🚀 Features

* Create, Read, Update, Delete (CRUD) bookings
* Store data in MongoDB using Mongoose
* Search bookings by email
* Filter bookings by event
* REST API design with proper status codes

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (API Testing)

---

## 📁 Project Structure

```
synergia-booking-api/
│
├── config/
│   └── db.js
├── models/
│   └── Booking.js
├── routes/
│   └── bookingRoutes.js
├── server.js
├── package.json
├── .env (not included in repo)
├── README.md
```

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone https://github.com/yourusername/synergia-booking-api.git
```

2. Navigate to project folder:

```
cd synergia_api
```

3. Install dependencies:

```
npm install
```

4. Create `.env` file and add:

```
MONGO_URI=mongodb://127.0.0.1:27017/synergiaDB
PORT=5000
```

5. Start MongoDB server:

```
mongod --dbpath ./data/db
```

6. Run the server:

```
node server.js
```

---

## 🌐 API Endpoints

### 1. Get All Bookings

```
GET /api/bookings
```

### 2. Create Booking

```
POST /api/bookings
```

**Body:**

```json
{
  "name": "Sanjana",
  "email": "sanjana@gmail.com",
  "event": "Synergia",
  "ticketType": "VIP"
}
```

---

### 3. Get Booking by ID

```
GET /api/bookings/:id
```

---

### 4. Update Booking

```
PUT /api/bookings/:id
```

---

### 5. Delete Booking

```
DELETE /api/bookings/:id
```

---

### 6. Search by Email

```
GET /api/bookings/search/email?email=sanjana@gmail.com
```

---

### 7. Filter by Event

```
GET /api/bookings/filter/event?event=Synergia
```

---

## 🧪 Testing

Use Postman to test all API endpoints.

---


## 👩‍💻 Author

Sanjana Shetty

---

## 📌 Conclusion

This project demonstrates building a RESTful API with Node.js and MongoDB, including CRUD operations and query handling, following best practices.
