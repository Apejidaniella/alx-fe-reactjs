// const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY
import axios from "axios";

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
};

export default fetchUserData;