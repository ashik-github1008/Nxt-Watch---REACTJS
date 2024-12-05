import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {
  SidebarContainer,
  SidebarMenuContainer,
  SidebarMenu,
  HomeMenuIcon,
  HomeMenuText,
  TrendingMenuIcon,
  TrendingMenuText,
  PlaylistMenuIcon,
  PlaylistMenuText,
  GamingMenuIcon,
  GamingMenuText,
  SidebarContactContainer,
  SidebarContactUsText,
  SidebarSocialMediaListContainer,
  SocialMediaIconImg,
  SidebarContactDesc,
} from './styledComponents'

import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'

class Sidebar extends Component {
  render() {
    const {location} = this.props
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const getActiveMenuStyle = path => {
            if (location.pathname === path && isDarkMode) {
              return {backgroundColor: '#606060', fontWeight: 'bold'}
            }

            if (location.pathname === path && isDarkMode === false) {
              return {backgroundColor: '#d7dfe9', fontWeight: 'bold'}
            }
          }

          const getActiveMenuIconStyle = path => {
            if (location.pathname === path) {
              return {color: '#ff0000'}
            }
          }

          return (
            <SidebarContainer isDarkMode={isDarkMode}>
              <SidebarMenuContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <SidebarMenu style={getActiveMenuStyle('/')}>
                    <HomeMenuIcon
                      isDarkMode={isDarkMode}
                      style={getActiveMenuIconStyle('/')}
                    ></HomeMenuIcon>
                    <HomeMenuText isDarkMode={isDarkMode}>Home</HomeMenuText>
                  </SidebarMenu>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <SidebarMenu style={getActiveMenuStyle('/trending')}>
                    <TrendingMenuIcon
                      isDarkMode={isDarkMode}
                      style={getActiveMenuIconStyle('/trending')}
                    ></TrendingMenuIcon>
                    <TrendingMenuText isDarkMode={isDarkMode}>
                      Trending
                    </TrendingMenuText>
                  </SidebarMenu>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <SidebarMenu style={getActiveMenuStyle('/gaming')}>
                    <GamingMenuIcon
                      isDarkMode={isDarkMode}
                      style={getActiveMenuIconStyle('/gaming')}
                    ></GamingMenuIcon>
                    <GamingMenuText isDarkMode={isDarkMode}>
                      Gaming
                    </GamingMenuText>
                  </SidebarMenu>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <SidebarMenu style={getActiveMenuStyle('/saved-videos')}>
                    <PlaylistMenuIcon
                      isDarkMode={isDarkMode}
                      style={getActiveMenuIconStyle('/saved-videos')}
                    ></PlaylistMenuIcon>
                    <PlaylistMenuText isDarkMode={isDarkMode}>
                      Saved Videos
                    </PlaylistMenuText>
                  </SidebarMenu>
                </Link>
              </SidebarMenuContainer>
              <SidebarContactContainer>
                <SidebarContactUsText isDarkMode={isDarkMode}>
                  CONTACT US
                </SidebarContactUsText>
                <SidebarSocialMediaListContainer>
                  <SocialMediaIconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  ></SocialMediaIconImg>
                  <SocialMediaIconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  ></SocialMediaIconImg>
                  <SocialMediaIconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  ></SocialMediaIconImg>
                </SidebarSocialMediaListContainer>
                <SidebarContactDesc isDarkMode={isDarkMode}>
                  Enjoy! Now to see your channels and recommendations!
                </SidebarContactDesc>
              </SidebarContactContainer>
            </SidebarContainer>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }
}

export default withRouter(Sidebar)
