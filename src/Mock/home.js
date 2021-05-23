const home = {
  allMovies: {
    title: "All Movies",
    emptyListMsg: "No Movies To Show !",
    addTitle: "Add to my movies",
    removeTitle: "Remove from my movies",
  },
  allLikedMovies: {
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
