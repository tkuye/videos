import React from 'react';
import VideoItem from './VideoItem';

type Props = {
    videos: Array<object>;
    onVideoSelect(video:object):void
}

const VideoList: React.FunctionComponent<Props> = (props:Props) => {
           const renderedList:Array<JSX.Element> = props.videos.map((video:object | any):JSX.Element => {
                return <VideoItem key={video.id.videoId} video={video} onVideoSelect={props.onVideoSelect} />
           })
    return (
            <div className="ui relaxed divided list">
                {renderedList}
            </div>)
}

export default VideoList