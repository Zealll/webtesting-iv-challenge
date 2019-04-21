const db = require('../data/usersDB.js')
const helpers = require('./usersHelpers.js')

describe('users helpers', () => {
    describe('create', () => {
        afterEach(async () => {
            await db('users').truncate()
        })

        it('Should insert provided users', async () => {
            await helpers.create({name: 'Elan'})

            const users = await db('users')

            expect(users).toHaveLength(1)
        })

        it('Should check for the user', async () => {
            let user = await helpers.create({name: 'Elan'})
            expect(user.name).toBe('Elan')
        })
    })

    describe('Delete', () => {
        it('Should check if the array length has changed if user has been removed', async () => {
            afterEach(async () => {
                await db('users').truncate()
            })
            await helpers.create({name: 'Elan' })
            
            await helpers.remove(1)

            const users = await db('users')
            expect(users).toHaveLength(0)

        })

        it('should return the remaining users\s Length', async () => {
            await helpers.create({name: 'Elan'})
            await helpers.create({name: 'Frank'})

            await helpers.remove(2)
            
            const user = await db('users')
            expect(user).toHaveLength(1)
        })
    })
})