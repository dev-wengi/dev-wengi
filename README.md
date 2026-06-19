# Dev-Wengi


<div align="center">
  
  ![Dev-Wengi Logo](assets/logos/2.png)
</div>


**Learn to code by building real projects, with real people.**

**dev.wengi** is a developer-focused community designed to inspire, support, and empower individuals at every stage of their tech journey. The community simplifies the process of learning and breaking into tech by providing curated resources, practical guidance, and opportunities to work on real-world problems.

No tutorials. No fluff. Just hands-on experience.

---

## What Is This Repository?

This is the main dev-wengi repository. It contains everything you need to start learning, building, and contributing:

- `/tracks` - Structured learning paths for different tech stacks
- `/challenges` - 30-day coding challenges across difficulty levels
- `/projects` - Real-world projects you can contribute to
- `/community-website` You can also contribute to the community website [here](https://github.com/dev-wengi/wengi-website)
- `/docs` - Documentation and guides

---

## Repository Structure

### Tracks (`/tracks`)

Structured learning paths that guide you from beginner to advanced. Each track is divided into levels with clear tasks and goals.

- **Frontend** - HTML, CSS, JavaScript, React, and modern frontend tools
- **Backend** - Server-side development, APIs, databases
- **DevOps** - Deployment, CI/CD, infrastructure

**How to use:** Pick a track, start at Level 0, and work through each task. Submit your work as a Pull Request to unlock the next level.

### Challenges (`/challenges/30-day-challenges`)

50 coding challenges organized by difficulty:

- **01-easy** - 10 beginner-friendly projects
- **02-intermediate** - 10 intermediate-level projects
- **03-advanced** - 10 advanced projects involving AI and complex systems
- **04-hard** - 10 hard projects involving distributed systems and infrastructure
- **05-nightmare** - 10 extremely challenging projects for experienced developers

Each challenge has a detailed README with project requirements, expected features, tech stack recommendations, and success criteria.

**How to use:** Pick a challenge that matches your skill level, read the README, and build it. You can work on challenges independently or as part of the 30-day challenge program.

### Projects (`/projects`)

17 real-world projects that you can clone, contribute to, or use as inspiration. Each project has its own detailed README with setup instructions and contribution guidelines.

**Available projects:**
- auth-api - JWT-based authentication API
- auth-app - Frontend authentication app
- chat-app - Real-time chat frontend
- chat-app-backend - WebSocket chat server
- dashboard - Admin dashboard with metrics and charts
- file-upload-service - File upload and storage API
- gallery - Image gallery with lightbox
- github-explorer - GitHub API integration app
- job-queue - Background job processing system
- kanban-board - Drag-and-drop task board
- notes-app - Note-taking application
- quiz-app - Interactive quiz application
- rate-limiter - API rate limiting middleware
- todo-api - RESTful todo API
- todo-app - Todo management frontend
- url-shortener - URL shortening service
- wather-app - Weather information app

---

## Git Submodules

The projects in `/projects` are managed as **git submodules**. This means each project is a separate repository that can be cloned independently.

### Cloning This Repository

To clone this repository along with all project submodules:

```bash
git clone --recursive git@github.com:dev-wengi/dev-wengi.git
```

### Cloning Individual Projects

You can also clone any project directly without cloning the entire repository:

```bash
git clone git@github.com:dev-wengi/auth-api.git
git clone git@github.com:dev-wengi/todo-app.git
# etc.
```

### Updating Submodules

If you already have the repository cloned and want to update all submodules:

```bash
git submodule update --init --recursive
```

To update a specific submodule:

```bash
cd projects/auth-api && git pull
cd ../..
git add projects/auth-api
git commit -m "Update auth-api submodule"
```

---

## Getting Started

### For Learners

1. **Choose your path:**
   - New to coding? Start with `/tracks/frontend` or `/tracks/backend` at Level 0
   - Have some experience? Jump to `/challenges` and pick a challenge
   - Want to contribute? Browse `/projects` for open issues

2. **Follow the structure:**
   - Tracks are sequential - complete Level 0 before moving to Level 1
   - Challenges are independent - pick any that interest you
   - Projects are open for contributions - find an issue and start coding

3. **Submit your work:**
   - Fork the repository
   - Create a new branch for your work
   - Submit a Pull Request with your changes
   - Get feedback and iterate

### For Contributors

1. **Find something to work on:**
   - Check the [Issues tab](https://github.com/kc-clintone/dev-wengi/issues) for open issues
   - Look for `good-first-issue` labels if you're new
   - Browse `/projects` for projects that need help

2. **Read the guidelines:**
   - [CONTRIBUTING.md](.github/CONTUTING.md) - Contribution guidelines
   - [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Community standards

3. **Make your contribution:**
   - Fork and clone the repository
   - Create a feature branch
   - Make your changes
   - Submit a Pull Request with a clear description

---

## Project Levels

**Beginner**
- Small features
- UI improvements
- Basic logic fixes

**Intermediate**
- New features
- API integration
- State management

**Advanced**
- Architecture decisions
- Performance improvements
- Complex systems

---

## How to Approach a Project

- Start simple, make it work
- Improve, make it better
- Refactor, make it clean

You're not aiming for perfect. You're aiming for progress.

---

## Community

You're building, not struggling in silence.

- Ask questions in Discussions, WhatsApp, and on [Discord](https://discord.com)
- Help others when you can
- Share what you learn

(Teaching is just debugging someone else's confusion.)

---

## Why Dev-Wengi?

- Learn by **doing**, not watching
- Work on **real codebases**, not toy projects
- Grow through **structured chaos** (guided, not hand-held)

---

## One Rule

> Don't just read. Build something. Break it. Fix it. Repeat.
