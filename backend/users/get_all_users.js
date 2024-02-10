const {User} = require('../db');

async function getAllUsersApi(req, res) {
    let response = await User.findAll()
    res.status(200).send(response)
}

module.exports = {
    getAllUsersApi
}