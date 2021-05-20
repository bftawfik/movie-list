import data from "../Mock/movie";

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
  // console.log();
  return `${monthNames[date.getMonth()]}-${date.getFullYear()}`;
};

const Data = () => ({
  getProperImageUrl: getProperImageUrl,
  getProperDate: getProperDate,
});
export default Data();
