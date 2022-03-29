const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please provide password"]
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Admin", adminSchema);