/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8000;
// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// db connection
const dbConfig = require("./config/db");
dbConfig();

// storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb("uploads");
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
// // methods upload
// const router = express.Router();
// const authMiddleware = require("./middleware/authmiddleware");
// router.use(authMiddleware);
// const uploadImg = console.log("okay");
// routes
// app.use("/upload", uploadImg);

const userRoutes = require("./routes/User");
app.use("/user", userRoutes);

const employeesRoutes = require("./routes/Employee");
app.use("/employee", employeesRoutes);

const officeRoutes = require("./routes/Office");
app.use("/office", officeRoutes);

const carRoutes = require("./routes/Car");
app.use("/car", carRoutes);

const cartypeRoutes = require("./routes/CarType");
app.use("/cartype", cartypeRoutes);

const paymentRoutes = require("./routes/Payment");
app.use("/payment", paymentRoutes);

const reservationRoutes = require("./routes/Reservation");
app.use("/reservation", reservationRoutes);

const uploadingRoutes = require("./routes/Uploading");
app.use("/upload", uploadingRoutes);
// // storage

app.listen(port, () => {
  console.log(`Listening to ${port} port`);
});
