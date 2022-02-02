
import wordsApi from "../api/wordsAPI";

const searchWords = async ()=>{
    const data = await wordsApi.patch('/api');
    return data;
}

export default searchWords;