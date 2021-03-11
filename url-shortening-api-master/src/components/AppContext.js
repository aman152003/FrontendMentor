import React,{createContext,useState} from 'react'

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [link,setLink] = useState('');
    const [isMenuToggled,setIsMenuToggled] = useState(false);
    return(
        <AppContext.Provider value={[link,setLink,isMenuToggled,setIsMenuToggled]}>
            {props.children}
        </AppContext.Provider>
    )
}
