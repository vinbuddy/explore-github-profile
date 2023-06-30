import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "src/interface";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
    endpoints: (builder) => ({
        // IUser -> result, string -> arg
        getUser: builder.query<IUser, string>({
            query: (userName: string) => `users/${userName}`,
        }),
    }),
});

export const { useGetUserQuery } = userApi;
