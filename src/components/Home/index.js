import Header from '../Header/index'
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
// import {formatDistanceToNow} from 'date-fns'
import {differenceInYears} from 'date-fns'

import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'
import {
  HomeAppContainer,
  HomeMainContainer,
  HomeBannerContainer,
  HomeBannerContentContainer,
  HomeBannerLogo,
  BannerTextContent,
  BannerButton,
  BannerCloseButton,
  BannerCloseIcon,
  BannerLogoCloseBtnContainer,
  BannerBtnContainer,
  HomeSearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchIconContainer,
  SearchIcon,
  HomeSearchVideoItemListContainer,
  SearchButton,
  LoaderContainer,
  FailureViewContainer,
  FailureViewMainContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDesc,
  NoSearchResultsContainer,
  NoSearchResultsMainContainer,
  NoSearchResultsImage,
  NoSearchResultsHeading,
  NoSearchResultsDesc,
  RetryButtonContainer,
  RetryButton,
} from './styledComponents'

import Sidebar from '../Sidebar/index'

import VideoItem from '../VideoItem/index'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isBannerClose: false,
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getVideoItemListDetails()
  }

  getVideoItemListDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
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
        videosList: updatedData,
        // videosList: [],
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

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickBannerCloseBtn = () => {
    this.setState(prevState => ({
      isBannerClose: !prevState.isBannerClose,
    }))
  }

  clickSearchIconButton = event => {
    this.getVideoItemListDetails()
  }

  clickRetryBtn = () => {
    this.setState(this.getVideoItemListDetails)
  }

  renderBannerContainer = () => {
    return (
      <HomeBannerContainer data-testid="banner">
        <HomeBannerContentContainer>
          <BannerLogoCloseBtnContainer>
            <HomeBannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            ></HomeBannerLogo>
            <BannerCloseButton
              onClick={this.onClickBannerCloseBtn}
              data-testid="close"
            >
              <BannerCloseIcon></BannerCloseIcon>
            </BannerCloseButton>
          </BannerLogoCloseBtnContainer>
          <BannerTextContent>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerTextContent>
          <BannerBtnContainer>
            <BannerButton>GET IT NOW</BannerButton>
          </BannerBtnContainer>
        </HomeBannerContentContainer>
      </HomeBannerContainer>
    )
  }

  renderNoSearchResultsView = () => {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <NoSearchResultsContainer>
              <NoSearchResultsMainContainer>
                <NoSearchResultsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
                  alt="no videos"
                ></NoSearchResultsImage>
                <NoSearchResultsHeading isDarkMode={isDarkMode}>
                  No Search results found
                </NoSearchResultsHeading>
                <NoSearchResultsDesc isDarkMode={isDarkMode}>
                  Try different key words or remove search filter
                </NoSearchResultsDesc>
                <RetryButtonContainer onClick={this.clickRetryBtn}>
                  <RetryButton>Retry</RetryButton>
                </RetryButtonContainer>
              </NoSearchResultsMainContainer>
            </NoSearchResultsContainer>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }

  renderVideoSearchItemListSuccessView = () => {
    const {videosList} = this.state
    return videosList.length > 0 ? (
      <HomeSearchVideoItemListContainer>
        {videosList.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoItemDetails={eachVideo} />
        ))}
      </HomeSearchVideoItemListContainer>
    ) : (
      this.renderNoSearchResultsView()
    )
  }

  renderLoader = () => {
    return (
      <LoaderContainer data-testid="loader">
        <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
      </LoaderContainer>
    )
  }

  renderVideoSearchItemListFailureView = () => {
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

  renderVideoSearchItemList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoSearchItemListSuccessView()
      case apiStatusConstants.failure:
        return this.renderVideoSearchItemListFailureView()
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

          const {isBannerClose, searchInput} = this.state

          return (
            <>
              <Header />
              <HomeAppContainer data-testid="Home">
                <Sidebar />
                <HomeMainContainer isDarkMode={isDarkMode}>
                  {isBannerClose ? null : this.renderBannerContainer()}
                  <HomeSearchContainer>
                    <SearchInputContainer>
                      <SearchInput
                        placeholder="Search"
                        type="search"
                        value={searchInput}
                        onChange={this.changeSearchInput}
                        isDarkMode={isDarkMode}
                      ></SearchInput>
                      <SearchIconContainer isDarkMode={isDarkMode}>
                        <SearchButton
                          onClick={this.clickSearchIconButton}
                          data-testid="searchButton"
                        >
                          <SearchIcon></SearchIcon>
                        </SearchButton>
                      </SearchIconContainer>
                    </SearchInputContainer>
                    {this.renderVideoSearchItemList()}
                  </HomeSearchContainer>
                </HomeMainContainer>
              </HomeAppContainer>
            </>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }
}

export default Home
