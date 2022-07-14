const { Router } = require("express");
const usersRouter = require("../controllers/users.controllers");
/* const userRouter = require("../controllers/users.controllers"); */

//Init Router
const router = Router();

//Endpoint
router.use("/api/users", usersRouter);

module.exports = router;
