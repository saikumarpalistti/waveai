import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For API calls (replace with actual API if needed)

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.get(`https://api.example.com/chatbot-response=${searchText}`);
      setSearchResults(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Search App</h1>

      <input
        type="text"
        placeholder="Enter your search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((result) => (
            <p key={result.id}>{result.text}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
