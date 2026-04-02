# 🔗 URL Shortener

Build a service that shortens long URLs.

---

## 🎯 Goal

Understand ID generation, routing, and redirects.

---

## 🧩 Requirements

- Accept a long URL
- Generate a short code
- Redirect users to the original URL

---

## 🔁 Endpoints (Suggested)

- `POST /shorten`
- `GET /:code`

---

## 💡 Behavior

- Each URL gets a unique short code
- Visiting the short URL redirects to the original

---

## 💾 Storage

- Store URL mappings (memory or database)

---

## ⚠️ Edge Cases

- Invalid URLs
- Duplicate URLs

---

## 🚫 Constraints

- No external URL-shortening services

---

## ⭐ Bonus Challenges

- Track click count
- Expiration time for links
- Custom short codes

---

## 📦 Submission

- PR with working redirects
- Show example usage
