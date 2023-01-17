const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            trim: true,
            lowercase: true,
            required: true,
        },
        password: {
            type: String,
            trim: true,
            minLength: 3,
            required: true,
        },
        admin: {
            type: Boolean,
            require: true
        },
        profileImage: {
            type: String
        },
        chats: [{
            type: Schema.Types.ObjectId
        }]

    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                return ret;
            },
        },
    }
);

module.exports = mongoose.model("User", userSchema);
