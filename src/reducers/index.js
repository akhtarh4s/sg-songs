import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Ambitions as A Rider", duration: "4:05" },
    { title: "Outlaws", duration: "2:30" },
    { title: "Me and my Girlfriend", duration: "3:15" },
    { title: "Hail Mary", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
