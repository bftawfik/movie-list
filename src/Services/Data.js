const domainUrl = "https://image.tmdb.org/t/p/original/";

const getProperImageUrl = (relUrl) => domainUrl.concat(relUrl);

const Data = () => ({
  getProperImageUrl: getProperImageUrl,
});
export default Data();
