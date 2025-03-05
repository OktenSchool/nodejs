const {userRepository} = require("../repositories/user.repository");

class UserService {
    async getAll() {
        return await userRepository.getAll()
    }

    async create(user) {
        return await userRepository.create(user)
    }
    async getById(id){
        return await userRepository.getById(id)
    }
}

const userService = new UserService();

module.exports = {
    userService
}