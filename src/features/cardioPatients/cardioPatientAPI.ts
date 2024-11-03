import { CardioPatient } from '../../model/cardioPatient';
import apiSlice from '../apiSlice';

export const cardioPatientAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPatients: builder.query<CardioPatient, void>({
      query: () => ({
        url: 'cardio_patients',
        method: 'GET',
      }),
      providesTags: ['Cardio Patients'],
    }),
  }),
});

export const { useGetPatientsQuery } = cardioPatientAPI;
