const express = require("express")
const cors = require("cors");
const { addUserApi } = require("./users/add_user");
const { getAllUsersApi } = require("./users/get_all_users");
const { deleteUserApi } = require("./users/delete_user.js");
const { updateUserApi } = require("./users/update_user");

const app = express();

app.use(cors())

app.use(express.json())

app.post('/addUser', addUserApi)

app.get('/getAllUsers', getAllUsersApi)

app.delete('/deleteUser', deleteUserApi)

app.put('/updateUser', updateUserApi)

app.use(function (err, req, res, next) {
    console.log(
        "Some unexpected error happened"
    )
    console.log(req)
    res.status(500).send({"error": "Please retry in some time"})
})

let port = 3050

app.listen(port, function() {
    console.log("I am listening");
})