import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, IUser } from "src/interface";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/" }),
    endpoints: (builder) => ({
        // IUser -> result, string -> arg
        getUser: builder.query<IUser, string>({
            query: (userName: string) => `users/${userName}`,
        }),
        getRepos: builder.query<IRepo[], string>({
            query: (userName) => `users/${userName}/repos`,
        }),
    }),
});

export const { useLazyGetUserQuery, useGetReposQuery } = userApi;
