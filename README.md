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
