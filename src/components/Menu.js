import React, { useState } from 'react';
import "../styles/menu.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AssistantIcon from '@mui/icons-material/Assistant';
import TimerIcon from '@mui/icons-material/Timer';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';



function Menu() {
    const[menuFlg, setMenuFlg] = useState(false);
    const[cls, setCls] = useState("menu");
    
    function openMenu() {
        setMenuFlg(true);
    }


    function closeMenu() {
        setCls("menu menu_close");
        setTimeout(() => {
            setCls("menu");
            setMenuFlg(false);
        }, 1000);
    }
    return(
        menuFlg ? 
        <div className={cls}>
            <div className="menu__header">
                <div className="menu__header__close_icon" onClick={closeMenu}>
                    <CloseIcon />
                </div>
            </div>
            <div className="menu__body">
                <Link to="/">
                    <div className="menu__body__home menu__body__menu_item">
                        <div className="menu__body__home__icon menu__body__menu_item__icon">
                            <HomeIcon />
                        </div>
                        <div className="menu__body__home__text menu__body__menu_item__text">
                            <h1>Home</h1>
                        </div>
                    </div>
                </Link>
                <Link to="/blitz">
                    <div className="menu__body__two_player_blitz menu__body__menu_item">
                        <div className="menu__body__two_player_blitz__icon menu__body__menu_item__icon">
                            <TimerIcon />
                        </div>
                        <div className="menu__body__two_player_blitz__text menu__body__menu_item__text">
                            <h1>Two Player Blitz</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        :
        <div className="menu_icon" onClick={openMenu}>
            <MenuIcon />
        </div>
    );
}

export default Menu;

