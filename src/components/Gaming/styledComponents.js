import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingAppContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const GamingMainContainer = styled.div`
  min-width: 82vw;
  max-width: 82vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 85vh;
  padding-bottom: 18px;
  // padding-top: 96px;
`
export const GamingNavHeader = styled.nav`
  background-color: ${props => (props.isDarkMode ? '#313131' : '#f1f1f1')};
  padding: 8px;
  padding-left: 48px;
  height: 17vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const GamingNavBodyContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const GamingIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#cbd5e1')};
  width: 68px;
  height: 68px;
  border-radius: 68px;
  padding: 12px;
  margin-right: 14px;
`
export const GamingIcon = styled(SiYoutubegaming)`
  width: 20px;
  height: 20px;
  color: #ff0000;
  // padding: 12px;
`
export const GamingText = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-weight: bold;
`
export const GamingVideosListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 72px;
  list-style-type: none;
  padding-top: 34px;
  max-width: 90%;
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
