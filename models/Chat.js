const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        messages: [{
            type: Schema.Types.ObjectId,
            required: true,
        }],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Chat", userSchema);