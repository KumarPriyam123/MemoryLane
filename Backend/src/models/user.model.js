import mongoose, {Schema} from 'mongoose';
const userSchema = new Schema({
    userId : {
        type: String,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique : true,
        lowercase : true,    
        trim : true
    },
    fullName : {
        required : true,
        type : String,
        trim : true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    DOB:{
        type: Date,
        required: true
    },
    communities: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Community" }],
    refreshToken: {
        type: String
    }
},{
    timestamps: true
})