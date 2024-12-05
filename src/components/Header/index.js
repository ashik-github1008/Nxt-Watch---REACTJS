import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  NavHeader,
  NavBodyContainer,
  WebsiteLogo,
  NavbarMenuContainer,
  ThemeSwitchButton,
  ProfileIconImg,
  LogoutButton,
  PopupDisplay,
  PopupModalContainer,
  LogoutText,
  PopupButtonsContainer,
  CancelButton,
  ConfirmButton,
  LightModeIcon,
  DarkModeIcon,
  NavListItem,
} from './styledComponents'

import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'

class Header extends Component {
  onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }
  render() {
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode, changeBackgroundMode} = value

          const onClickThemeButton = () => {
            changeBackgroundMode()
          }

          return (
            <NavHeader isDarkMode={isDarkMode}>
              <NavBodyContainer>
                <Link to="/">
                  <WebsiteLogo
                    src={
                      isDarkMode
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  ></WebsiteLogo>
                </Link>
                <NavbarMenuContainer>
                  <ThemeSwitchButton
                    isDarkMode={isDarkMode}
                    onClick={onClickThemeButton}
                    data-testid="theme"
                  >
                    {isDarkMode ? (
                      <LightModeIcon></LightModeIcon>
                    ) : (
                      <DarkModeIcon></DarkModeIcon>
                    )}
                  </ThemeSwitchButton>

                  <ProfileIconImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  ></ProfileIconImg>

                  <PopupDisplay
                    modal
                    trigger={
                      <LogoutButton type="button" isDarkMode={isDarkMode}>
                        Logout
                      </LogoutButton>
                    }
                  >
                    {close => (
                      <PopupModalContainer isDarkMode={isDarkMode}>
                        <LogoutText isDarkMode={isDarkMode}>
                          Are you sure you want to logout?
                        </LogoutText>
                        <PopupButtonsContainer>
                          <CancelButton onClick={() => close()}>
                            Cancel
                          </CancelButton>
                          <ConfirmButton onClick={this.onClickLogoutBtn}>
                            Confirm
                          </ConfirmButton>
                        </PopupButtonsContainer>
                      </PopupModalContainer>
                    )}
                  </PopupDisplay>
                </NavbarMenuContainer>
              </NavBodyContainer>
            </NavHeader>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }
}

export default withRouter(Header)
