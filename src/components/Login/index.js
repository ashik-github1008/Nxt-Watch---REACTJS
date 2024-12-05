import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginAppContainer,
  LoginFormContainer,
  LoginFormLogoImage,
  InputFieldContainer,
  InputLabel,
  InputField,
  ShowPasswordCheckboxContainer,
  ShowPasswordCheckbox,
  ShowPasswordText,
  LoginButton,
  ErrorText,
} from './styledComponents'
import SavedVideosBackgroundModeContext from '../../context/SavedVideosBackgroundModeContext'

class LoginForm extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  changeLoginCheckBox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')

    this.setState({showSubmitError: false, errorMsg: ''})
  }

  onSubmitFailure = errorMsg => {
    // console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {isChecked, username, password, showSubmitError, errorMsg} =
      this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <SavedVideosBackgroundModeContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <LoginAppContainer isDarkMode={isDarkMode}>
              <LoginFormContainer
                isDarkMode={isDarkMode}
                onSubmit={this.submitForm}
              >
                <LoginFormLogoImage
                  src={
                    isDarkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                ></LoginFormLogoImage>
                <InputFieldContainer>
                  <InputLabel isDarkMode={isDarkMode} htmlFor="username">
                    USERNAME
                  </InputLabel>
                  <InputField
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                    type="text"
                    isDarkMode={isDarkMode}
                    value={username}
                    id="username"
                  ></InputField>
                </InputFieldContainer>
                <InputFieldContainer>
                  <InputLabel isDarkMode={isDarkMode} htmlFor="password">
                    PASSWORD
                  </InputLabel>
                  <InputField
                    type={isChecked ? 'text' : 'password'}
                    placeholder="Password"
                    isDarkMode={isDarkMode}
                    value={password}
                    onChange={this.onChangePassword}
                    id="password"
                  ></InputField>
                </InputFieldContainer>
                <ShowPasswordCheckboxContainer>
                  <ShowPasswordCheckbox
                    type="checkbox"
                    id="login-checkbox"
                    onChange={this.changeLoginCheckBox}
                  ></ShowPasswordCheckbox>
                  <ShowPasswordText
                    isDarkMode={isDarkMode}
                    htmlFor="login-checkbox"
                  >
                    Show Password
                  </ShowPasswordText>
                </ShowPasswordCheckboxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorText>{errorMsg}</ErrorText>}
              </LoginFormContainer>
            </LoginAppContainer>
          )
        }}
      </SavedVideosBackgroundModeContext.Consumer>
    )
  }
}

export default LoginForm
