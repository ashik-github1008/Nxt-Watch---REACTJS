import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {differenceInYears} from 'date-fns'

import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'
import Header from '../Header/index'
import Sidebar from '../Sidebar/index'
import {
  VideoItemDetailsAppContainer,
  VideoItemDetailsMainContainer,
  VideoItemDetailsSuccessViewContainer,
  VideoPlayer,
  VideoItemDetailsTitle,
  VideoItemDetailsTimelineAndLikeContainer,
  ViewsAndTimelineContainer,
  VideoItemDetailsViews,
  DotIcon,
  VideoItemDetailsTimeline,
  VideoItemDetailsLikeDislikeSaveContainer,
  LikeContainer,
  LikeIcon,
  LikeText,
  DisLikeContainer,
  DisLikeIcon,
  DisLikeText,
  SaveIconTextContainer,
  SaveVideosIcon,
  SaveText,
  HorizantalLine,
  ChannelDetailsAndVideoDescContainer,
  ChannelLogo,
  ChannelDetailsContainer,
  ChannelName,
  ChannelSubscCount,
  VideoDesc,
  LoaderContainer,
  FailureViewContainer,
  FailureViewMainContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDesc,
  RetryButtonContainer,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  static contextType = SavedVideosBackgroundModeContext

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      // console.log(fetchedData)
      const videoDetailsData = fetchedData.video_details
      const updatedData = {
        id: videoDetailsData.id,
        title: videoDetailsData.title,
        videoUrl: videoDetailsData.video_url,
        thumbnailUrl: videoDetailsData.thumbnail_url,
        channel: {
          name: videoDetailsData.channel.name,
          profileImageUrl: videoDetailsData.channel.profile_image_url,
          subscriberCount: videoDetailsData.channel.subscriber_count,
        },
        viewCount: videoDetailsData.view_count,
        publishedAt: this.formattedDistance(videoDetailsData.published_at),
        description: videoDetailsData.description,
      }

      // console.log(updatedData)

      const isSaved = this.context.savedVideos.some(
        video => video.id === updatedData.id,
      ) // ***Check if video is saved***

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
        isSaved,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  formattedDistance = dateString => {
    const givenDate = new Date(dateString)
    const now = new Date()
    const yearsDifference = differenceInYears(now, givenDate)
    const formattedDistance = `${yearsDifference} year${
      yearsDifference !== 1 ? 's' : ''
    } ago`
    return formattedDistance
  }

  clickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: true,
      isDisliked: prevState.isDisliked ? false : null,
    }))
  }

  clickDislikeButton = () => {
    this.setState(prevState => ({
      isDisliked: true,
      isLiked: prevState.isLiked ? false : null,
    }))
  }

  clickSaveVideos = () => {
    this.setState(
      prevState => ({
        isSaved: !prevState.isSaved,
      }),
      () => {
        const {videoDetails, isSaved} = this.state
        const {addVideoToSaved, removeVideoFromSaved} = this.context
        if (isSaved) {
          addVideoToSaved(videoDetails)
        } else {
          removeVideoFromSaved(videoDetails.id)
        }
      },
    )
  }

  clickRetryBtn = () => {
    this.setState({searchInput: ''}, this.getVideoItemDetails)
  }

  renderVideoItemDetailsSuccessView = () => {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const {videoDetails, isLiked, isDisliked, isSaved} = this.state
          return (
            <VideoItemDetailsSuccessViewContainer>
              <VideoPlayer url={videoDetails.videoUrl}></VideoPlayer>
              <VideoItemDetailsTitle isDarkMode={isDarkMode}>
                {videoDetails.title}
              </VideoItemDetailsTitle>
              <VideoItemDetailsTimelineAndLikeContainer>
                <ViewsAndTimelineContainer>
                  <VideoItemDetailsViews>
                    {videoDetails.viewCount} views
                  </VideoItemDetailsViews>
                  <DotIcon></DotIcon>
                  <VideoItemDetailsTimeline>
                    {videoDetails.publishedAt}
                  </VideoItemDetailsTimeline>
                </ViewsAndTimelineContainer>
                <VideoItemDetailsLikeDislikeSaveContainer>
                  <LikeContainer
                    onClick={this.clickLikeButton}
                    isLiked={isLiked}
                  >
                    <LikeIcon></LikeIcon>
                    <LikeText>Like</LikeText>
                  </LikeContainer>
                  <DisLikeContainer
                    onClick={this.clickDislikeButton}
                    isDisliked={isDisliked}
                  >
                    <DisLikeIcon></DisLikeIcon>
                    <DisLikeText>Dislike</DisLikeText>
                  </DisLikeContainer>
                  <SaveIconTextContainer
                    onClick={this.clickSaveVideos}
                    isSaved={isSaved}
                  >
                    <SaveVideosIcon></SaveVideosIcon>
                    <SaveText>{isSaved ? 'Saved' : 'Save'}</SaveText>
                  </SaveIconTextContainer>
                </VideoItemDetailsLikeDislikeSaveContainer>
              </VideoItemDetailsTimelineAndLikeContainer>
              <HorizantalLine></HorizantalLine>
              <ChannelDetailsAndVideoDescContainer>
                <ChannelLogo
                  src={videoDetails.channel.profileImageUrl}
                  alt="channel logo"
                ></ChannelLogo>
                <ChannelDetailsContainer>
                  <ChannelName isDarkMode={isDarkMode}>
                    {videoDetails.channel.name}
                  </ChannelName>
                  <ChannelSubscCount>
                    {videoDetails.channel.subscriberCount} subscribers
                  </ChannelSubscCount>
                  <VideoDesc isDarkMode={isDarkMode}>
                    {videoDetails.description}
                  </VideoDesc>
                </ChannelDetailsContainer>
              </ChannelDetailsAndVideoDescContainer>
            </VideoItemDetailsSuccessViewContainer>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }

  renderLoader = () => {
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderVideoItemDetailsFailureView = () => {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <FailureViewContainer>
              <FailureViewMainContainer>
                <FailureViewImage
                  src={
                    isDarkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  }
                  alt="failure view"
                ></FailureViewImage>
                <FailureViewHeading isDarkMode={isDarkMode}>
                  Oops! Something Went Wrong
                </FailureViewHeading>
                <FailureViewDesc>
                  We are having some trouble to complete your request. Please
                  try again.
                </FailureViewDesc>
                <RetryButtonContainer onClick={this.clickRetryBtn}>
                  <RetryButton>Retry</RetryButton>
                </RetryButtonContainer>
              </FailureViewMainContainer>
            </FailureViewContainer>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }

  renderVideoItemDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetailsSuccessView()
      case apiStatusConstants.failure:
        return this.renderVideoItemDetailsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header />
              <VideoItemDetailsAppContainer>
                <Sidebar />
                <VideoItemDetailsMainContainer
                  isDarkMode={isDarkMode}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoItemDetails()}
                </VideoItemDetailsMainContainer>
              </VideoItemDetailsAppContainer>
            </>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }
}

// VideoItemDetails.contextType = SavedVideosBackgroundModeContext
export default VideoItemDetails
