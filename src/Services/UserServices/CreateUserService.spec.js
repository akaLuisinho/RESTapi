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
        expect(createdUser.user.name).toEqual(name)
        expect(createdUser.user.email).toEqual(email)
        expect(createdUser.token).toBeTruthy()

        await DeleteUserService(email)
    })

    it('should return user already exists error', async () => {

        const name = 'alreadyexists'
        const email = 'alreadyexists@example.com.br'
        const password = 'testpassword'

        await CreateUserService(name, email, password)
        const user = await CreateUserService(name, email, password)

        expect(user).toHaveProperty('error')
        expect(user).toEqual({ "error": "user already exists" })

        await DeleteUserService(email)
    })
})