import { CardioPatient } from '../../models/cardioPatients';
import apiSlice from '../apiSlice';

const cardioDataAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCardioPatients: builder.query<CardioPatient, void>({
      query: () => ({
        url: 'cardio_patients',
        method: 'GET',
      }),
      providesTags: ['CardioData'],
    }),
  }),
});

export const { useGetCardioPatientsQuery } = cardioDataAPI;
