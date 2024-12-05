import styled from 'styled-components'
import {LuDot} from 'react-icons/lu'

export const VideoItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
  margin-bottom: 56px;
`
export const VideoThumbnailImage = styled.img`
  width: 260px;
  height: 145px;
`
export const VideoItemContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  // margin-top: 12px;
`
export const ChannelProfileImage = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 14px;
`
export const VideoItemDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  // margin-top: 0px;
`
export const VideoItemTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  max-width: 215px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 7px;
`
export const VideoItemChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#64748b')};
  margin-top: 0px;
  margin-bottom: 0px;
`
export const VideoItemViewsTimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => (props.isDarkMode ? '#475569' : '#64748b')};
  align-items: flex-start;
  margin-top: 7px;
`
export const ViewsText = styled.p`
  margin-top: 0px;
`

export const DotIcon = styled(LuDot)`
  margin-left: 0px;
  margin-right: 0px;
  width: 24px;
  height: 24px;
`

export const TimelineText = styled.p`
  margin-top: 0px;
`
