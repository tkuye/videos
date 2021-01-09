import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

interface Apps {
    render(): JSX.Element;
    
}

interface Params {
    params: {
        q: string;
    }
}

interface State {
    videos: Array<object>;
    selectedVideo:any;
}

class App extends React.Component implements Apps {
    state:State = {videos:[], selectedVideo:null}
    
    componentDidMount():void {
           this.onTermSubmit('Monkeys') 
    }
    
    onTermSubmit = async (term: string):Promise<object> => {
        const param:Params = {
            params:{
                q:term
            }
        }

        
       const response:Array<object> = await (await youtube.get('/search', param)).data.items

         this.setState({videos:response, 
        selectedVideo:response[0]})
       return response
    }

    onVideoSelect = (video:object):void => {
            this.setState({ selectedVideo: video})
    }
    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                </div>
                </div>
                </div>
            </div>
        )
    }
}   

export default App;