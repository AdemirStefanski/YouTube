import { Children, createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState (localStorage.getItem("token") as string);

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

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        handleLogin,
        logOut
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
