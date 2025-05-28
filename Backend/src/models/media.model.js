import mongoose, {Schema} from "mongoose";

const mediaSchema = new Schema({
    memory:  { type: Schema.Types.ObjectId, ref: "Memory", required: true },
    type:    { 
        type: String,
        enum: ["Photo","Video","Audio","Diary","Letter","Blog","Journal"],
        required: true
    },
    title:   { type: String, default: "" },
    content: { type: String, default: "" },
    url:     { type: String, default: "" }
    }, {
    timestamps: true
});

export default mongoose.model("Media", mediaSchema);