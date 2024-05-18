import React from "react";
import { useState, useEffect} from "react";
import "../styles/home.css";
import Avatar from '@mui/material/Avatar';
import { auth } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { gProvider } from "../firebase";
import Menu from "./Menu";




function Header(props) {

    // Firebase vars

    const[photoURL, setPhotoURL] = useState("");
    const[userDetails, setUserDetails] = useState({});
    const[isInitialRender, setIsInititalRender] = useState(true);

    useEffect(() => {
        setPhotoURL(localStorage.getItem("profilePic"));
        setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
        setIsInititalRender(false);
        // localStorage.setItem("profilePic", userDetails.photoURL);
    }, [photoURL, isInitialRender]);

    
    function signIn() {
        signInWithPopup(auth, gProvider)
        .then((res) => {
            localStorage.setItem("profilePic", res.user.photoURL);
            localStorage.setItem("userDetails", JSON.stringify(auth.currentUser));
            setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
        }).catch((e) => {   
            console.error(e);
        });
        setPhotoURL(localStorage.getItem("profilePic"));
    }

    return(
        <div className="header">
                <div className="header__account_logo" onClick={signIn}>
                    <Avatar src={photoURL} />
                </div>
                <div className="header__text">
                    <h1>{props.title}</h1>
                    <div className="header__text__line"></div>
                </div>
                <div className="header__menu_bar">
                    <Menu />
                </div>
            </div>
    );
}

export default Header;

