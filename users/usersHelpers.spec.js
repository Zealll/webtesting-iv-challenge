const db = require('../data/usersDB.js')
const helpers = require('./usersHelpers.js')

describe('users helpers', () => {
    describe('create', () => {
        afterEach(async () => {
            await db('users').truncate()
        })

        it('Should insert provided users', async () => {
            await helpers.create({name: 'Frank'})

            const users = await db('users')

            expect(users).toHaveLength(1)
        })

        it('Should check for the user', async () => {
            let user = await helpers.create({name: 'Frank'})
            expect(user.name).toBe('Frank')
        })
    })
})