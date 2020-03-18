import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please Enter Client Information'],
  },
  author: {
    type: String,
    required: [true, 'Please Enter Client`s Name'],
  },
});
