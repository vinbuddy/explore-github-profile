import React, { ChangeEvent, FormEvent, useState } from "react";
import "./SearchBar.scss";
import { CiSearch } from "react-icons/ci";

interface ISearchProps {
    searchUser: (userName: string) => void;
}

const SearchBar: React.FunctionComponent<ISearchProps> = ({ searchUser }) => {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const submitSearch = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        searchUser(searchInput);
        setSearchInput("");
    };

    return (
        <form onSubmit={submitSearch} className="search-wrapper">
            <input
                value={searchInput}
                onChange={handleChangeInput}
                placeholder="Enter github username"
                type="text"
            />
            <button>
                <CiSearch />
            </button>
        </form>
    );
};

export default SearchBar;
