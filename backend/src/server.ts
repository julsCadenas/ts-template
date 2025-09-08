import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, Express + TypeScript");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
