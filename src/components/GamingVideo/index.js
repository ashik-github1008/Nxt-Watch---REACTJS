import {Link} from 'react-router-dom'
import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'
import {
  GamingVideoItemContainer,
  GamingVideoThumbnail,
  GamingVideoTitle,
  GamingVideoCount,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails
  return (
    <SavedVideosBackgroundModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <GamingVideoItemContainer>
            <Link to={`/videos/${id}`}>
              <GamingVideoThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              ></GamingVideoThumbnail>
            </Link>
            <GamingVideoTitle isDarkMode={isDarkMode}>{title}</GamingVideoTitle>
            <GamingVideoCount>{viewCount} Watching Worldwide</GamingVideoCount>
          </GamingVideoItemContainer>
        )
      }}
    </SavedVideosBackgroundModeContext.Consumer>
  )
}

export default GamingVideoItem
