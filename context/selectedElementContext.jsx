import {createContext, useState} from "react";

export const SelectedContext = createContext({
    selected: undefined,
    setSelected: () => null
})

export const SelectedProvider = ({children}) => {
    const [selected, setSelected] = useState(undefined)
    const [hover, setHover] = useState(undefined)
    return (
        <SelectedContext.Provider value={{ selected, setSelected, hover, setHover}} >
            {children}
        </SelectedContext.Provider>
    )
}