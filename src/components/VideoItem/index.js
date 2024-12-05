import {Link} from 'react-router-dom'
import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'
import {
  VideoItemContainer,
  VideoThumbnailImage,
  VideoItemContentContainer,
  ChannelProfileImage,
  VideoItemDescContainer,
  VideoItemTitle,
  VideoItemChannelName,
  VideoItemViewsTimelineContainer,
  ViewsText,
  DotIcon,
  TimelineText,
} from './styledComponents'

const VideoItem = props => {
  const {videoItemDetails} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} =
    videoItemDetails

  const {name, profileImageUrl} = channel

  return (
    <SavedVideosBackgroundModeContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <VideoItemContainer>
            <Link to={`/videos/${id}`}>
              <VideoThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              ></VideoThumbnailImage>
            </Link>
            <VideoItemContentContainer>
              <ChannelProfileImage
                src={profileImageUrl}
                alt="channel logo"
              ></ChannelProfileImage>
              <VideoItemDescContainer>
                <VideoItemTitle isDarkMode={isDarkMode}>{title}</VideoItemTitle>
                <VideoItemChannelName isDarkMode={isDarkMode}>
                  {name}
                </VideoItemChannelName>
                <VideoItemViewsTimelineContainer>
                  <ViewsText>{viewCount} views</ViewsText>
                  <DotIcon></DotIcon>
                  <TimelineText>{publishedAt}</TimelineText>
                </VideoItemViewsTimelineContainer>
              </VideoItemDescContainer>
            </VideoItemContentContainer>
          </VideoItemContainer>
        )
      }}
    </SavedVideosBackgroundModeContext.Consumer>
  )
}

export default VideoItem
