import { jest } from '@jest/globals';

jest.useFakeTimers();

import { CreateUserService } from './CreateUserService.js'
describe('Create User', () => {
    it('should create a new user', async () => {

        const testUser = {
            name: 'test',
            email: 'test@example.com.br',
            password: 'textpassword'
        }

        const createdUser = await CreateUserService(testUser)

        expect(createdUser).toHave(token)
    })
})