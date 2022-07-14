const usersRouter = require("express").Router();
const pool = require("../database/pg");

// CREATE USER
usersRouter.post("/", async (req, res) => {
  const { user_name, user_lastName, user_email, rol } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO users (user_name, user_lastName, user_email, rol) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_name, user_lastName, user_email, rol]
    );
    res.json({ message: "User created" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET ALL USERS
usersRouter.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users;");
    res.json({ result: result.rows });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//GET USER BY ID
usersRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    console.log(result.rows);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "User not found",
      });
    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//UPDATE USER BY ID
usersRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { user_name, user_lastName, user_email, rol } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET user_name = $1, user_lastName = $2, user_email= $3, rol= $4 WHERE user_id= $5 RETURNING * ",
      [user_name, user_lastName, user_email, rol, id]
    );
    if (result.rowCount === 0)
      return res.status(404).json({
        message: "User not found",
      });
    res.json(result.rows[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//DELETE USER BY ID
usersRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM users WHERE user_id = $1", [
      id,
    ]);
    if (result.rowCount === 0)
      return res.status(404).json({
        message: "User not found",
      });
    res.json({ message: "User eliminated" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = usersRouter;
