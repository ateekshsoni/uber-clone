const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./db/db.js");
const userRoutes = require("./routes/user.routes.js");
const captainRoutes = require("./routes/captain.routes.js");
const mapRoutes = require("./routes/maps.routes.js");
const rideRoutes = require("./routes/ride.routes.js");

const app = express();
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/rides", rideRoutes);
app.use("/maps", mapRoutes);
app.use("/users", userRoutes);
app.use('/captains', captainRoutes);
module.exports = app;
