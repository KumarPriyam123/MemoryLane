import mongoose, {Schema} from "mongoose";
const communitySchema = new Schema({
    name:      { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    members:   [{ type: Schema.Types.ObjectId, ref: "User" }]
}, {
    timestamps: true
});
export default mongoose.model("Community", communitySchema);
