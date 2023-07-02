/** @format */
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");
const multer = require("multer");
const path = require("path");
// const upload = multer({ dest: "uploads/" });
router.use(authMiddleware);
const CreateUploading = require("../services/uploading/Create");
// router.post(
//   "/upload/create",
//   upload.single("testImage"),
//   function (req, res, next) {
//     const newImage = new ImageModel({
//       name: req.body.name,
//       image: {
//         data: req.file.filename,
//         contentType: "image/png",
//       },
//     });
//   }
// );
let newName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname);
    newName = uniqueSuffix.toString() + file.originalname;
  },
});
const upload = multer({ storage: storage });

router.post("/create", upload.single("image"), async (req, res) => {
  // Extract image data from request
  const { filename, originalname, mimetype, size } = req.body;
  // filename = newName;
  const results = await CreateUploading(newName, originalname, mimetype, size);

  if (results) {
    res.status(200).send({
      status: results,
      message: "Image uploaded and saved!",
      data: {
        name: newName,
        filename: newName,
        originalname: req.body.originalname,
        mimetype: req.body.mimetype,
        size: req.body.size,
      },
    });
  } else {
    res.status(500).send({
      status: results,
      message: "Failed to upload the image",
    });
  }
});

module.exports = router;
