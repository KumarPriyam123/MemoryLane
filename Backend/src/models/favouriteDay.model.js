import mongoose, {Schema} from "mongoose";
const favoriteDaySchema = new Schema({
    user:        { type: Schema.Types.ObjectId, ref: "User", required: true },
    date:        { type: Date, required: true },
    description: { type: String, default: "" }
    }, {
    timestamps: true
});
export default mongoose.model("FavoriteDay", favoriteDaySchema);