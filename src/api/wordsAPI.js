import axios from "axios";

// Cambia por tu IP y el puerto de la API 
const wordsApi = axios.create({
    //               |----TU IP-----|
    baseURL: 'http://192.168.100.146:8081'
    //                              |EL PUERTO DE LA API|
});

export default wordsApi;