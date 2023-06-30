import * as React from "react";
import "./SearchBar.scss";
import { CiSearch } from "react-icons/ci";

interface ISearchProps {}

const SearchBar: React.FunctionComponent<ISearchProps> = () => {
    return (
        <form className="search-wrapper">
            <input placeholder="Enter github username" type="text" />
            <button>
                <CiSearch />
            </button>
        </form>
    );
};

export default SearchBar;
