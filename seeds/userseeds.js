const {User} = require('../models')
const userData = [
    {
        username:'krt12',
        email: 'krt12@gmail.com',
        password: 'krt12345'

    },

{
    username:'krt13',
    email: 'krt13@gmail.com',
    password: 'krt12345a'

}
]

const createUsers = () => User.bulkCreate(userData)
module.exports = createUsers