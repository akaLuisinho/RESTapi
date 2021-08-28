import { CreateUserService } from './CreateUserService'
import { AuthenticateUserService } from './AuthenticateUserService'
import { DeleteUserService } from './DeleteUserService'

describe('AuthenticateUser', () => {
    it('should be able to authenticate an user', async () => {
        const name = 'authenticate'
        const email = 'authenticate@example.com.br'
        const password = 'testpassword'

        await CreateUserService(name, email, password)
        const authenticatedUser = await AuthenticateUserService(email, password)

        expect(authenticatedUser.user).toHaveProperty('_id')
        expect(authenticatedUser.user.password).toBeUndefined()
        expect(authenticatedUser.user.name).toBe(name)
        expect(authenticatedUser.user.email).toBe(email)
        expect(authenticatedUser.token).toBeTruthy()

        await DeleteUserService(email)
    })

    it('should return user not found error', async () => {
        const email = 'notfound@example.com.br'
        const password = 'testpassword'

        const user = await AuthenticateUserService(email, password)

        expect(user).toHaveProperty('error')
        expect(user).toEqual({ "error": "user not found" })

        DeleteUserService(email)
    })

    it('should return wrong password error', async () => {
        const name = 'wrongpassword'
        const email = 'wrongpassword@example.com.br'
        const password = 'testpassword'
        const wrongPassword = 'wrongtestpassword'

        await CreateUserService(name, email, password)
        const user = await AuthenticateUserService(email, wrongPassword)

        expect(user).toHaveProperty('error')
        expect(user).toEqual({ "error": "wrong password" })

        await DeleteUserService(email)
    })
})