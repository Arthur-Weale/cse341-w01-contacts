# 📋 Express + MongoDB Project Checklist

## ✅ MongoDB Best Practices
- [ ] Use a **cached MongoClient** to avoid reconnecting on every request  
- [ ] Only call `client.close()` on **app shutdown**, not after every request  
- [ ] Load `MONGO_URI` using `dotenv` safely  
- [ ] Ensure `.env` is listed in `.gitignore`

---

## ✅ Express & Routing
- [ ] Use **only one** response method: `res.status().json()` or `res.send()`  
- [ ] Keep routes clean — move logic to a separate **controller**  
- [ ] Return 500 errors using `res.status(500).json({ message })` instead of `process.exit(1)`

---

## ✅ Async/Await & Function Design
- [ ] Avoid IIFEs inside async functions — just `await` directly  
- [ ] Use clear `try/catch` blocks for error handling  
- [ ] Handle and return errors in routes gracefully (don’t crash the server)

---

## ✅ Development Workflow
- [ ] Test API endpoints in **Postman** or your **browser**  
- [ ] Remove or minimize `console.log()` in production  
- [ ] (Optional) Use a logger like `winston` for real apps

---

## ✅ Learning Habits
- [x] Ask questions when things break — debugging is part of learning  
- [x] Reflect on what you’ve learned — review code and improve  
- [ ] Organize common patterns/snippets in a notes app or GitHub Gist


Part 2

# Common Mistakes & How I Fixed Them

While building this Node.js API, I ran into some common pitfalls. Here’s a quick summary to help me remember and learn from them:

---

### 1. Missing parentheses in `bodyParser.json`

**Mistake:**  
```js
app.use(bodyParser.json)  // missing ()
Problem:
Middleware not applied correctly, so req.body is undefined.

Fix:

js
Copy
Edit
app.use(bodyParser.json())  // must call it as a function
2. API response hangs / request keeps loading
Mistake:
No response sent when an error occurs inside the route handler.

Problem:
Client waits forever because the server never ends the response.

Fix:
Always send a response in both success and error cases, e.g.:

js
Copy
Edit
res.status(500).json({ error: err.message });
3. Inconsistent MongoDB collection names
Mistake:
Inserted data into contact collection but queried from contacts.

Problem:
MongoDB created two separate collections, causing confusion.

Fix:
Use consistent collection names everywhere, e.g.:

js
Copy
Edit
collection("contacts")
4. MongoDB client not initialized inside functions
Mistake:
Using client without calling initdb() inside a function.

Problem:
ReferenceError: client is not defined

Fix:
Call MongoDB client inside each function needing DB access:

js
Copy
Edit
const client = await initdb();
5. REST Client “Header name must be a valid HTTP token” error
Mistake:
No empty line between HTTP headers and JSON body in .http file.

Problem:
REST Client interprets { as part of headers — invalid header name.

Fix:
Add a blank line after headers:

http
Copy
Edit
Content-Type: application/json

{
  "firstName": "John"
}
6. No error response sent in catch block
Mistake:
Only logging error in catch, no response sent.

Problem:
Frontend hangs waiting for a response.

Fix:
Send an error response inside catch:

js
Copy
Edit
catch (err) {
  res.status(500).json({ error: err.message });
}
Bonus Tips
Use try/catch with async/await on all routes.

Add console logs to trace code flow during debugging.

Test your API with Postman, REST Client, or Insomnia.

Double-check your MongoDB URI and connection handling.

python
Copy
Edit

This will render neatly in markdown viewers and help you easily review these key lessons anytime. If you want, I can help you write other README sections next!

---

## 🛠️ Mistakes I Made While Learning to Implement a PUT Request

Here are some important lessons I learned during the process:

---

### 1. 🔠 Incorrect Database Name

I accidentally used `"contactdb"` instead of the correct name `"contactDB"`.  
MongoDB is **case-sensitive**, so always double-check your database and collection names.

---

### 2. 🆔 Wrong Field Name for Document ID

I used `"id"` instead of `"_id"` to identify a document in MongoDB.  
Remember, MongoDB stores document IDs using the field **`_id`**, not `id`.

✅ Correct usage:
```js
{ _id: ObjectId("...") }
