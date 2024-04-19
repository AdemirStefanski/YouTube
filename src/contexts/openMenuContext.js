import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuStore = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  
  return (
    <MenuContext.Provider value={{openMenu, setOpenMenu}}>
      {children}
    </MenuContext.Provider>
  )
}

