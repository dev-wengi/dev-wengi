# 🚦 Rate Limiter

Build middleware to limit API requests.

---

## 🎯 Goal

Protect your API from abuse.

---

## 🧩 Requirements

- Limit requests per IP/user
- Block requests after threshold

---

## ⚙️ Behavior

- Example: 100 requests per minute
- Return error when exceeded

---

## 🧠 Concepts

- Counters
- Time windows

---

## 🚫 Constraints

- Build logic yourself (no plugins)

---

## ⭐ Bonus Challenges

- Sliding window algorithm
- Distributed rate limiting (Redis)
- Different limits per route

---

## 📦 Submission

- PR with working limiter
- Show it blocking requests
