import React from "react";
import Image from "next/image";
import { MdVerified} from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = () =>{
    return(
        <div className={Style.daysComponents}>
            <div className={Style.daysComponents_box}>
                <div className={Style.daysComponents_box_img}>
                    <Image 
                        src={images.creatorbackground1}
                        className={Style.daysComponents_box_img_img}
                        alt="profile background"
                        width={500}
                        height={300}
                        objectFit="covers"
                    />
                </div>

                <div className={Style.daysComponents_box_profile}>
                    <Image 
                        src={images.creatorbackground2}
                        className={Style.daysComponents_box_img_1}
                        alt="profile"
                        width={200}
                        height={200}
                        objectFit="covers"
                    />
                    <Image 
                        src={images.creatorbackground3}
                        className={Style.daysComponents_box_img_2}
                        alt="profile"
                        width={200}
                        height={200}
                        objectFit="covers"
                    />
                    <Image 
                        src={images.creatorbackground4}
                        className={Style.daysComponents_box_img_3}
                        alt="profile"
                        width={200}
                        height={200}
                        objectFit="covers"
                    />
                </div>

                <div className={Style.daysComponents_box_title}>
                    <h2>Amazing Collection</h2>
                    <div className={Style.daysComponents_box_title_info}>
                        <div className={Style.daysComponents_box_title_info_profile}>
                            <Image 
                                src={images.user1}
                                className={Style.daysComponents_box_title_info_profile_img}
                                alt="profile"
                                width={30}
                                height={30}
                                objectFit="covers"
                            />

                            <p>
                                Creator
                                <span>
                                    Juan Pablo Martín
                                    <small>
                                        <MdVerified />
                                    </small>
                                </span>
                            </p>
                        </div>

                        <div className={Style.daysComponents_box_title_info_price}>
                            <small>1.255ETH</small>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default DaysComponents;