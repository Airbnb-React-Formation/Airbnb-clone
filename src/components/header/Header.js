import "./Header.scss"
import {Logo} from "./Logo";
import AccountMenuHearder from "../menu_account/AccountMenuHearder";
import MenuHeader from "./MenuHeader";
import Button from "../asset/Button";
import SearchBar from "../SearchBar/SearchBar";

function  Header(){

    return (
        <div className="header">
            <div className="grid-one-one">
                <a href="/">
                    <Logo color={'white'}/>
                </a>
            </div>
            <div className="grid-one-two">
                <MenuHeader/>
                <div className="search-bar-wrapper">
                    <SearchBar/>
                </div>

            </div>
            {/*<div  className="grid-one-three">*/}
            {/*</div>*/}
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