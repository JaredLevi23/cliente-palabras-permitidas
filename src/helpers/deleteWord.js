import wordsApi from "../api/wordsAPI";

const deleteWord = async( id='' )=>{
    const resp = await wordsApi.delete(`/api/${ id }`);
    return resp;
}

export default deleteWord;