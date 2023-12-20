const { User } = require('../models')

const UserData = [
    {
      "name": "Flora",
      "email": "test@test.com",
      "password": "$2b$10$umxVq2bN4ZCvAC2bJkapvu2uY2i7RmKsBTzgIH3rp.q5sIAF44dra"
    }
]

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;