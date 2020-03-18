const db = require('../data/db-config.js');

module.exports = {
    all, 
    findById,
    update
}

function all() {
    return db('users');
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes)
        .then(() => {
            return findById(id)
        });
}