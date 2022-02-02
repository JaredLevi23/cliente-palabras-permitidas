import wordsApi from "../api/wordsAPI";

const getWord = async( id = '' ) =>{
    try{
        const resp = await wordsApi.get(`/api/${ id }`);
        return resp.data;
    }catch( err ){
        return err;
    }
}

export default getWord;