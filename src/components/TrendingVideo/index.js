import {Link} from 'react-router-dom'
import {
  TrendingVideoContainer,
  TrendingVideoThumbnail,
  TrendingVideoDetails,
  TrendingVideoTitle,
  ChannelName,
  ViewsAndTimelineContainer,
  Views,
  DotIcon,
  Timeline,
} from './styledComponents'

import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'

const TrendingVideo = props => {
  const {videoDetails} = props
  const {id} = videoDetails

  return (
    <SavedVideosBackgroundModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <TrendingVideoContainer>
            <Link to={`/videos/${id}`}>
              <TrendingVideoThumbnail
                src={videoDetails.thumbnailUrl}
                alt="video thumbnail"
              ></TrendingVideoThumbnail>
            </Link>
            <TrendingVideoDetails>
              <TrendingVideoTitle isDarkMode={isDarkMode}>
                {videoDetails.title}
              </TrendingVideoTitle>
              <ChannelName isDarkMode={isDarkMode}>
                {videoDetails.channel.name}
              </ChannelName>
              <ViewsAndTimelineContainer>
                <Views>{videoDetails.viewCount} views</Views>
                <DotIcon></DotIcon>
                <Timeline>{videoDetails.publishedAt}</Timeline>
              </ViewsAndTimelineContainer>
            </TrendingVideoDetails>
          </TrendingVideoContainer>
        )
      }}
    </SavedVideosBackgroundModeContext.Consumer>
  )
}

export default TrendingVideo
