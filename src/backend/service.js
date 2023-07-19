const API_BASE_URL = "https://dummyapi.com"; // Replace with the actual API URL

const fetchWeatherData = async (city) => {
  try {
    const response = await fetch(`${API_BASE_URL}/weather?city=${city}`);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    // Process the weather data if needed
    return data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

const fetchNewsData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/news`);
    if (!response.ok) {
      throw new Error("Failed to fetch news data");
    }
    const data = await response.json();
    // Process the news data if needed
    return data;
  } catch (error) {
    throw new Error("Failed to fetch news data");
  }
};

const fetchMovieData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/movies`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie data");
    }
    const data = await response.json();
    // Process the movie data if needed
    return data;
  } catch (error) {
    throw new Error("Failed to fetch movie data");
  }
};

export { fetchWeatherData, fetchNewsData, fetchMovieData };
