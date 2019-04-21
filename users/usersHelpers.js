const db = require('../data/usersDB.js')

module.exports = {
    create,
    remove
}

async function create(user) {
    const [id] = await db('users').insert(user);
    return db('users')
        .where({ id })
        .first()
}

function remove(id) {
    return db('users')
    .where('id', id)
    .del()
}

