import axios from "axios";

//armazenar o token no local storage para utilizar em autenticações.
//const token = localStorage.getItem("token");

//a partir dessa constante vamos fazer as requisições.
const api = axios.create({

  //endereço onde será feita as requsições.
  baseURL: "http://localhost:4000",
  headers: {
    "Acess-Control-Allow-Origin": "*",
    "Contente-Type": "application/json",
    //"Authorization": token
  },
});

export default api;
