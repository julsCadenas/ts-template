FROM node:20-alpine
WORKDIR /backend
RUN npm install -g pnpm
COPY package*.json .
RUN pnpm install
COPY . .
CMD ["pnpm", "dev"]