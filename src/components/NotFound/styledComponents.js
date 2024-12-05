import styled from 'styled-components'

export const NotFoundAppContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NotFoundMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 82%;
`
export const NotFoundViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
export const NotFoundViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundImg = styled.img`
  width: 452px;
  height: 400px;
`
export const NotFoundViewHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')}; 
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 4px;
`
export const NotFoundViewDesc = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#64748b')};
  max-width: 386px;
  text-align: center;
`
