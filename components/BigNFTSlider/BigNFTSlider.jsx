import React, { useState, useEffect, useCallback} from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdTimer, MdVerified } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";

//INTERNAL IMPORTS
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import { Button } from "../Components_index";


const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(0);

    const SliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Juan Pablo Martín",
            collection: "Car",
            price: "00664 ETH",
            like: 243,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 21,
                hours: 4,
                minutes: 51,
                seconds: 15,
            },
        },
        {
            title: "Buddy NFT",
            id: 2,
            name: "Carlos Álvarez",
            collection: "Sport",
            price: "00005 ETH",
            like: 205,
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 27,
                hours: 12,
                minutes: 1,
                seconds: 45,
            },
        },
        {
            title: "Car NFT",
            id: 3,
            name: "Joan Carles Artigau",
            collection: "Car",
            price: "0502 ETH",
            like: 450,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 32,
                hours: 12,
                minutes: 20,
                seconds: 6,
            },
        },
        {
            title: "Sport NFT",
            id: 4,
            name: "Carlos Álvarez",
            collection: "Sport",
            price: "0955 ETH",
            like: 602,
            image: images.user2,
            nftImage: images.nft_image_4,
            time: {
                days: 40,
                hours: 23,
                minutes: 59,
                seconds: 59,
            },
        },
    ];

    //----INCREASE----
    const inc = useCallback(() => {
        if (idNumber + 1 < SliderData.length){
            setIdNumber(idNumber + 1);
        }
    }, [idNumber, SliderData.length]);

    //----DECREASE---
    const dec = useCallback(() => {
        if (idNumber > 0){
            setIdNumber(idNumber - 1);
        }
    }, [idNumber]);

    return(
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{SliderData[idNumber].title}</h2>
                    {/**CREATOR */}
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        {/**CREATOR PROFILE */}
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image
                                className={Style.bigNFTSlider_box_left_creator_profile_img}
                                src={SliderData[idNumber].image}
                                alt="profile image"
                                width={50}
                                height={50}
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h4>
                                    {SliderData[idNumber].name}{" "}
                                    <span>
                                        <MdVerified />
                                    </span>
                                </h4>
                            </div>
                        </div>
                        {/**CREATOR COLLECTION */}
                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire
                                className={Style.bigNFTSlider_box_left_creator_collection_icon}
                            />
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{SliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>
                    {/**BIDDING */}
                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>
                                {SliderData[idNumber].price}
                                <span>$221.21</span>
                            </p>
                        </div>
                        <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.bigNFTSlider_box_left_bidding_box_icon}/>
                            <span>Auction ending in</span>
                        </p>
                        <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.days}</p>
                                <span>days</span>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.hours}</p>
                                <span>hours</span>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.minutes}</p>
                                <span>mins</span>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.seconds}</p>
                                <span>secs</span>
                            </div>
                        </div>
                        {/**BID BUTTON */}
                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place" handleClick={() => {}} />
                            <Button btnName="View" handleClick={() => {}} />
                        </div>
                    </div>
                    {/**SLIDER BUTTON */}
                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines 
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => dec()}
                        />
                        <TbArrowBigRightLines
                            className={Style.bigNFTSlider_box_left_sliderBtn_icon}
                            onClick={() => inc()}
                        />
                    </div>
                </div>

                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image 
                            src={SliderData[idNumber].nftImage}
                            alt="NFT IMAGE"
                            className={Style.bigNFTSlider_box_right_box_img}
                        />
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{SliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigNFTSlider;