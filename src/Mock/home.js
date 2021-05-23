const home = {
  allMovies: {
    title: "All Movies",
    emptyListMsg: "No Movies To Show !",
  },
  myMovies: {
    title: "My Movies",
    emptyListMsg: "No Movies To Show !",
  },
  addItemData: {
    title: "Add a new movie",
    form: {
      rows: [
        {
          type: "movieName",
          label: "Name",
        },
        {
          type: "movieDate",
          label: "Release Date",
        },
        {
          type: "movieOverview",
          label: "Overview",
        },
        {
          type: "moviePoster",
          label: "Poster",
        },
      ],
    },
  },
};

export default home;
