#!/bin/bash

# Script to add all projects as git submodules
# Usage: ./add-submodules.sh
#
# Prerequisites:
# 1. Create remote repos for each project under dev-wengi org
# 2. Push initial commits to each remote repo
# 3. Run this script from the projects/ directory

set -e

ORG="dev-wengi"

PROJECTS=(
  "auth-api"
  "auth-app"
  "chat-app"
  "chat-app-backend"
  "dashboard"
  "file-upload-service"
  "gallery"
  "github-explorer"
  "job-queue"
  "kanban-board"
  "notes-app"
  "quiz-app"
  "rate-limiter"
  "todo-api"
  "todo-app"
  "url-shortener"
  "wather-app"
)

echo "============================================"
echo "Adding projects as git submodules"
echo "============================================"
echo ""

# Check if we're in a git repo
if [ ! -d "../.git" ]; then
  echo "Error: This script must be run from the projects/ directory"
  echo "Current directory: $(pwd)"
  echo "Expected to find .git in parent directory"
  exit 1
fi

cd ..

for project in "${PROJECTS[@]}"; do
  project_path="projects/$project"
  remote_url="git@github.com:$ORG/$project.git"
  
  if [ ! -d "$project_path" ]; then
    echo "Skipping $project (directory not found)"
    continue
  fi
  
  echo "Processing: $project"
  
  # Remove from main repo (keeps files on disk)
  git rm -r "$project_path" 2>/dev/null || true
  
  # Add as submodule
  git submodule add "$remote_url" "$project_path"
  
  echo "  -> Added as submodule: $remote_url"
  echo ""
done

echo "============================================"
echo "All projects added as submodules!"
echo "============================================"
echo ""
echo "Next steps:"
echo "1. Commit the changes:"
echo "   git commit -m 'Add projects as submodules'"
echo ""
echo "2. Push to remote:"
echo "   git push origin main"
echo ""
echo "3. To clone this repo with all submodules:"
echo "   git clone --recursive git@github.com:$ORG/dev-wengi.git"
echo ""
echo "4. To update a specific submodule later:"
echo "   cd projects/<project-name> && git pull"
echo "   cd ../.. && git add projects/<project-name> && git commit -m 'Update submodule'"
