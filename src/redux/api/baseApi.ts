import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi} from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";


export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string }),
  // baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});