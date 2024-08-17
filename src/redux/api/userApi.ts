import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";


export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetUsersQuery } = userApi;