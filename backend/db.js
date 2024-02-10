const {Sequelize,DataTypes}=require("sequelize")

const sequelize=new Sequelize(
    'IIT_BHU',
    'root',
    'Nikhil@2510',
    {
        host:"localhost",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0
        }
    }
)

const User=sequelize.define("users",{      //---> this is like creating models//

    name:{
        type:DataTypes.STRING
    },
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    college: {
        type: DataTypes.STRING
    }
});





sequelize.sync().then(()=>{
    console.log("Users Synced");
})

sequelize.authenticate().then(()=>{
    console.log("Connection established");
})


module.exports={
    sequelize,
    User,
}