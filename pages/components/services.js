import React, { useState } from "react";
import styles from "../../styles/components/services.module.css"
import Image from "next/image";
import { Link } from "@chakra-ui/react";

function Services() {

    return (
        <>
            <div className={styles.services_parent}>
                <div className={styles.services_wrapper}>

                    <div className={styles.black_box}>

                        <ul className={styles.black_box_list}>
                            <Link
                                href="/branding">
                                <li className={styles.black_box_item_1}>
                                    <Image
                                        alt="thumbnail"
                                        width={100}
                                        height={100}
                                        className={styles.black_box_image_1}
                                        src={"/bgwhole6.jpg"}
                                    >
                                    </Image>
                                    <p>BRANDING</p>

                                </li>
                            </Link>
                            <Link
                                href="/front_back_end">
                            <li className={styles.black_box_item_1}>
                                <Image
                                    alt="thumbnail"
                                    width={100}
                                    height={100}
                                    className={styles.black_box_image_1}
                                    src={"/bgwhole6.jpg"}
                                >
                                </Image>
                                <p>FRONT END/BACK END</p>
                            </li>
                            </Link>
                            <Link
                                href="/ui_ux">
                            <li className={styles.black_box_item_1}>
                                <Image
                                    alt="thumbnail"
                                    width={100}
                                    height={100}
                                    className={styles.black_box_image_1}
                                    src={"/bgwhole6.jpg"}
                                >
                                </Image>
                                <p>UI /UX</p>
                            </li>
                            </Link>
                            <Link
                                href="/audio">
                            <li className={styles.black_box_item_1}>
                                <Image
                                    alt="thumbnail"
                                    width={100}
                                    height={100}
                                    className={styles.black_box_image_1}
                                    src={"/bgwhole6.jpg"}
                                >
                                </Image>
                                <p>AUDIO</p>
                            </li>
                            </Link>
                            <Link
                                href="/hosting">
                            <li className={styles.black_box_item_1}>
                                <Image
                                    alt="thumbnail"
                                    width={100}
                                    height={100}
                                    className={styles.black_box_image_1}
                                    src={"/bgwhole6.jpg"}
                                >
                                </Image>
                                <p>HOSTING</p>
                            </li>
                            </Link>
                            <Link
                                href="/logos">
                            <li className={styles.black_box_item_1}>
                                <Image
                                    alt="thumbnail"
                                    width={100}
                                    height={100}
                                    className={styles.black_box_image_1}
                                    src={"/bgwhole6.jpg"}
                                >
                                </Image>
                                <p>LOGOS</p>
                            </li>
                            </Link>
                        </ul>
                    </div>

                    <div>

                        <ul className={styles.essentials_list}>
                            <li className={styles.essentials_list_item1} >
                                <h1>Free Domains</h1>
                                <p>Dont pay a cent to host your website</p>
                            </li>
                            <li className={styles.essentials_list_item} >
                                <h1>Free Domains</h1>
                                <p>Dont pay a cent to host your website</p>
                            </li>
                            <li className={styles.essentials_list_item} >
                                <h1>Free Domains</h1>
                                <p >Dont pay a cent to host your website</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.displayed_items_div}>

                        <div className={styles.branding_displayed}>
                            <Image
                                alt="thumbnail"
                                width={100}
                                height={100}
                                className={styles.displayed_image}
                                src={"/bgwhole6.jpg"}
                            >
                            </Image>
                        </div>

                        <div className={styles.front_end_back_end_displayed}>
                            <Image
                                alt="thumbnail"
                                width={100}
                                height={100}
                                className={styles.displayed_image}
                                src={"/bgwhole6.jpg"}
                            >
                            </Image>
                        </div>
                        <div className={styles.ui_ux_displayed}>
                            <Image
                                alt="thumbnail"
                                width={100}
                                height={100}
                                className={styles.displayed_image}
                                src={"/bgwhole6.jpg"}
                            >
                            </Image>
                        </div>
                        <div className={styles.three_d_modeling_displayed}>
                            <Image
                                alt="thumbnail"
                                width={100}
                                height={100}
                                className={styles.displayed_image}
                                src={"/bgwhole6.jpg"}
                            >
                            </Image>
                        </div>
                        <div className={styles.audio_displayed}>
                            <Image
                                alt="thumbnail"
                                width={100}
                                height={100}
                                className={styles.displayed_image}
                                src={"/bgwhole6.jpg"}
                            >
                            </Image>
                        </div>
                        <div className={styles.hosting_displayed}>
                            <Image
                                alt="thumbnail"
                                width={100}
                                height={100}
                                className={styles.displayed_image}
                                src={"/bgwhole6.jpg"}
                            >
                            </Image>
                        </div>
                        <div className={styles.logos_displayed}>
                            <Image
                                alt="thumbnail"
                                width={100}
                                height={100}
                                className={styles.displayed_image}
                                src={"/bgwhole6.jpg"}
                            >
                            </Image>
                        </div>
                    </div>

                    <div>

                        <ul className={styles.essentials_list}>
                            <li className={styles.essentials_list_item} >
                                <h1>Free Domains</h1>
                                <p>Dont pay a cent to host your website</p>
                            </li>
                            <li className={styles.essentials_list_item} >
                                <h1>Free Domains</h1>
                                <p>Dont pay a cent to host your website</p>
                            </li>
                            <li className={styles.essentials_list_item} >
                                <h1>Free Domains</h1>
                                <p>Dont pay a cent to host your website</p>
                            </li>
                        </ul>

                    </div>

                    <div>

                        <ul className={styles.offered_list}>

                            <li className={styles.offered_item}>
                                <Link href={"/services"}>
                                    <Image
                                        className={styles.logo_ssl_logo}
                                        width={50}
                                        height={50}
                                        alt="logo"
                                        src="/logored.png"
                                        >
                                    </Image>
                                </Link>
                                <p className={styles.more_tag}>SSL Security</p>
                            </li>


                            <li className={styles.offered_item}>
                                <Link href={"/services"}>
                                    <Image
                                        className={styles.private_domain_logo}
                                        width={50}
                                        height={50}
                                        alt="logo"
                                        src="/logored.png"
                                        >
                                    </Image>
                                </Link>
                                <p className={styles.more_tag}>Private Domains</p>
                            </li>

                            <li className={styles.offered_item}>
                                <Link href={"/services"}>
                                    <Image
                                        className={styles.logo_ssl_logo}
                                        width={50}
                                        height={50}
                                        alt="logo"
                                        src="/logored.png"
                                        >
                                    </Image>
                                </Link>
                                <p className={styles.more_tag}>Original Code</p>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Services;