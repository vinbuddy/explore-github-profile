import * as React from "react";
import { IUser } from "src/interface";
import "./Content.scss";

interface IProfile {
    user: IUser;
}

const Profile: React.FunctionComponent<IProfile> = ({ user }) => {
    return (
        <div className="profile-wrapper">
            <img src={user?.avatar_url} alt="avatar" />
            <div className="profile-info">
                <div className="d-flex align-items-center justify-content-between">
                    <h2>{user?.name}</h2>
                    <a rel="noreferrer" target="_blank" href={user?.html_url}>
                        Visit profile
                    </a>
                </div>
                <p className="profile-username">@{user?.login}</p>
                <p className="profile-bio">Bio: {user?.bio}</p>

                <ul className="d-flex align-items-center justify-content-between">
                    <li>Repo: {user?.public_repos}</li>
                    <li>Follower: {user?.followers}</li>
                    <li>Following: {user?.following}</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
