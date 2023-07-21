import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DataProps } from "../components/LogonGroup/LoggedIn";
// const api_url = process.env.REACT_APP_STRAPI_URL;
const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:1337/api/",
    // baseUrl: api_url,
  }),
  //can be mutipule tags
  tagTypes: ["Post", "Update", "Delete"],
  endpoints: (build) => ({
    getClients: build.query({
      query: () => "clients",
      transformResponse: (response: DataProps) => response.data,
      providesTags: ["Post", "Update", "Delete"],
    }),
    createAccount: build.mutation({
      query: (body) => ({ url: "clients", method: "post", body }),
      invalidatesTags: ["Post"],
      //   transformResponse: (response: AccountProps) => response.data,
    }),
    updateAccount: build.mutation({
      query: (item) => ({
        url: `clients/${item.id}`,
        method: "put",
        body: { data: item.attributes },
      }),
      invalidatesTags: ["Update"],
    }),
    deleteAccount: build.mutation({
      query: (id) => ({
        url: `clients/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["Delete"],
    }),
  }),
});

export const {
  useGetClientsQuery,
  useCreateAccountMutation,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} = clientApi;
export default clientApi;
