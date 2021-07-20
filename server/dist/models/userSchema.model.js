"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        dafault: 'user',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const User = mongoose_1.model('user', userSchema);
exports.default = User;
