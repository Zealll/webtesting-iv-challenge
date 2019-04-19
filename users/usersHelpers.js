const db = require('../data/usersDB.js')

module.exports = {
    create,
    // delete
}

async function create(user) {
    const [id] = await db('users').insert(user);
    return db('users')
        .where({ id })
        .first()
}

