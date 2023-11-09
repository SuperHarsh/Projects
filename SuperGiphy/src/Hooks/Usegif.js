import { useEffect , useState } from 'react';
import axios from 'axios';

const url = 'https://api.giphy.com/v1/gifs/random?api_key=s6lXJP2MDXPIujoM5qRb0dqyOMEm0LV7&tag=&rating=g';

const Usegif = () => {
    const [gif,setgif] = useState('');
    const [load,setload] = useState(false);

    async function fetchdata(tag){
        setload(true);
        const url1 = `https://api.giphy.com/v1/gifs/random?api_key=s6lXJP2MDXPIujoM5qRb0dqyOMEm0LV7&tag=${tag}=&rating=g`;        
        const {data} = await axios.get(tag ? url1 : url);
        const source = data.data.images.downsized_large.url;
        setgif(source);
        setload(false);
    }

    useEffect( () => {
        fetchdata();
    },[]);

    return {    
        gif,load,fetchdata
    };
}

export default Usegif;