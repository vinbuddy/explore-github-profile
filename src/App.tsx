import React from "react";
import "./App.scss";
import SearchBar from "src/components/SearchBar";
import Content from "./components/Content";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useLazyGetUserQuery } from "./features/apiSlice";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
    const [getUser, { data, isLoading }] = useLazyGetUserQuery();

    const searchUser = (userName: string): void => {
        getUser(userName);
    };

    return (
        <div className="app">
            <div className="container">
                <SearchBar searchUser={searchUser} />
                {isLoading && <AiOutlineLoading3Quarters className="loading" />}

                {data && <Content user={data} />}
            </div>
        </div>
    );
};

export default App;
