import { Patient } from '../../model/Patient';
import apiSlice from '../apiSlice';

export const patientApi = apiSlice.injectEndpoints({
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
