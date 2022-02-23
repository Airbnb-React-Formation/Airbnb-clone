import "./Header.scss"
import {Logo} from "./Logo";
import AccountMenuHearder from "../menu_account/AccountMenuHearder";
import MenuHeader from "./MenuHeader";

function  Header(){

    return (
        <div className="header">
            <div className="grid-one">
                <a href="/" color="white">
                    <Logo/>
                </a>
            </div><div className="grid-one-two">
                <MenuHeader/>
            </div>
            <div className="grid-one-three">
                <AccountMenuHearder/>
            </div>
         </div>
    )
}
export default Header;