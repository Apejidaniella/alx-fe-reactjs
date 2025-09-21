import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-4 py-2 rounded-lg w-64"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Looks like we cant find the user</p>}
      {userData && (
        <div className="mt-6 p-4 border rounded-lg shadow-lg text-center">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
          />
          <h2 className="mt-2 text-lg font-semibold">
            {userData.name || userData.login}
          </h2>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
