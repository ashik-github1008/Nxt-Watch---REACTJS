import Header from '../Header/index'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {differenceInYears} from 'date-fns'
import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'
import Sidebar from '../Sidebar/index'
import TrendingVideo from '../TrendingVideo/index'
// import {differenceInYears} from 'date-fns'

import {
  TrendingAppContainer,
  TrendingMainContainer,
  TrendingNavHeader,
  TrendingNavBodyContent,
  TrendingIconContainer,
  TrendingIcon,
  TrendingText,
  TrendingVideoListContainer,
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

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const trendingVideosData = fetchedData.videos
      const updatedData = trendingVideosData.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: this.formattedDistance(eachVideo.published_at),
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosList: updatedData,
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

  renderTrendingVideosListSuccessView = () => {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const {trendingVideosList} = this.state
          return (
            <TrendingVideoListContainer>
              {trendingVideosList.map(eachVideo => (
                <TrendingVideo key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </TrendingVideoListContainer>
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

  clickRetryBtn = () => {
    this.getTrendingVideosList()
  }

  renderTrendingVideosListFailureView = () => {
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

  renderTrendingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderTrendingVideosListSuccessView()
      case apiStatusConstants.failure:
        return this.renderTrendingVideosListFailureView()
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
              <TrendingAppContainer>
                <Sidebar />
                <TrendingMainContainer
                  isDarkMode={isDarkMode}
                  data-testid="trending"
                >
                  <TrendingNavHeader isDarkMode={isDarkMode}>
                    <TrendingNavBodyContent>
                      <TrendingIconContainer isDarkMode={isDarkMode}>
                        <TrendingIcon></TrendingIcon>
                      </TrendingIconContainer>
                      <TrendingText isDarkMode={isDarkMode}>
                        Trending
                      </TrendingText>
                    </TrendingNavBodyContent>
                  </TrendingNavHeader>
                  {this.renderTrendingVideos()}
                </TrendingMainContainer>
              </TrendingAppContainer>
            </>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }
}

export default Trending
