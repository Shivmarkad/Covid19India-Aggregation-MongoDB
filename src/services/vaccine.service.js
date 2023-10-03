import Vaccine from '../models/vaccine.model';

//get covid data
export const getStateWiseDosesAdm = async (state) => {
  const data = await Vaccine.aggregate([
    { $match: { State: state } },
    {
      $group: {
        _id: '$State',
        totalAdministered: { $sum: "$Total Doses Administered" },
        totalMaleVaccinated: { $sum: "$Male (Doses Administered)" },
        totalFemaleVaccinated: { $sum: "$Female (Doses Administered)" }
      }
    }
  ]);
  if (data) return data;
  throw new Error('Details not found');
};
