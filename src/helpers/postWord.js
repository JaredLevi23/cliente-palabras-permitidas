import wordsApi from "../api/wordsAPI";

const postWord = async( word = '', allow = true ) =>{
    const resp = await wordsApi.post('/api',{ word, allow });
    return resp.data;
}

export default postWord;