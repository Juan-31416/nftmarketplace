import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORTS
import Style from "./AudioCard.module.css";
import images from "../../../img";
import LikeProfile from "../../LikeProfile";

const AudioCard = () => {
    const [like, setLike] = useState(false);
    const [play, setPlay] = useState(false);

    const likeNft = () => {
        if(!like) {
            setLike(true);
        } else {
            setLike(false);
        }
    };

    const playMusic = () => {
        if(!play) {
            setPlay(true);
        } else {
            setPlay(false);
        }
    };

    return(
        <div className={Style.audioCard}>
            <div className={Style.audioCard_box}>
                {/**LIKE NFT & REMAINING TIME */}
                <div className={Style.audioCard_box_like_time}>    
                    <div className={Style.audioCard_box_like} onClick={() => likeNft()}>
                        {like ? (
                            <AiFillHeart className={Style.audioCard_box_like_icon} />
                        ) : (
                            <AiOutlineHeart className={Style.audioCard_box_like_icon_unlike} />
                        )}

                        <span>24</span>
                    </div>

                    <div className={Style.audioCard_box_time}>
                        <div className={Style.audioCard_box_like_time_remaining}>
                            <small>Remaining Time</small>
                            <h5>3h : 15m : 20s</h5>
                        </div>
                    </div>
                </div>

                {/**PLAY PAUSE AUDIO */}
                <div className={Style.audioCard_box_player}>
                    <Image src={images.musiceWave} alt="musice" width={200} />
                    <div className={Style.audioCard_box_musicPlayer} onClick={() => playMusic()}>
                        {play ? (
                            <div className={Style.audioCard_box_musicPlayer_icon}>
                                <TbPlayerPause />
                            </div>
                        ) : (
                            <div className={Style.audioCard_box_musicPlayer_icon}>
                                <TbPlayerPlay />
                            </div>
                        )}
                    </div>
                </div>

                {/**DETAILS */}
                <div></div>
            </div>
        </div>
    );
};

export default AudioCard;