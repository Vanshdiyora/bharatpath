import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  "http://localhost:8000";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,

    credentials: "include",

    prepareHeaders: (headers) => {
      headers.set(
        "Accept",
        "application/json",
      );

      return headers;
    },
  }),

  tagTypes: [
    "Auth",
    "College",
    "Student",
    "Analytics",
    "Billing",
  ],

  endpoints: () => ({}),
});