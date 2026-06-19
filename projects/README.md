# Projects

This is where theory ends.

Apply what you have learned by building real features, fixing real problems, and contributing to real code.

---

## What Are These Projects?

The projects in this folder are real-world applications designed to help you practice and demonstrate your skills. Each project is a standalone repository that can be cloned, explored, and contributed to independently.

All projects are managed as **git submodules**, which means they are separate repositories linked to the main dev-wengi repository. You can work on any project without needing to clone the entire dev-wengi repository.

---

## Available Projects

### Backend Projects

- **auth-api** - JWT-based authentication API with registration, login, and protected routes
- **chat-app-backend** - WebSocket server for real-time chat with room management and message broadcasting
- **file-upload-service** - File upload API with validation, storage, and metadata management
- **job-queue** - Background job processing system with retry logic and status tracking
- **rate-limiter** - API rate limiting middleware with multiple algorithms
- **todo-api** - RESTful API for managing todo items with full CRUD operations
- **url-shortener** - URL shortening service with validation and click tracking

### Frontend Projects

- **auth-app** - Frontend authentication app with registration, login, and protected routes
- **chat-app** - Real-time chat frontend with WebSocket communication
- **dashboard** - Admin dashboard with metrics, charts, and data visualization
- **gallery** - Image gallery with lightbox, filtering, and lazy loading
- **github-explorer** - GitHub API integration for searching users and repositories
- **kanban-board** - Drag-and-drop task board for workflow management
- **notes-app** - Note-taking application with local persistence
- **quiz-app** - Interactive quiz application with scoring and review
- **todo-app** - Todo management frontend with filtering and persistence
- **wether-app** - Weather application with location search and current conditions

---

## How to Use These Projects

### Option 1: Clone Individual Projects

You can clone any project directly without cloning the entire dev-wengi repository:

```bash
# Clone a single project
git clone git@github.com:dev-wengi/auth-api.git
git clone git@github.com:dev-wengi/todo-app.git
git clone git@github.com:dev-wengi/chat-app.git
# etc.
```

Each project has its own README with detailed setup instructions, tech stack recommendations, and contribution guidelines.

### Option 2: Clone All Projects

To clone the entire dev-wengi repository with all project submodules:

```bash
git clone --recursive git@github.com:dev-wengi/dev-wengi.git
```

If you already have the repository cloned and want to initialize the submodules:

```bash
git submodule update --init --recursive
```

### Option 3: Browse Without Cloning

You can browse any project directly on GitHub:

```
https://github.com/dev-wengi/auth-api
https://github.com/dev-wengi/todo-app
https://github.com/dev-wengi/chat-app
# etc.
```

---

## How to Contribute

### Finding Something to Work On

1. **Check for open issues** - Look for issues labeled `good-first-issue`, `level:beginner`, `level:intermediate`, or `level:advanced`
2. **Read the project README** - Each project has a detailed README explaining what needs to be built
3. **Pick a project that matches your skill level** - Start with beginner projects and work your way up

### Contribution Workflow

1. **Fork the project repository** you want to contribute to
2. **Clone your fork locally:**
   ```bash
   git clone git@github.com:your-username/auth-api.git
   cd auth-api
   ```
3. **Create a new branch** for your work:
   ```bash
   git checkout -b feature/add-user-profile
   ```
4. **Make your changes** and commit them:
   ```bash
   git add .
   git commit -m "Add user profile endpoint"
   ```
5. **Push to your fork:**
   ```bash
   git push origin feature/add-user-profile
   ```
6. **Open a Pull Request** on the original project repository

### Contribution Guidelines

- Read the project README before starting
- Follow the existing code style and patterns
- Write clear commit messages
- Test your changes before submitting
- Be open to feedback and iterate on your PR

---

## Project Levels

Projects are categorized by difficulty to help you choose the right starting point:

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

- **Start simple** - Make it work first
- **Improve** - Make it better
- **Refactor** - Make it clean

You are not aiming for perfect. You are aiming for progress.

---

## Suggested Starting Point

If you are new to contributing, start here:

```
/projects/todo-app
```

This is a straightforward project that covers fundamental concepts like CRUD operations, state management, and local storage. Keep it simple. Finish it.

---

## Rule

> If you are stuck reading, you should probably be coding.

---

## Need Help?

- Check the project README for specific setup instructions
- Look for existing issues and PRs for context
- Ask questions in the dev-wengi community
- Review similar projects for reference

---

## License

All projects in this folder are part of the dev-wengi community and follow the same license as the main repository. See the [LICENSE](../LICENSE) file for details.
