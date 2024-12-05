import styled from 'styled-components'
import {LuDot} from 'react-icons/lu'

export const SavedVideoItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 74px;
`
export const SavedVideoThumbnail = styled.img`
  width: 370px;
  height: 210px;
  margin-right: 16px;
`
export const SavedVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const SavedVideoItemTitle = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 20px;
  max-width: 356px;
  margin-bottom: 1px;
`
export const ChannelName = styled.p`
  // color: ${props => (props.isDarkMode ? '#64748b' : '#1e293b')};
  color: #64748b;
  margin-bottom: 1px;
`
export const ViewsAndTimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #64748b;
`
export const Views = styled.p`
  color: #64748b;
`

export const DotIcon = styled(LuDot)`
  margin-left: 0px;
  margin-right: 0px;
  width: 24px;
  height: 24px;
`
export const Timeline = styled.p`
  color: #64748b;
`
