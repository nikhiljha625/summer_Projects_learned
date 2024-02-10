const express = require("express")
const cors=require("cors")
const mysql=require("mysql")
const dotenv=require('dotenv')
//  const { MongoClient } = require("mongodb");
const db =require('./databseMongoose/connectDB');
const HotelModel =require('./model/hotel')
dotenv.config();
const app = express();

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// whitelisting
app.use(cors())

app.use(express.json())


// console.log(process.env.DB_USER);
// console.log(process.env.HOST);
// console.log(process.env.PASSWORD);
// console.log(process.env.DB);

let pool=mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    connectionLimit: process.env.CONN_LIM
});


// app.use(function(req,res,next){
//     // req.body.user="Nikhil";
//     console.log("middleware 1");
//     let olsendfunc=res.send;
//     res.send=function(data){
//         console.log(data);
//         if(data.error){
//             res.send=olsendfunc;
//             res.send({"Error":"Something Went Wrong"});
//         }else{
//             res.send=olsendfunc;
//             res.send({"Succes":"Hurray"});
//         }
//     }

    
//     next();
//     console.log("end of Middleware 1")
// })

function middle2(req,res,next){
    console.log("middleware 2");
    next();
    console.log("End of middleware 2");
}

function middle3(req,res,next){
    console.log("middleware 3");
    next();
    console.log("End of middleware 3");
}

app.use('/isEven',[middle2,middle3])

// error handling middleware


function countVowels(name) {
    name = name.toLowerCase();
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) count++;
    }
    return count;
}

function countVowelsApi(req, res) {
    if(!req.body.name){
        res.send({"error":"GDB"});
    }
    console.log(req.body);
    let name = req.body.name;
    let count = countVowels(name);
    res.send({"vowels": count});
}

function isEven(num){
    // if(num%2==0) return "even";
    // else return "odd";

    // may be someunexpected came

    // try{
    //     // console.log(xyz);
    //     throw new Error("Something bad happened");   // eg. bank withdrawal system uses this incase of insufficent bal; 
    // }catch{
    //     console.log("There is an error");
    // }

    throw new Error("Something bad happened");  // special case

}

function checkEvenApi(req,res){
    let num=req.query.num;
    let ans=isEven(num);
    res.send({"type":ans});
}


function getprogress(req,res){
    console.log(req.params);
}


function insertUserToDB(name,email){

let query=`insert into users (name,email) values ('${name}','${email}')`
    
    
    return new Promise((resolve,rej)=>{
        pool.query(query, (err,res)=>{
            // console.log(res);
            if(err) rej(err);
            resolve(res.insertId)
        });
    })
    
    console.log("DONE INSERTING");

}

async function adduserApi(req,res){
    let name=req.body.name;
    let email=req.body.email;
    let college=req.body.college;
    let id=await insertUserToDB(name,email);
    res.status(201).send({"id":id})
}


app.get('/countVowels', countVowelsApi)

app.get('/isEven',checkEvenApi)


app.get('/user/:user_id/courses/:courses_id',getprogress)

app.post('/adduser',adduserApi)


app.use(function(err,req,res,next){
    console.log("Some unexpected occur");
    console.log(req.query.num);
    res.status(500).send({"error":"please try in some time"});
})


let port = 3060

// app.listen(port, function() {
//     console.log("I am listening");
// })

app.listen(port, async () => {
    // await client.connect();      // not required as mongooses comes in play
    // addlistingToAirBnb(client,{
    //     name: "dummy",
    //     bedroom: 2,
    //     bathroom: 2,
    //     rating: 4.3
    // })
    // getlist(client,"dummy");
    // console.log('Connected successfully to server');
    console.log("Listening to this port : 3060");
    // insertNewHotel();
    findAndUpdate("MY next one HtoeL",4.8);
})


const insertNewHotel=async()=>{
    let MyNewHotelDoc= new HotelModel({
        name: "MY next one HtoeL",
        rating:  4.5,
        bedrooms: 4,
        bathrooms: 3,
        email: "abc@gmail.com"
    })

    let result = await MyNewHotelDoc.save();
    console.log(result);
}

const findAndUpdate=async (name,newrating)=>{
    var result=await HotelModel.find({name:name});
    var firstHotelOfList=result[0];
    firstHotelOfList.rating=newrating;
    const res=await firstHotelOfList.save();
    console.log(res);
}


/*
this was for mongodb:)
async function addlistingToAirBnb(client,dataOfListing){
    const result=await client.db("airbnbs").collection("airbnbs").insertOne(dataOfListing);
    console.log(result);
}

async function getlist(client,name){
    const result=await client.db("airbnbs").collection("airbnbs").findOne({name:name})
    console.log(result);
}
async function gettop2hotel(client){
    const result= await client.db("airbnbs").collection("airbnbs").find().sort({rating:-1}).limit(2);
}

async function updatehotel(client){
    const result= await client.db("airbnbs").collection("airbnbs").findOne({name: name},{"$set":{rating: 4}})
}
*/