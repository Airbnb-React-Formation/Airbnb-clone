import "./Header.scss"
import {Logo} from "./Logo";
import AccountMenuHearder from "../menu_account/AccountMenuHearder";
import MenuHeader from "./MenuHeader";
import Button from "../asset/Button";
import SearchBar from "../SearchBar/SearchBar";
import {useEffect, useRef, useState} from "react";
import SearchBarMinimized from "../SearchBar/SearchBarMinimized";
import {useStyle} from "../context/StyleContext";
import useClickOutside from "../../hook/useClickOutside";
import {Link} from "react-router-dom";

function Header() {
    const {headerConfig} = useStyle()
    const {isStartExpanded} = headerConfig
    const [backgroundColor, setBackgroundColor] = useState('black')
    const [isExpanded, setIsExpanded] = useState(isStartExpanded)
    const [logoColor, setLogoColor] = useState(isStartExpanded ? "white" : "red")
    const [hasTransition, setHasTransition] = useState(false)
    const [isHeaderConfigLoaded, setIsHeaderConfigLoaded] = useState(false)
    const headerRef = useRef()
    useClickOutside(headerRef, () => (
        isExpanded ? setIsExpanded(false) : null
    ))

    const handleScroll = (e) => {
        if (!hasTransition) setHasTransition(true)
        if (e.srcElement.documentElement.scrollTop >= 1 && backgroundColor !== 'white') {
            setBackgroundColor('white')
            setIsExpanded(false)
            setLogoColor('red')
        } else if (e.srcElement.documentElement.scrollTop === 0 && isStartExpanded) {
            setBackgroundColor('black')
            setLogoColor('white')
            setIsExpanded(true)
        } else if (isExpanded) {
            setIsExpanded(false)
        }
    }
    const handleMinimizedSearchBarClick = () => {
        if (!hasTransition) setHasTransition(true)
        setIsExpanded(true)
    }
    useEffect(() => {
        setIsExpanded(isStartExpanded)
        setLogoColor(isStartExpanded ? "white" : "red")
        setBackgroundColor(isStartExpanded ? "black" : "white")
        setIsHeaderConfigLoaded(true)

    }, [headerConfig])

    useEffect(() => {
        window.onscroll = handleScroll
        if (isHeaderConfigLoaded) {
            setIsHeaderConfigLoaded(false)
        }
    }, [isHeaderConfigLoaded,isExpanded])

    return (
        <div
            ref={headerRef}
            className={
                "header" +
                (
                    isExpanded ?
                        ` header__color--${backgroundColor}`
                        :
                        " header__collapsed header__color--white"
                ) +
                (
                    hasTransition ?
                        ""
                        :
                        " no-transition"
                )
            }>
            <div className="grid-one-one">
                <Link to="/">
                    <Logo hasTransition={hasTransition} color={logoColor}/>
                </Link>
            </div>
            <div className="grid-one-two">
                {
                    isExpanded
                        ?
                        <>
                            <MenuHeader/>
                            <div className="search-bar-wrapper">
                                <SearchBar/>
                            </div>
                        </>
                        :
                        <SearchBarMinimized onCLick={handleMinimizedSearchBarClick}/>
                }
            </div>
            <div className="grid-one-four">
                <div className="hosting-button-wrapper">
                    <Button link={"/hosting"} text={"Host"}/>
                </div>

                <AccountMenuHearder/>
            </div>
        </div>
    )
}

export default Header;