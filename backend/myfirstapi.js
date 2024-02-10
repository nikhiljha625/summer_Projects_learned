const express = require("express");
const cors = require("cors");

const app = express();

const {User}=require('./db')
// Whitelisting
app.use(cors());
app.use(express.json());


function insertUserToDB(name,email,password){
      return User.create({
        name: name,
        email: email,
        password: password,
      })

  }
async function adduserApi(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let password=req.body.password;
  let response=await insertUserToDB(name, email,password);
  res.status(201).send({ "id": response.id });
}

async function loginApi(req,res){
  let email=req.body.email;
  let password=req.password;
  let user=await User.findOne({
    where: {
      email: email,
      password: password, 
    }
  })
  if(user){
    res.status(200).send({"Succes",true});
  }
  else{
    res.status(401).send({"loggedIn" false});
  }
}
async function getalluserApi(req,res) {
    let response=await User.findAll({
      where: {
        name: "Nikhil jha"
      }
    })
    res.status(201).send(response);
}
function addtaskApi(req, res) {
  // Implement your logic for the addtask API
}

app.post('/signup', adduserApi);
app.post('/login',loginApi);

app.get('/getallusers',getalluserApi);
app.post('/addtask', addtaskApi);

let port = 3190;

app.listen(port, function () {
  console.log("Listening on port:", port);
});
