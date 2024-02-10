const {User} = require('../db');

function updateUserDB (id, updatedVal) {
    console.log(updatedVal);
    console.log(id)
    return User.update(updatedVal, {
        where: {
            "id": id
        }
    })
}

async function updateUserApi (req, res) {
    let id = req.body.id;
    let updatedVal = req.body.updatedVal;
    await updateUserDB(id, updatedVal);
    res.status(201).send({"deleted": true})
}

module.exports = {
    updateUserApi
}