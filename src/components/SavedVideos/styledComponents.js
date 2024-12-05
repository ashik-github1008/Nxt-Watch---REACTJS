import styled from 'styled-components'
import {BsFire} from 'react-icons/bs'

export const SavedVideosAppContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SavedVideosMainContainer = styled.div`
  min-width: 82vw;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  min-height: 85vh;
  padding-bottom: 18px;
  // padding-top: 96px;
`
export const SavedVideosNavHeader = styled.nav`
  background-color: ${props => (props.isDarkMode ? '#313131' : '#f1f1f1')};
  padding: 8px;
  padding-left: 48px;
  height: 17vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const SavedVideosNavBodyContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const SavedVideosIconContainer = styled.div`
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
export const TrendingIcon = styled(BsFire)`
  width: 20px;
  height: 20px;
  color: #ff0000;
  // padding: 12px;
`
export const SavedVideosText = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-weight: bold;
`
export const SavedVideosListContainer = styled.ul`
  padding-left: 72px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-top: 34px;
`
export const NoSavedVideosViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const NoSavedVideosMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedVideosImg = styled.img`
  width: 370px;
  height: 320px;
`
export const NoSavedViewHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')}; 
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 4px;
`
export const NoSavedViewDesc = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#64748b')};
  max-width: 386px;
  text-align: center;
`
