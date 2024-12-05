import {Link} from 'react-router-dom'
import {
  SavedVideoItemContainer,
  SavedVideoThumbnail,
  SavedVideoDetails,
  SavedVideoItemTitle,
  ChannelName,
  ViewsAndTimelineContainer,
  Views,
  DotIcon,
  Timeline,
} from './styledComponents'
import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, channelName, views, publishedAt} =
    videoDetails

  return (
    <SavedVideosBackgroundModeContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <SavedVideoItemContainer>
            <Link to={`/videos/${id}`}>
              <SavedVideoThumbnail
                src={thumbnailUrl}
                alt="video thumbnail"
              ></SavedVideoThumbnail>
            </Link>
            <SavedVideoDetails>
              <SavedVideoItemTitle isDarkMode={isDarkMode}>
                {title}
              </SavedVideoItemTitle>
              <ChannelName isDarkMode={isDarkMode}>{channelName}</ChannelName>
              <ViewsAndTimelineContainer>
                <Views>{views} views</Views>
                <DotIcon></DotIcon>
                <Timeline>{publishedAt}</Timeline>
              </ViewsAndTimelineContainer>
            </SavedVideoDetails>
          </SavedVideoItemContainer>
        )
      }}
    </SavedVideosBackgroundModeContext.Consumer>
  )
}

export default SavedVideoItem
