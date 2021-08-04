import { CreateUserService } from '../Services/UserServices/CreateUserService.js'
import { AuthenticateUserService } from '../Services/UserServices/AuthenticateUserService.js'

async function Register(req, res) {
    const { name, email, password } = req.body

    const user = await CreateUserService(name, email, password)

    return res.send(user)
}

async function Authenticate(req, res) {
    const { email, password } = req.body

    const user = await AuthenticateUserService(email, password)

    return res.send(user)
}


export default { Register, Authenticate };