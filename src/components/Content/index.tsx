import * as React from "react";
import Profile from "./Profile";
import Repo from "./Repo";
import { IUser } from "src/interface";

interface IContentProps {
    user: IUser;
}

const Content: React.FunctionComponent<IContentProps> = ({ user }) => {
    return (
        <div>
            <Profile user={user} />
            {/* non-null assertion operator */}
            <Repo userName={user?.login!} />
        </div>
    );
};

export default Content;
