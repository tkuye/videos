import axios from 'axios'

interface Config {
    baseURL: string;
    params:{
        part:string;
    maxResults:number;
     key:string;
    }
}

const config:Config = {
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
            part: 'snippet', 
            maxResults: 5,
            key:'AIzaSyBNddj9Rut7dtcMzE3mhkmJ9vj_fr_6mEI'
    }
}

export default axios.create(config)
