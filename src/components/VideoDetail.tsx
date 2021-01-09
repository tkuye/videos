
import React from 'react';
import './VideoDetail.css'
type Props = {
    video: {
        id:{
            videoId:string
        }
        snippet:{
            title:string;
            thumbnails: {
                medium:{
                    url:string
                }
            }
            description:string

        } }
}

const VideoDetail: React.FunctionComponent<Props> = (props) => {
        if (!props.video) {
            return (
  <div  className="ui active inverted dimmer spinny large">
    <div  className="ui text loader spinny large">Loading...</div>
</div>
)
        }
        const videoId:string = props.video.id.videoId
        const videoUrl:string = 'https://youtube.com/embed/'
        const videotit:string = props.video.snippet.title
    return (
    <div>
        <div className="ui embed">
        <iframe title={videotit} src={`${videoUrl}${videoId}/`}/>
        </div>
        <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
        </div>
    </div>
    )
}

export default VideoDetail
