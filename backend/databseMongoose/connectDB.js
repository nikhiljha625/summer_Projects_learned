var mongoose =require('mongoose');
// const url = 'mongodb+srv://nitinjha9838:<ViQlu3LtfFKXipxq>@cluster0.1qdlz5d.mongodb.net/?retryWrites=true&w=majority'


const server ='127.0.0.1:27017';

const database='airbnbs';

class Database {

    constructor() { 
        this._connect();
    }

    _connect(){
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(()=>{
            console.log("connected to db");
        })
        .catch((err)=>{
            console.log("some error");
        })
    }
   
}


module.exports= new Database()