const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({message:"All good in here"});
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

const bookRoutes = require('./routes/book.routes');
router.use('/api/auth', bookRoutes);

const authRoutes = require("./auth.routes");
router.use("/book", authRoutes);

// const cloudinaryRoutes = require("./routes/cloudinary.routes");
// router.use("/api", cloudinaryRoutes);

module.exports = router;
