import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player'
import { setVideoPlaying, setVideoState } from './../../state/actions'
import { buttonInit, flexRowCenteredAll, absoluteTopFull, opacityTransition } from './../../styles/mixins'
import { colors } from './../../styles/theme.json'
import ErrorBoundary from '../utils/ErrorBoundary'
import BgImage from './../utils/BgImage'
import PlayButton from './../utils/PlayButton'

class Video extends PureComponent {
  state = {
    url: null,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    started: false,
    buffering: false
  }
  // LIFECYCLE
  componentWillUnmount() {
    this.setState({
      playing: false,
      started: true
    })
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.url != this.props.current_video) {
      this.setState({
        url: null,
        playing: false,
        started: false
      })
      this.player.seekTo(0)
    }
  }
  // VIDEO CONTROL HANDLERS
  playPause = () => {
    this.setState({
      playing: !this.state.playing
    })
  }
  stop = () => {
    this.setState({
      url: null,
      playing: false
    })
    this.props.video_playing(null)
    this.props.video_state('stopped')
  }
  onPlay = () => {
    setTimeout(() => {
      this.setState({
        playing: true,
        buffering: false,
        started: true
      })
      this.props.video_playing(this.props.videoUrl)
      this.props.video_state('playing')
    }, 1)
  }
  onPause = () => {
    this.setState({
      playing: false
    })
    this.props.video_state('paused')
  }
  onEnded = () => {
    this.setState({
      playing: false,
      started: false
    })
    this.props.video_playing(null)
    this.props.video_state('stopped')
  }
  onStart = () => {
    this.setState({
      started: true,
      playing: true
    })
    this.props.video_state('playing')
  }
  onBuffer = () => {
    this.setState({
      buffering: true
    })
    this.props.video_state('buffering')
  }
  ref = player => {
    this.player = player
  }
  render () {
    return (
      <VideoContainer>
        <ErrorBoundary>
          <VideoWrapper>
            <VideoThumbnail Opacity={(this.state.started) ? 0 : 1} className={(this.state.started) && 'playing'}>
              <PlayButtonWrapper onClick={this.onPlay}><PlayButton/></PlayButtonWrapper>
              {(this.props.coverUrl != null) && <BgImage Source={this.props.coverUrl} BgSize={'cover'}/>}
            </VideoThumbnail>
            <VideoHolder Opacity={(this.state.started) ? 1 : 0}>
              <ReactPlayer
                url={this.props.videoUrl}
                className='player'
                width={'100%'}
                height={'100%'}
                ref={this.ref}
                volume={this.state.volume}
                playing={this.state.playing}
                onStart={this.onStart}
                onPlay={this.onPlay}
                onBuffer={this.onBuffer}
                onPause={this.onPause}
                onEnded={this.onEnded}
                config={{
                  youtube: {
                    playerVars: {
                      showinfo: 0,
                      controls: 1,
                      modestbranding: 1,
                      rel: 0,
                      playsinline: 1
                    }
                  },
                  vimeo: {
                    playerVars: {
                      showinfo: 0,
                      controls: 1
                    }
                  }
                }}
              />
            </VideoHolder>
          </VideoWrapper>
        </ErrorBoundary>
      </VideoContainer>
    )
  }
}

export default connect(
  state => ({
    window_width: state.resize_state.window_width,
    current_video: state.current_video
  }),
  dispatch => ({
    video_playing: (url) => dispatch(setVideoPlaying(url)),
    video_state: (url) => dispatch(setVideoState(url))
  })
)(Video)

// STYLES
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow-y: visible;
  position: relative;
`

const VideoWrapper = styled.div`
  ${absoluteTopFull};
  .player {
    ${absoluteTopFull};
    z-index: 100;
  }
`

const VideoThumbnail = styled.div`
  ${absoluteTopFull};
  ${opacityTransition};
  z-index: 1000;
  opacity: ${props => props.Opacity};
  background-color: ${colors.lt_grey};
  &.playing {
    pointer-events: none;
  }
`

const VideoHolder = styled.div`
  ${absoluteTopFull};
  ${opacityTransition};
  opacity: ${props => props.Opacity};
`

const LoadingPlayingCommon = css`
  ${flexRowCenteredAll};
  ${absoluteTopFull};
  z-index: 9000;
`

const PlayButtonWrapper = styled.button`
  ${buttonInit};
  ${LoadingPlayingCommon};
  cursor: pointer;
`
