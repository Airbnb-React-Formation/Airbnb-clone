import "./Header.scss"
import {Logo} from "./Logo";
import AccountMenuHearder from "../menu_account/AccountMenuHearder";
import MenuHeader from "./MenuHeader";
import Button from "../asset/Button";
import SearchBar from "../SearchBar/SearchBar";
import {useEffect, useState} from "react";
import SearchBarMinimized from "../SearchBar/SearchBarMinimized";

function Header() {
    const [backgroundColor, setBackgroundColor] = useState('black')
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [logoColor, setLogoColor] = useState('white')
    const handleScroll = (e) => {
        if (e.srcElement.documentElement.scrollTop >= 1 && backgroundColor !== 'white') {
            setBackgroundColor('white')
            setIsCollapsed(true)
            setLogoColor('red')
        } else if (e.srcElement.documentElement.scrollTop === 0) {
            setBackgroundColor('black')
            setLogoColor('white')
            setIsCollapsed(false)
        } else if (!isCollapsed) {
            setIsCollapsed(true)
        }
    }
    const handleMinimizedSearchBarClick = () => {
        setIsCollapsed(false)
    }
    useEffect(() => {
        // window.addEventListener('scroll',handleScroll)
        window.onscroll = handleScroll
        // return window.removeEventListener('scroll',handleScroll)
    }, [])

    return (
        <div
            className={
                "header" +
                (backgroundColor === 'black' ? " header__color--black " : " header__color--white") +
                (isCollapsed ? " header__collapsed" : "")
            }>
            <div className="grid-one-one">
                <a href="/">
                    <Logo color={logoColor}/>
                </a>
            </div>
            <div className="grid-one-two">
                {
                    !isCollapsed
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