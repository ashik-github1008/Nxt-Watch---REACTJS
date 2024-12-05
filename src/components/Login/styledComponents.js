import styled from 'styled-components'

export const LoginAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#ffffff')};
  min-height: 100vh;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: flex-start;
  background-color: ${props => (props.isDarkMode ? '#000000' : '#ffffff')};
  border-radius: 5px;
  box-shadow: ${props => (props.isDarkMode ? '' : '0px 4px 16px 0px #bfbfbf')};
  padding: 38px;
  width: 25%;
`
export const LoginFormLogoImage = styled.img`
  width: 136px;
  height: 36px;
  align-self: center;
  margin-bottom: 34px;
`
export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`
export const InputLabel = styled.label`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#7e858e')};
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 6px;
`
export const InputField = styled.input`
  color: #475569;
  border: 1px solid #94a3b8;
  padding: 8px;
  width: 280px;
  border-radius: 4px;
  background-color: ${props => (props.isDarkMode ? 'transparent' : '#ffffff')};
  outline: none;
  cursor: pointer;

  ::placeholder{
    color: #424242
  }
`
export const ShowPasswordCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
`
export const ShowPasswordCheckbox = styled.input`
  margin-right: 6px;
`

export const ShowPasswordText = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#181818')};
  font-size: 13px;
  font-weight: 400;
`

export const LoginButton = styled.button`
  color: #ffffff;
  background-color:#3b82f6;
  border-radius: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  width: 92%;
  margin-top: 16px;
`
export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 12px;
`
