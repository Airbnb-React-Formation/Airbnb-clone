import "./Header.scss"
import {Logo} from "./Logo";
import AccountMenuHearder from "../menu_account/AccountMenuHearder";
import MenuHeader from "./MenuHeader";
import Button from "../asset/Button";

function  Header(){

    return (
        <div className="header">
            <div className="grid-one">
                <a href="/">
                    <Logo color={'white'}/>
                </a>
            </div>
            <div className="grid-one-two">
                <MenuHeader/>
            </div>
            <div>
                <Button></Button>
            </div>
            <div className="grid-one-three">
                <AccountMenuHearder/>
            </div>

         </div>
    )
}
export default Header;