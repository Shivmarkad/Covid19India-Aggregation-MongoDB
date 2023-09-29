import { Schema, model } from 'mongoose';

const cIndiaSchema = new Schema(
  {
    Sno: {
      type: Number
    },
    Date: {
      type: Date
    },
    Time: {
      type: String
    },
    "State/UnionTerritory": {
      type: String
    },
    ConfirmedIndianNational: {
      type: Number
    },
    ConfirmedForeignNational: {
      type: Number
    },
    Cured: {
      type: Number
    },
    Deaths: {
      type: Number
    },
    Confirmed: {
      type: Number
    }
  },
  {
    timestamps: true,
    collection: 'Covid_19_India'
  }
);

export default model('CIndia', cIndiaSchema);
