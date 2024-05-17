// import { createContext, useState, useContext } from "react";

// export const MenuContext = createContext();

// export const useMenuContext = () => useContext(MenuContext);

// export const MenuStore = ({ children }) => {
//   const [openMenu, setOpenMenu] = useState(false)
  
//   return (
//     <MenuContext.Provider value={{openMenu, setOpenMenu}}>
//       {children}
//     </MenuContext.Provider>
//   )
// }

import { createContext, useContext, useState } from "react";

interface MenuContextType {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

interface MenuContextProps {
  children: React.ReactNode;
}

export const MenuContext = createContext<MenuContextType>({
  openMenu: false,
  setOpenMenu: () => {},
} as MenuContextType); 

export const useOpenMenu = () => useContext(MenuContext);

export const MenuStore: React.FC<MenuContextProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuContext.Provider>
  );
};