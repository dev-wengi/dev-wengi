# 🧠 Job Queue (Lite)

Build a system to process tasks asynchronously.

---

## 🎯 Goal

Understand background processing and async workflows.

---

## 🧩 Requirements

- Accept a job/task
- Process it in the background
- Return status

---

## 🔁 Endpoints (Suggested)

- `POST /jobs`
- `GET /jobs/:id`

---

## 💡 Behavior

- Jobs should not block the main request
- Track job status (pending, processing, done)

---

## ⚙️ Implementation Ideas

- In-memory queue (start simple)
- Worker loop to process jobs

---

## 🚫 Constraints

- No heavy queue libraries initially

---

## ⭐ Bonus Challenges

- Retry failed jobs
- Add job priority
- Use Redis or a real queue system

---

## 📦 Submission

- PR with working async flow
- Show job lifecycle
