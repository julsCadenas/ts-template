# **TypeScript Full Stack Template**

A modern boilerplate for full stack TypeScript applications, built for productivity and clean code.

This template includes:

- Monorepo powered by pnpm workspaces
- **Backend:** Express + TypeScript + Nodemon/tsx
- **Frontend:** React + TypeScript (Vite/Next.js ready)
- **Tools:** ESLint, Prettier, Husky, lint-staged

---

## **Features**

- TypeScript everywhere (frontend, backend, shared)
- ESLint + Prettier preconfigured for consistent code style
- Husky + lint-staged → auto-checks on commits
- pnpm enforced via only-allow
- Shared folder for common types/utilities

---

## **Getting Started**

1. Create a new project
   You can either:
   - Use this as a template (recommended):
   - Click "Use this template" on GitHub → create your own repo.
   - Or clone manually:
   ```
       git clone https://github.com/julsCadenas/ts-template my-app
       cd my-app
       rm -rf .git   # reset git history
       git init
       git remote add origin <link/to/your/repository>
   ```
2. Install pnpm globally
   > This project uses pnpm v10.15.1
   ```
   npm install -g pnpm
   ```
   Check your version:
   ```
   pnpm -v
   ```
3. Install dependencies
   ```
   pnpm install
   ```
4. Run apps
   > Run these on separate instances.
   ```
   pnpm dev-front // run frontend
   pnpm dev-back // run backend
   ```

## **Scripts**

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `pnpm prepare`       | Setup Husky (auto-run on install)         |
| `pnpm preinstall`    | Enforces pnpm as the only package manager |
| `pnpm dev-front`     | Run frontend in dev mode                  |
| `pnpm dev-back`      | Run backend in dev mode                   |
| `pnpm lint:all`      | Lint all code (frontend + backend)        |
| `pnpm lint:frontend` | Lint frontend code                        |
| `pnpm lint:backend`  | Lint backend code                         |
| `pnpm test`          | Run tests (currently placeholder)         |

## **Project Structure**

```
.
├── backend/                  # Backend (Express + TypeScript)
│   ├── src/
│   │   ├── server.ts         # Entry point
│   │   ├── app.ts            # Express app setup
│   │   ├── controllers/      # Route controllers
│   │   ├── routes/           # Express routes
│   │   ├── services/         # Business logic
│   │   ├── config/           # App configuration
│   │   ├── middlewares/      # Express middlewares
│   │   └── models/           # Database models (e.g., Prisma/Mongoose)
│   ├── Dockerfile
│   └── .dockerignore
│
├── frontend/                 # Frontend (React + Vite + TypeScript)
│   ├── src/                  # Usual Vite+React app setup
│   ├── Dockerfile
│   └── .dockerignore
│
├── .husky/                   # Husky hooks
│   ├── pre-commit
│   └── pre-push
│
├── .vscode/                  # VSCode settings/recommendations
│
├── docker-compose.yaml        # Docker Compose setup
├── tsconfig.base.json         # Shared TypeScript config
├── eslint.config.mts          # ESLint configuration
├── .prettierrc.json           # Prettier configuration
├── .prettierignore
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .npmrc
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml        # Monorepo workspace config
```

## ** License**

ISC License – free for personal or commercial use.
