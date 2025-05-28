import mongoose, {Schema} from "mongoose";
const calendarSchema = new Schema({
    user:      { type: Schema.Types.ObjectId, ref: "User", required: true },
    memory:    { type: Schema.Types.ObjectId, ref: "Memory" },  // optional
    eventName: { type: String, required: true },
    date:      { type: Date, required: true }
    }, {
    timestamps: true
});
export default mongoose.model("Calendar", calendarSchema);