const router = require("express").Router();
const booksRoutes = require("./books");

//  routes
router.use("/books", booksRoutes);

module.exports = router;
