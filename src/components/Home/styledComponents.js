import styled from 'styled-components'
import {IoClose} from 'react-icons/io5'
import {IoIosSearch} from 'react-icons/io'

export const HomeAppContainer = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  // max-height: 80vh;
`
export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  min-width: 82vw;
  max-width: 82vw;
  // padding-bottom: 5px;
  min-height: 100vh;
`
export const HomeBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  height: 35%;
  padding: 24px;
`
export const HomeBannerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeBannerLogo = styled.img`
  width: 108px;
  height: 34px;
`
export const BannerTextContent = styled.p`
  color: #1e293b;
  font-weight: 400;
  width: 320px;
  margin-bottom: 28px;
`
export const BannerButton = styled.button`
  color: #1e293b;
  border: 1px solid #1e293b;
  background-color: transparent;
  font-weight: 500;
  padding: 12px;
`
export const BannerBtnContainer = styled.div``

export const BannerCloseButton = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
`
export const BannerCloseIcon = styled(IoClose)`
  width: 22px;
  height: 22px;
`

export const BannerLogoCloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  // margin-top: 24px;
  padding: 32px;
  height: 100%;
`
export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 45%;
`
export const SearchInput = styled.input`
  // border: none;
   border: 1px solid #606060;
  background-color: transparent;
  width:85%;
  padding: 10px;
  padding-left: 12px;
  outline: none;
  cursor: pointer;
  color: ${props => (props.isDarkMode ? '#ffffff' : '')}
`
export const SearchIconContainer = styled.div`
  // border-left: 1px solid #606060;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
   border: 1px solid #606060;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#606060' : '#ebebeb')}; 
`

export const SearchIcon = styled(IoIosSearch)``

export const HomeSearchVideoItemListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  max-width: 95%;
  margin-top: 26px;
  padding-bottom: 0px;
`
export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`
export const FailureViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const FailureViewImage = styled.img`
  width: 320px;
  height: 320px;
`
export const FailureViewHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')}; 
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 4px;
`
export const FailureViewDesc = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#64748b')};
  max-width: 386px;
  text-align: center;
`

export const RetryButtonContainer = styled.div``

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 28px;
  padding-right: 28px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const NoSearchResultsContainer = styled(FailureViewContainer)``

export const NoSearchResultsMainContainer = styled(FailureViewMainContainer)``

export const NoSearchResultsImage = styled(FailureViewImage)``

export const NoSearchResultsHeading = styled(FailureViewHeading)``

export const NoSearchResultsDesc = styled(FailureViewDesc)``
