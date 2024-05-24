import { Children, createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [userVideos, setUserVideos] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState (localStorage.getItem("token") as string);
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  const navigate = useNavigate();

  const getVideos = async (token: string, user_id: string) => {
    try {
      const response = await api.get(`/videos/get-videos/${user_id}`, { headers: { authorization: token } });
      if (response.status === 200) {
        console.log("resposta")
        setUserVideos(response.data.videos);
        console.log(response.data.videos);
      }
    } catch (error) {
      console.log('erro ao buscar vídeos', error);
    }
  };

  const createVideos = async (token: string, user_id: string, title: string, description: string, thumbnail: string, publishedAt: Date) => {
    try {
      const response = await api.post(`/videos/create-video/${user_id}`, { title, description, thumbnail, publishedAt },
        { headers: { authorization: token } });
      if (response.status === 200) {
        alert('Video enviado com sucesso!');
        getUser(token);
      }
    } catch (error) {
      alert('Não foi possível enviar o vídeo. Tente novamente.');
    }
  };

  const getUser = (token: string) => {
    api
      .get("/user/get-user", {headers:{Authorization: token}})
      .then(({ data }) => {
        setUser(data.user);
        setLogin(true);
      })
      .catch((error) => {
        console.log("Usuário não autenticado", error);
      });
  };

  //caso já esteja logado, vai executar apenas o getUser para puxar as informações do usuário;
  useEffect(() => {
    getUser(token);
  }, [token]);

  //função de logout que remove o token de autorização do usuário, coloca o estado do login para false e limpa os dados do usuário dentro do objeto;
  const logOut = () => {
    localStorage.removeItem("token");
    setLogin(false);
    setUser({});
  }


  const handleLogin = (email: string, password: string) => {
    api
      .post("/user/sign-in", { email, password })
      .then(({ data }) => {
        setLogin(true);

        //salva o token do usuário no LocalStorage para o login do mesmo se manter;
        localStorage.setItem("token", data.token);
        setToken(data.token);
        getUser(data.token);
        
      })
      .catch((error) => {
        console.log("Não foi possível logar", error);
      });
  };

  const handleCreateUser = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/users/sign-up', { name, email, password });
      if (response.status === 200) {
        alert('Usuário criado com sucesso.')
        handleLogin(email, password);
      }
    } catch (error: any) {
      if (error && error.response.status === 409) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
      login,
      user,
      token,
      userVideos,
      openDropDownMenu,
      setOpenDropDownMenu,
      createVideos,
      handleLogin,
      handleCreateUser,
      logOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
