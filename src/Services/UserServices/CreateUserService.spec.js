import { CreateUserService } from './CreateUserService'
import { DeleteUserService } from './DeleteUserService'

describe('Create User', () => {
    it('should create a new user', async () => {

        const name = 'jest'
        const email = 'jest@example.com.br'
        const password = 'testpassword'

        const createdUser = await CreateUserService(name, email, password)

        expect(createdUser.user).toHaveProperty('_id')
        expect(createdUser.user.password).toBeUndefined()
        expect(createdUser.user.name).toBe(name)
        expect(createdUser.user.email).toBe(email)
        expect(createdUser.token).toBeTruthy()

        await DeleteUserService(email)
    })

    it('should return error user already exists', async () => {

        const name = 'alreadyexists'
        const email = 'alreadyexists@example.com.br'
        const password = 'testpassword'

        await CreateUserService(name, email, password)
        const user = await CreateUserService(name, email, password)

        expect(user).toHaveProperty('error')

        await DeleteUserService(email)
    })
})