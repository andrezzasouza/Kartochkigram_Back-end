import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/health", (_req: Request, res: Response) => {
  res.send("The app is up and running!");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
