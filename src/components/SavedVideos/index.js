import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import SavedVideoItem from '../SavedVideoItem/index'

import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'
import {
  SavedVideosAppContainer,
  SavedVideosMainContainer,
  SavedVideosNavHeader,
  SavedVideosNavBodyContent,
  SavedVideosIconContainer,
  TrendingIcon,
  SavedVideosText,
  SavedVideosListContainer,
  NoSavedVideosViewContainer,
  NoSavedVideosMainContainer,
  NoSavedVideosImg,
  NoSavedViewHeading,
  NoSavedViewDesc,
} from './styledComponents'

const SavedVideos = props => {
  const renderSavedVideosList = () => {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {savedVideos, isDarkMode} = value
          return (
            <>
              <SavedVideosNavHeader isDarkMode={isDarkMode}>
                <SavedVideosNavBodyContent>
                  <SavedVideosIconContainer isDarkMode={isDarkMode}>
                    <TrendingIcon></TrendingIcon>
                  </SavedVideosIconContainer>
                  <SavedVideosText isDarkMode={isDarkMode}>
                    Saved Videos
                  </SavedVideosText>
                </SavedVideosNavBodyContent>
              </SavedVideosNavHeader>
              <SavedVideosListContainer>
                {savedVideos.map(eachVideo => (
                  <SavedVideoItem key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideosListContainer>
            </>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }

  const renderNoSavedVideos = () => {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <NoSavedVideosViewContainer>
              <NoSavedVideosMainContainer>
                <NoSavedVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                ></NoSavedVideosImg>
                <NoSavedViewHeading isDarkMode={isDarkMode}>
                  No saved videos found
                </NoSavedViewHeading>
                <NoSavedViewDesc isDarkMode={isDarkMode}>
                  You can save your videos while watching them
                </NoSavedViewDesc>
              </NoSavedVideosMainContainer>
            </NoSavedVideosViewContainer>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }

  return (
    <SavedVideosBackgroundModeContext.Consumer>
      {value => {
        const {isDarkMode, savedVideos} = value
        return (
          <>
            <Header />
            <SavedVideosAppContainer>
              <Sidebar />
              <SavedVideosMainContainer
                isDarkMode={isDarkMode}
                data-testid="savedVideos"
              >
                {savedVideos.length > 0
                  ? renderSavedVideosList()
                  : renderNoSavedVideos()}
              </SavedVideosMainContainer>
            </SavedVideosAppContainer>
          </>
        )
      }}
    </SavedVideosBackgroundModeContext.Consumer>
  )
}

export default SavedVideos
