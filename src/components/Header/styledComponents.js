import styled from 'styled-components'
import {MdOutlineLightMode, MdDarkMode} from 'react-icons/md'
import Popup from 'reactjs-popup'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  height: 15vh;
  padding: 42px;
`
export const NavBodyContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`
export const WebsiteLogo = styled.img`
  width: 94px;
  height: 29px;
`

export const NavbarMenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
`
export const ThemeSwitchButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 120px;
`
export const LightModeIcon = styled(MdOutlineLightMode)`
  color: #ffffff;
  width: 38px;
  height: 38px;
`
export const DarkModeIcon = styled(MdDarkMode)`
  color: #000000;
  width: 38px;
  height: 38px;
`

export const ProfileIconImg = styled.img`
  width: 38px;
  height: 38px;
`

export const LogoutButton = styled.button`
  outline: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkMode ? '#ffffff' : '#3b82f6')};
  border-radius: 3px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 12px;
  padding-right: 12px;
  height: 35px;
  margin-left: 34px;
`
export const PopupDisplay = styled(Popup)``

export const PopupModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  padding-top: 28px;
  padding-bottom: 28px;
  padding-left: 46px;
  padding-right: 46px;
  border-radius: 8px;
  margin-top: 152px;
`
export const LogoutText = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#00306e')};
  font-size: 16px;
  margin-bottom: 32px;
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const CancelButton = styled.button`
  color: ${props => (props.isDarkMode ? '#cbd5e1' : '#64748b')};
  border: 1px solid ${props => (props.isDarkMode ? '#cbd5e1' : '#64748b')};
  background-color: transparent;
  margin-right: 24px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 2px;
  font-size: 17px;
`
export const ConfirmButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 2px;
  font-size: 17px;
  border: none;
`
export const NavListItem = styled.li``
