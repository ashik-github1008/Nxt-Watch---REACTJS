import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {LuDot} from 'react-icons/lu'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

export const VideoItemDetailsAppContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoItemDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 82%;
`
export const VideoItemDetailsSuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px;
  width: 100%;
`

export const VideoPlayer = styled(ReactPlayer)`
  min-width: 95%;
  min-height: 438px;
`
export const VideoItemDetailsTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 17px;
  margin-top: 22px;
`
export const VideoItemDetailsTimelineAndLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ViewsAndTimelineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #64748b;
  font-size: 14px;
`
export const VideoItemDetailsViews = styled.p``

export const DotIcon = styled(LuDot)`
  margin-left: 0px;
  margin-right: 0px;
  width: 24px;
  height: 24px;
`
export const VideoItemDetailsTimeline = styled.p``

export const VideoItemDetailsLikeDislikeSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
  // color: #64748b;
`
export const LikeContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 18px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: #64748b;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};  
`
export const LikeIcon = styled(BiLike)`
  margin-right: 6px;
`

export const LikeText = styled.p``

export const DisLikeContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 18px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${props => (props.isDisliked ? '#2563eb' : '#64748b')};
`
export const DisLikeIcon = styled(BiDislike)`
  margin-right: 6px;
`

export const DisLikeText = styled.p``

export const SaveIconTextContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 18px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`
export const SaveVideosIcon = styled(MdPlaylistAdd)`
  margin-right: 6px;
`

export const SaveText = styled.p``

export const HorizantalLine = styled.hr`
  border-color: #64748b;
  border-width: 1px;
  width: 100%;
`

export const ChannelDetailsAndVideoDescContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 18px;
`
export const ChannelLogo = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 14px;
  margin-right: 12px;
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  margin-bottom: 0px;
`
export const ChannelSubscCount = styled.p`
  color: #64748b;
  margin-top: 8px;
`
export const VideoDesc = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`
export const FailureViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const FailureViewImage = styled.img`
  width: 320px;
  height: 320px;
`
export const FailureViewHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')}; 
  font-weight: 500;
  font-size: 22px;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 4px;
`
export const FailureViewDesc = styled.p`
  color: ${props => (props.isDarkMode ? '#475569' : '#64748b')};
  max-width: 386px;
  text-align: center;
`

export const RetryButtonContainer = styled.div``

export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 28px;
  padding-right: 28px;
  border: none;
  outline: none;
  cursor: pointer;
`
