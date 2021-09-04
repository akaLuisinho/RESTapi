import { CreateUserService } from '../Services/UserServices/CreateUserService'
import { AuthenticateUserService } from '../Services/UserServices/AuthenticateUserService'
import User from '../Models/UserModel'

describe('Create User', () => {
    it('should create a new user', async () => {
        const name = 'usertest'
        const email = 'usertest@example.com.br'
        const password = 'testpassword'

        const createdUser = await CreateUserService(name, email, password)

        expect(createdUser.user).toHaveProperty('_id')
        expect(createdUser.user.password).toBeUndefined()
        expect(createdUser.user.name).toEqual(name)
        expect(createdUser.user.email).toEqual(email)
        expect(createdUser.token).toBeTruthy()
    })

    it('should return user already exists error', async () => {
        const name = 'usertest'
        const email = 'usertest@example.com.br'
        const password = 'testpassword'

        const alreadyCreatedUser = await CreateUserService(name, email, password)

        expect(alreadyCreatedUser).toHaveProperty('error')
        expect(alreadyCreatedUser).toEqual({ "error": "user already exists" })
    })
})

describe('AuthenticateUser', () => {
    it('should be able to authenticate an user', async () => {
        const name = 'usertest'
        const email = 'usertest@example.com.br'
        const password = 'testpassword'

        const authenticatedUser = await AuthenticateUserService(email, password)

        expect(authenticatedUser.user).toHaveProperty('_id')
        expect(authenticatedUser.user.password).toBeUndefined()
        expect(authenticatedUser.user.name).toBe(name)
        expect(authenticatedUser.user.email).toBe(email)
        expect(authenticatedUser.token).toBeTruthy()
    })

    it('should return user not found error', async () => {
        const email = 'notfound@example.com.br'
        const password = 'testpassword'

        const user = await AuthenticateUserService(email, password)

        expect(user).toHaveProperty('error')
        expect(user).toEqual({ "error": "user not found" })
    })

    it('should return wrong password error', async () => {
        const email = 'usertest@example.com.br'
        const wrongPassword = 'wrongpassword'

        const user = await AuthenticateUserService(email, wrongPassword)

        expect(user).toHaveProperty('error')
        expect(user).toEqual({ "error": "wrong password" })
    })
})

afterAll(async () => {
    await User.deleteMany()
})