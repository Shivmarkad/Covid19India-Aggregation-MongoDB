import { Schema, model } from 'mongoose';

const vaccineSchema = new Schema(
  {
    Updated : {
        type: String
      },
    State: {
        type: String
      },
    "Total Doses Administered": {
        type: Number
      },
    Sessions: {
        type: Number
      },
    Sites: {
        type: Number
      },
    "First Dose Administered": {
        type: Number
      },
    "Second Dose Administered": {
        type: Number
      },
    "Male (Doses Administered)": {
        type: Number
      },
    "Female (Doses Administered)": {
        type: Number
      },
    "Transgender (Doses Administered)": {
        type: Number
      },
    "Covaxin (Doses Administered)": {
        type: Number
      },
    "CoviShield (Doses Administered)": {
        type: Number
      },
    "Total Individuals Vaccinated": {
        type: Number
      },
  },
  {
    timestamps: true,
    collection: 'cVaccineStateWise'
  }
);

export default model('Vaccine', vaccineSchema);
