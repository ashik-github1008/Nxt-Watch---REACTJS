import React from 'react'

const SavedVideosBackgroundModeContext = React.createContext({
  isDarkMode: false,
  changeBackgroundMode: () => {},
  savedVideos: [],
  addVideoToSaved: () => {},
  removeVideoFromSaved: () => {},
})

export default SavedVideosBackgroundModeContext
