import {createContext, useContext, useMemo, useState} from "react";

const StyleContext = createContext()

const useStyle = () => {
    const context = useContext(StyleContext)
    if(!context){
        throw new Error("useStyle() s'utilise a l'intérieur d'un <StyleProvider>")
    }
    return context
}

const StyleProvider = props => {
    const initialHeaderConfig = {
        isStartExpanded : true,
        hasSearch : true,
        searchCollapsedType : 'button',
        hasProfileMenu : true
    }

    const initialFooterConfig = {
        isExpanded: true,
        isDisplayed : true
    }

    const [headerConfig, setHeaderConfig] = useState(initialHeaderConfig)
    const [footerConfig, setFooterConfig] = useState(initialFooterConfig)

    const setConfig = ({headerConfig,footerConfig}) => {
        headerConfig = headerConfig ? {...initialHeaderConfig,...headerConfig} : initialHeaderConfig
        footerConfig = footerConfig ? {...initialFooterConfig,...footerConfig} : initialFooterConfig
        setHeaderConfig(headerConfig)
        setFooterConfig(footerConfig)
    }

    const value = useMemo(
        ()=> ({headerConfig,footerConfig,setConfig}),
        [headerConfig,footerConfig,setConfig]
    )


    return <StyleContext.Provider value={value} {...props}/>
}

export {StyleContext, useStyle, StyleProvider}