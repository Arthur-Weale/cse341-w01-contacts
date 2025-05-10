# cse341-w01-contacts
This is for my web services class W01 Project: Contacts 

# 📇 CSE 341 - Contacts API (Part 1)

![BYU-I Logo](https://www.byui.edu/images/service-sites/logo.png)

Welcome to the **Contacts API Project** for **CSE 341: Web Services** at **Brigham Young University–Idaho**. This project introduces RESTful API development using **Node.js**, **Express**, and **MongoDB**, with deployment to **Render** and testing using a REST client.

---

## 📌 Project Overview

This is a **two-week project**. In **Part 1 (Week 01)**, you'll focus on the initial setup and implementation of the GET endpoints. In **Part 2 (Week 02)**, you'll complete the remaining routes and documentation.

> ✅ **Frontend is not required.** The focus is building a scalable and professional REST API.

---

## 🧩 Features (Part 1)

- ✅ Node.js project setup with Express
- ✅ MongoDB integration using environment variables
- ✅ Contact model with fields:
  - `firstName`
  - `lastName`
  - `email`
  - `favoriteColor`
  - `birthday`
- ✅ GET all contacts
- ✅ GET single contact by ID
- ✅ Deployed to Render
- ✅ Tested with REST client

---

## 📁 Project Structure

## MongoDB + Express Tips

- Cache the MongoClient to avoid reconnecting on every call
- Don't close the client after every DB query if using in multiple places
- Use res.status(200).json(data) in routes to send JSON
- Avoid calling both res.json() and res.send() in one request




# Contacts API

A simple REST API to manage contact information, stored in MongoDB. This API allows users to retrieve a list of contacts and individual contact details.

## 🌐 Base URL (Local)
http://localhost:3000



## 📋 Endpoints

### 🏠 GET `/`
Returns a message with sample ObjectIds for testing.

**Example Request:**
GET /


**Response:**
```json
{
  "message": "🧪 Sample ObjectIds for testing. Paste one of these IDs into the URL like /contacts/:id to fetch a specific contact.",
  "example": "http://localhost:3000/contacts/681e8f8941ec986c6cfbaa4b",
  "sampleIds": [
    { "_id": "681e8f8941ec986c6cfbaa4b", "name": "Liam Moyo" },
    { "_id": "681e8f9f41ec986c6cfbaa4c", "name": "Amahle Nkosi" },
    { "_id": "681e8fb641ec986c6cfbaa4d", "name": "Thabo Dlamini" },
    { "_id": "681e8fcd41ec986c6cfbaa51", "name": "Zanele Khumalo" },
    { "_id": "681e8fdf41ec986c6cfbaa52", "name": "Katlego Peters" }
  ]
}
📂 GET /contacts
Returns a list of all contacts from the database.

Example Request:


[
  {
    "_id": "681e8f8941ec986c6cfbaa4b",
    "firstName": "Liam",
    "lastName": "Moyo",
    "email": "liam.moyo@example.com",
    "favoriteColor": "Blue",
    "birthday": "1996-03-12"
  },
  ...
]
🔍 GET /contacts/:id
Returns a single contact by its MongoDB ObjectId.

Example Request:


GET /contacts/681e8f9f41ec986c6cfbaa4c
Response:


{
  "_id": "681e8f9f41ec986c6cfbaa4c",
  "firstName": "Amahle",
  "lastName": "Nkosi",
  "email": "amahle.nkosi@example.com",
  "favoriteColor": "Purple",
  "birthday": "1998-11-22"
}
🔐 Environment Setup
Clone this repository to your local machine.

Install dependencies:

Create a .env file in the root of your project and add the following line to store your MongoDB URI:

MONGO_URI=your_mongodb_connection_string
📁 Project Structure (MVC)
bash
Copy
Edit
project/
├── model/             # Database connection logic
│   └── connectdb.js   # Initializes and connects to MongoDB
├── controller/        # Business logic for contacts
│   └── contact.js     # Handles contact data retrieval
├── routes/            # Routing logic for API endpoints
│   └── contactRoutes.js # Defines all the contact-related routes
├── app.js             # Main application entry point
├── .env               # Environment variables file
🚀 Deployment
To deploy this application to a production environment, follow these steps:

Make sure your MongoDB URI is correctly set in the .env file.

Deploy the app to your preferred hosting provider (e.g., Heroku, AWS, DigitalOcean, etc.).

💬 Contribution
Feel free to fork this repository and submit pull requests for any improvements or bug fixes!

📝 License
This project is open-source and available under the MIT License.









