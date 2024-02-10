let mongoose=require("mongoose");
let validator=require("validator");

let hotelSchema=mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    rating: Number,
    bedrooms: Number,
    bathrooms: Number,
    createdAt: Date,
    updatedAt: Date,
    email: {
        type: String,
        required: true,
        validate: (value)=>{
            return validator.isEmail(value);
        }
    }
})


hotelSchema.pre('save',function (next) {
    this.updatedAt= Date.now();
    
    if(!this.createdAt){
        this.createdAt=this.updatedAt;
    }

    next();

})



/// model basically conncts collection with schema:
module.exports =mongoose.model('airbnbs', hotelSchema);