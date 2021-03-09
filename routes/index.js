const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({message:"All good in here"});
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

const bookRoutes = require('./book.routes');
router.use('/book', bookRoutes);

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);

const locationRoutes = require("./location.routes");
router.use("/location", locationRoutes);

const messageRoutes = require("./message.routes");
router.use("/message", messageRoutes);

const cloudinaryRoutes = require("./routes/cloudinary.routes");
router.use("/api", cloudinaryRoutes);

module.exports = router;
