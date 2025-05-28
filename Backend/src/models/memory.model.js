import mongoose, {Schema} from "mongoose";

const memorySchema = new Schema({
    user:        { type: Schema.Types.ObjectId, ref: "User", required: true },
    title:       { type: String, required: true },
    description: { type: String, default: "" },
    timeStamp:   { type: Date, default: Date.now }
    }, {
    timestamps: true
});
export default mongoose.model("Memory", memorySchema);