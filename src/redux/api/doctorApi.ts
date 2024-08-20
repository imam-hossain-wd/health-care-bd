import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getdoctors: build.query({
      query: () => ({
        url: "/doctor",
        method: "GET",
      }),
      providesTags: [tagTypes.doctor],
    }),
  }),
});

export const { useGetdoctorsQuery } = doctorApi;