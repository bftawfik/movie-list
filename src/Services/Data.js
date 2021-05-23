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

const imageExists = (imageUrl) => {
  const http = new XMLHttpRequest();

  http.open("HEAD", imageUrl, false);
  try {
    http.send();
  } catch (error) {
    console.log(error);
  }
  // console.log(http.status);
  return http.status != 404;
};

const getProperImageUrl = (imageUrl, type) =>
  type === "userMovie"
    ? imageUrl !== null
      ? imageUrl
      : "/img/placeholder.svg"
    : imageExists(domainUrl.concat(imageUrl))
    ? domainUrl.concat(imageUrl)
    : "/img/placeholder.svg";

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
