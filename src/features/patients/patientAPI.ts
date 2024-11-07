import { Patient } from '../../models/patient';
import apiSlice from '../apiSlice';

const patientApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatients: builder.query<Patient[], void>({
      query: () => ({
        url: 'patients',
        method: 'GET',
      }),
      providesTags: ['Patients'],
    }),
  }),
});

export const { useGetPatientsQuery } = patientApi;
