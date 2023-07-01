export interface IUser {
    id?: number;
    name?: string;
    avatar_url?: string;
    html_url?: string;
    followers?: number;
    following?: number;
    public_repos?: number;
    bio?: string;
    login?: string;
    repos_url?: string;
}

export interface IRepo {
    id?: number;
    name?: string;
    description?: string;
    svn_url?: string;
    language?: string;
    stargazers_count: number;
}
