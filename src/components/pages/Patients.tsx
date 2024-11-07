import { useGetPatientsQuery } from '../../features/patients/patientAPI';
import { Patient } from '../../models/patient';

export const Patients = () => {
  const { data: patients } = useGetPatientsQuery();

  return (
    <>
      {patients.map((p: Patient) => (
        <div key={p.patient_id}>{p.attending_physician}</div>
      ))}
      <h1>Patients</h1>
    </>
  );
};
