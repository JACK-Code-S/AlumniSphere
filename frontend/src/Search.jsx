import React, { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.length >= 3) {
            axios.get(`http://localhost:5000/api/search?query=${query}`)
                .then(response => setResults(response.data))
                .catch(error => console.error(error));
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search alumni"
            />
            <ul>
                {results.map((alum) => (
                    <li key={alum.id}>{alum.name} - {alum.profession}</li>
                ))}
            </ul>
        </div>
    );
}

export default Search;
