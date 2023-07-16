import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {GrClose} from "react-icons/gr";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp,
} from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";
import Images from "../../../img";
import Button from "../../Button/Button";

const SideBar = (setOpenSideMenu) => {
    //---USE STATE---
    const [openDiscover, setOpenDiscover] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);

    //---DISCOVER NAVIGATION MENU---
    const discover =[
        {
            name: "Collection",
            link: "collection",
        },
        {
            name: "Author Profile",
            link: "author-profile",
        },
        {
            name: "NFT Details",
            link: "NFT-details",
        },
        {
            name: "Account Setting",
            link: "account-setting",
        },
        {
            name: "Connect Wallet",
            link: "connect-wallet",
        },
        {
            name: "Blog",
            link: "blog",
        },
    ];

    //---HELP CENTER NAVIGATION MENU---
    const helpCenter = [
        {
            name: "About",
            link: "about",
        },
        {
            name: "Contact us",
            link: "contact-us",
        },
        {
            name: "Sing Up",
            link: "sing-up",
        },
        {
            name: "Sing In",
            link: "sing-in",
        },
        {
            name: "Subscription",
            link: "subscription",
        },
    ];

    //---OPEN DISCOVER MENU---
    const openDiscoverMenu = () => {
        if (!openDiscover) {
            setOpenDiscover(true);
        } else {
            setOpenDiscover(false);
        }
    };

    //---OPEN HELP MENU---
    const openHelpMenu = () => {
        if (!openHelp) {
            setOpenHelp(true);
        } else {
            setOpenHelp(false);
        }
    };

    //---CLOSE SIDEBAR---
    const closeSideBar = () => {
        setOpenSideMenu(false);
    };

    return(
        <div className={Style.sideBar}>
            <GrClose
                className={Style.sideBar_closeBtn}
                onClick={() => closeSideBar()}
            />
            <div className={Style.sideBar_box}>
                {/*LOGO IMG */}
                <Image
                    src={Images.logo}
                    alt="logo"
                    width={150}
                    height={150}
                />
                <p>
                    Discover the most outstanding article on al NFT markets & create your own stories and share them
                </p>
                {/*SOCIAL MEDIA */}
                <div className={Style.sideBar_social}>
                    <a href="#"><TiSocialFacebook/></a>
                    <a href="#"><TiSocialLinkedin/></a>
                    <a href="#"><TiSocialTwitter/></a>
                    <a href="#"><TiSocialYoutube/></a>
                    <a href="#"><TiSocialInstagram/></a>
                </div>
            </div>
            <div className={Style.side_menu}>
                {/*OPEN DISCOVER MENU */}
                <div>
                    <div
                        className={Style.sideBar_menu_box}
                        onClick={() => openDiscoverMenu()}
                    >
                        <p>Discover</p>
                        <TiArrowSortedDown/>
                    </div>

                    {openDiscover && (
                        <div className={Style.sideBar_dicover}>
                            {discover.map((el, i) => (
                                <p key={i +1}>
                                    <Link href={{pathname: '${el.link}' }}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {/*OPEN HELP MENU */} 
                <div>
                    <div
                        className={Style.sideBar_menu_box}
                        onClick={() => openHelpMenu()}
                    >
                        <p>Help Center</p>
                        <TiArrowSortedDown/>
                    </div>

                    {openHelp && (
                        <div className={Style.sideBar_discover}>
                            {helpCenter.map((el, i) => (
                                <p key={i + 1}>
                                    <Link href={{pathname: '${el.link}' }}>{el.name}</Link>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/*SIDEBAR BUTTONS */}
            <div className={Style.sideBar_button}>
                <Button btName="Create"/>
                <Button btName="Connect Wallet"/>  
            </div>
        </div>
    );
};

export default SideBar;