# Emplode Operator
Operator is a project that allows you to use Emplode's terminal agent python package in your browser.

It's made with [E2B's sandbox](https://e2b.dev). Inside the sandbox, we use [Emplode Operator](https://emplode.com/) to run code.


## How to run locally

**Requirements**
- Supabase project
  - Your Supabase project needs to have enabled [GitHub and Google auth providers]
- [Poetry](https://python-poetry.org/)

### Steps
**Frontend**
1. Copy `frontend/.env.example` to `frontend/.env` and set the correct env vars
1. Go to `frontend`
1. Install dependencies `pnpm i`
1. Start frontend `pnpm dev`

**Backend**
1. Copy `backend/.env.example` to `backend/.env` and set the correct env vars
1. Install dependencies `poetry install`
1. Active poetry environment `poetry shell`
1. Start backend `uvicorn server:app --reload --port 8080`

