const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {

    db.select ("p.contents as quote", "u.username as author")
    .from("posts as p")
    .join("users as u", "p.user_id", "=", "u.id")
    .then(users => {
        res.json(users);
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to get users' });
    });
});

module.exports = router;