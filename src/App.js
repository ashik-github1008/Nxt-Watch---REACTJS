import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import SavedVideosBackgroundModeContext from './context/SavedVideosBackgroundModeContext'
import LoginForm from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkMode: false, savedVideos: []}
  changeBackgroundMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  addVideoToSaved = videoDetails => {
    this.setState(prevState => ({
      savedVideos: [
        ...prevState.savedVideos,
        {
          id: videoDetails.id,
          thumbnailUrl: videoDetails.thumbnailUrl,
          title: videoDetails.title,
          channelName: videoDetails.channel.name,
          views: videoDetails.viewCount,
          publishedAt: videoDetails.publishedAt,
        },
      ],
    }))
  }

  removeVideoFromSaved = videoId => {
    this.setState(prevState => ({
      savedVideos: prevState.savedVideos.filter(video => video.id !== videoId),
    }))
  }

  render() {
    const {isDarkMode, savedVideos} = this.state
    return (
      <SavedVideosBackgroundModeContext.Provider
        value={{
          isDarkMode,
          changeBackgroundMode: this.changeBackgroundMode,
          savedVideos,
          addVideoToSaved: this.addVideoToSaved,
          removeVideoFromSaved: this.removeVideoFromSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute
            exact
            path="/trending"
            component={Trending}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/gaming"
            component={Gaming}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideos}
          ></ProtectedRoute>
          <ProtectedRoute component={NotFound}></ProtectedRoute>
        </Switch>
      </SavedVideosBackgroundModeContext.Provider>
    )
  }
}

export default App
