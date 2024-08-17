import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi} from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";

// https://jsonplaceholder.typicode.com/users

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  // baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});