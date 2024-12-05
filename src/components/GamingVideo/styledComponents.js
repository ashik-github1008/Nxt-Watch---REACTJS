import styled from 'styled-components'

export const GamingVideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  margin-bottom: 58px;
`
export const GamingVideoThumbnail = styled.img`
  width: 200px;
  height: 272px;
`
export const GamingVideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin-top: 9px;
  font-weight: 500;
  font-size: 15px;
`
export const GamingVideoCount = styled.p`
  color: #64748b;
  margin-top: -8px;
  font-size: 14px;
  font-weight: 400;
`
