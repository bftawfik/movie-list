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
const getFallbackImage = () => "/img/placeholder.svg";

const getProperImageUrl = (imageUrl, type) =>
  type === "userMovie" ? imageUrl : domainUrl.concat(imageUrl);

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
  getFallbackImage: getFallbackImage,
  getProperImageUrl: getProperImageUrl,
  getProperDate: getProperDate,
  loadMovies: loadMovies,
});
export default Data();
