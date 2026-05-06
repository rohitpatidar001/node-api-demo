const express = require("express");
const router = express.Router();
const db = require("../db/db");

// All Users
router.get("/", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            return res.send("DB Error");
        }

        res.render("index", {
            users: results
        });
    });
});

// User Detail
router.get("/user/:id", (req, res) => {
    const userId = req.params.id;

    db.query("SELECT * FROM users WHERE id = ?", [userId], (err, results) => {
        if (err || results.length === 0) {
            return res.send("User not found");
        }

        res.render("userDetail", {
            user: results[0]
        });
    });
});

module.exports = router;