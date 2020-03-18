"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.QuoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please Enter Client Information'],
    },
    author: {
        type: String,
        required: [true, 'Please Enter Client`s Name'],
    },
});
//# sourceMappingURL=client-base.schema.js.map