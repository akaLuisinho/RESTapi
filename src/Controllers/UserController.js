import { CreateUserService } from '../Services/UserServices/CreateUserService.js'
import { AuthenticateUserService } from '../Services/UserServices/AuthenticateUserService.js'

export async function register(req, res) {
    const { name, email, password } = req.body

    const user = await CreateUserService(name, email, password)

    return res.json(user)
}

export async function login(req, res) {
    const { email, password } = req.body

    const user = await AuthenticateUserService(email, password)

    return res.json(user)
}