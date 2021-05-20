import axios from "axios";

const domainUrl = "https://image.tmdb.org/t/p/original/";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getProperImageUrl = (relUrl) => domainUrl.concat(relUrl);

const getProperDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${monthNames[date.getMonth()]}-${date.getFullYear()}`;
};

const loadMovies = async (
  pageNo = 1,
  language = "en-US",
  listName = "popular"
) => {
  return await axios
    .get(
      `https://api.themoviedb.org/3/movie/${listName}?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=${language}&page=${pageNo}`
    )
    .then((res) => {
      return res.data;
    });
};

const Data = () => ({
  getProperImageUrl: getProperImageUrl,
  getProperDate: getProperDate,
  loadMovies: loadMovies,
});
export default Data();
