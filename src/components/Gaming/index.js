import Header from '../Header/index'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'
import Sidebar from '../Sidebar/index'
import {
  GamingAppContainer,
  GamingMainContainer,
  GamingNavHeader,
  GamingNavBodyContent,
  GamingIconContainer,
  GamingIcon,
  GamingText,
  GamingVideosListContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewMainContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDesc,
  RetryButtonContainer,
  RetryButton,
} from './styledComponents'

import GamingVideoItem from '../GamingVideo/index'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const gamingVideosData = fetchedData.videos

      const updatedData = gamingVideosData.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickRetryBtn = () => {
    this.getGamingVideosList()
  }

  renderGamingVideosListSuccessView = () => {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const {gamingVideosList} = this.state
          return (
            <GamingVideosListContainer>
              {gamingVideosList.map(eachVideo => (
                <GamingVideoItem key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </GamingVideosListContainer>
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

  renderGamingVideosListFailureView = () => {
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

  renderGamingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingVideosListSuccessView()
      case apiStatusConstants.failure:
        return this.renderGamingVideosListFailureView()
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
              <GamingAppContainer>
                <Sidebar />
                <GamingMainContainer
                  isDarkMode={isDarkMode}
                  data-testid="gaming"
                >
                  <GamingNavHeader isDarkMode={isDarkMode}>
                    <GamingNavBodyContent>
                      <GamingIconContainer isDarkMode={isDarkMode}>
                        <GamingIcon></GamingIcon>
                      </GamingIconContainer>
                      <GamingText isDarkMode={isDarkMode}>Gaming</GamingText>
                    </GamingNavBodyContent>
                  </GamingNavHeader>
                  {this.renderGamingVideos()}
                </GamingMainContainer>
              </GamingAppContainer>
            </>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }
}

export default Gaming
