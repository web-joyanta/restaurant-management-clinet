import { useState } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="form-control lg:col-span-2">
            <label className="label flex lg:justify-center">
                <span className="label-text">Search</span>
            </label>
            <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                name='search'
                type="text"
                placeholder="Search foods by name..."
                className="input input-bordered w-full lg:border-2 lg:border-custom-orange  lg:rounded-4xl"
            />
        </div>
    );
};

export default Search;