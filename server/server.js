import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is live" });
});

app.get("/guests", async (req, res) => {
  const result = await db.query("SELECT * FROM guests");
  res.json(result.rows);
});

app.post("/guests", async (req, res) => {
  const body = req.body;
  const guestFromClient = body.guest;
  const commentFromClient = body.comment;

  await db.query("INSERT INTO guests (guest, comment) VALUES ($1, $2)", [
    guestFromClient,
    commentFromClient,
  ]);

  res.json({ status: "Data inserted into Database" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
