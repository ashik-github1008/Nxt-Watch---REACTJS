import styled from 'styled-components'
import {IoMdHome} from 'react-icons/io'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')}; 
  width: 18vw;
  min-height: 85vh;
  padding-left: 14px;
  padding-top: 17px;
  padding-bottom: 18px;
`
export const SidebarMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`
export const SidebarMenu = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding-left: 5px;
`
export const HomeMenuIcon = styled(IoMdHome)`
  width: 20px;
  height: 20px;
  color: ${props => (props.isDarkMode ? '#7e858e' : '#383838')};
`
export const HomeMenuText = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#181818')};
  margin-left: 28px;
  font-size: 14px;
`
export const TrendingMenuIcon = styled(BsFire)`
  width: 20px;
  height: 20px;
  color: ${props => (props.isDarkMode ? '#7e858e' : '#383838')};
`
export const TrendingMenuText = styled(HomeMenuText)``

export const GamingMenuIcon = styled(SiYoutubegaming)`
  width: 20px;
  height: 20px;
  color: ${props => (props.isDarkMode ? '#7e858e' : '#383838')};
`
export const GamingMenuText = styled(HomeMenuText)``

export const PlaylistMenuIcon = styled(MdPlaylistAdd)`
  color: ${props => (props.isDarkMode ? '#7e858e' : '#383838')};
  width: 20px;
  height: 20px;
`

export const PlaylistMenuText = styled(HomeMenuText)``

export const SidebarContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SidebarContactUsText = styled.p`
  color: #ffffff;
  font-weight: 500;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin-bottom: 24px;
`
export const SidebarSocialMediaListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`
export const SocialMediaIconImg = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 14px;
`
export const SidebarContactDesc = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  max-width: 215px;
`
