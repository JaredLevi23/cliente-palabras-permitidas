import wordsApi from "../api/wordsAPI";

const putWord = async({ id, word, allow })=> {
    const data = await wordsApi.put(`/api/${id}`, { word, allow } );
    return data;
}

export default putWord;