import { useGetCardioPatientsQuery } from '../../features/cardioPatients/cardioPatientAPI';

export const CardioPatients = () => {
  const { data } = useGetCardioPatientsQuery();

  console.log(data, 'cadio');
  return <div>CardioPatients</div>;
};
