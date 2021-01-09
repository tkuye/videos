import React from 'react';
import './VideoItem.css'
type Props = {
    video: {
        snippet:{
            title:string;
            thumbnails: {
                medium:{
                    url:string
                }
            }
            description:string

        } }

    onVideoSelect(video:object):void;

}

const VideoItem: React.FunctionComponent<Props> = (props) => {
        
    const videotit:string = props.video.snippet.title
    const videosrc:string = props.video.snippet.thumbnails.medium.url
    const videoalt:string = props.video.snippet.description

    return (
    <div onClick={() => props.onVideoSelect(props.video)} className="item video-item">
        <img className="ui image" src={videosrc} alt={videoalt}/>
        <div className="content">
            <div className="header">{videotit}</div>
            </div>
    </div>)
}

export default VideoItem