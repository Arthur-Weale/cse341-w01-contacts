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
