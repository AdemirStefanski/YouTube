import { createContext, useState, useContext } from "react";

export const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export const MenuStore = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <MenuContext.Provider value={{openMenu, setOpenMenu}}>
      {children}
    </MenuContext.Provider>
  )
}

