import Header from '../Header/index'
import Sidebar from '../Sidebar/index'

import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'

import {
  NotFoundAppContainer,
  NotFoundMainContainer,
  NotFoundViewContainer,
  NotFoundViewMainContainer,
  NotFoundImg,
  NotFoundViewHeading,
  NotFoundViewDesc,
} from './styledComponents'

const NotFound = props => {
  return (
    <SavedVideosBackgroundModeContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <>
            <Header />
            <NotFoundAppContainer>
              <Sidebar />
              <NotFoundMainContainer isDarkMode={isDarkMode}>
                <NotFoundViewContainer>
                  <NotFoundViewMainContainer>
                    <NotFoundImg
                      src={
                        isDarkMode
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      }
                      alt="not found"
                    ></NotFoundImg>
                    <NotFoundViewHeading isDarkMode={isDarkMode}>
                      Page Not Found
                    </NotFoundViewHeading>
                    <NotFoundViewDesc isDarkMode={isDarkMode}>
                      We are sorry, the page you requested could not be found.
                    </NotFoundViewDesc>
                  </NotFoundViewMainContainer>
                </NotFoundViewContainer>
              </NotFoundMainContainer>
            </NotFoundAppContainer>
          </>
        )
      }}
    </SavedVideosBackgroundModeContext.Consumer>
  )
}

export default NotFound
