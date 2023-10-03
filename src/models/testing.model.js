import { Schema, model } from 'mongoose';

const testingSchema = new Schema(
  {

    Date: {
      type: Date
    },
    State: {
      type: String
    },
    TotalSamples: {
      type: Number
    },
    Negative: {
      type: Number
    },
    Positive: {
      type: Number
    },
  },
  {
    timestamps: true,
    collection: 'StatewiseTestingDetails'
  }
);

export default model('Testing', testingSchema);
