import * as React from "react";
import "./Content.scss";
import { AiOutlineStar } from "react-icons/ai";
import { IRepo } from "src/interface";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useGetReposQuery } from "src/features/apiSlice";

interface IRepoProps {
    userName: string;
}

const Repo: React.FunctionComponent<IRepoProps> = ({ userName }) => {
    const { data: repos, isLoading } = useGetReposQuery(userName);

    return (
        <div className="repo-wrapper">
            {isLoading && <AiOutlineLoading3Quarters className="loading" />}
            <ul className="repo-list">
                {repos &&
                    repos.map((repo) => (
                        <li key={repo?.id} className="repo-item">
                            <a
                                rel="noreferrer"
                                target="_blank"
                                className="repo-inner"
                                href={repo?.svn_url}
                            >
                                <div className="d-flex algin-items-center justify-content-between">
                                    <p className="repo-name">{repo?.name}</p>
                                    <p className="repo-language">
                                        {repo?.language || "Not available"}
                                    </p>
                                </div>
                                <p className="repo-desc">
                                    {repo?.description || "Not available"}
                                </p>
                                <p className="d-flex algin-items-center">
                                    <AiOutlineStar className="repo-star-icon" />
                                    &nbsp;
                                    {repo?.stargazers_count}
                                </p>
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Repo;
