import React, { useState } from 'react';
import styles from '../../../styles/main.module.css';
import Image from 'next/image';
import image from '../../../images/left_arrow.png';
import Tilt from 'react-parallax-tilt';

const UserHome = ({ role, users }) => {
    const [clicked, setClicked] = useState(false);
    const [mem, setMem] = useState(false);
    const [off, setOff] = useState(false);
    const [wish, setWish] = useState(false);
    const [userclick, setUserclick] = useState(false);
    const [loyalp, setLoyalp] = useState({ loyalP: '' });
    console.log(role);
    // setLoyalp(users?.loyalP);

    if (role && role === 'User') {
        return (
            <>
                {!userclick && (
                    <div className={(styles.contentcontainer, styles.tbg)}>
                        <center>
                            <h1>WELCOME TO CUAMRP ADMINISTRATOR</h1>
                            <h3>PLEASE CHOOSE YOUR DESIRED OPERATION TYPE</h3>
                        </center>

                        <section>
                            {clicked === false && wish === false && (
                                <div
                                    className={styles.contentwrapper}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setClicked(true);
                                        setWish(true);
                                    }}>
                                    <div className={styles.tabs}>
                                        <div className={styles.categories}>
                                            <a>
                                                <h2 className={styles.ttabs}>WISHLIST</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {clicked === false && mem === false && (
                                <div
                                    className={styles.contentwrapper}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setClicked(true);
                                        setMem(true);
                                    }}>
                                    <div className={styles.tabs}>
                                        <div className={styles.categories}>
                                            <a href="/users/mem.js">
                                                <h2 className={styles.ttabs}>
                                                    MEMBERSHIP BENEFITS
                                                </h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {clicked === false && off === false && (
                                <div
                                    className={styles.contentwrapper}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setClicked(true);
                                        setOff(true);
                                    }}>
                                    <div className={styles.tabs}>
                                        <div className={styles.categories}>
                                            <a href="/users/mem.js">
                                                <h2 className={styles.ttabs}>
                                                    MY OFFERS AND DISCOUNTS
                                                </h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {(clicked === true || mem === true || off === true) && (
                                <div
                                    className={styles.contentwrapper}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setClicked(false);
                                        mem === true && setMem(false);
                                        off === true && setOff(false);
                                        wish === true && setWish(false);
                                    }}>
                                    <Image
                                        quality={100}
                                        src={image}
                                        alt="Back"
                                        width={96}
                                        height={96}
                                    />
                                </div>
                            )}
                            {clicked && mem && (
                                <>
                                    <>
                                        {loyalP >= 25 && loyalP < 50 && (
                                            <Tilt>
                                                <div
                                                    className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                                                    <button className={styles.gold}>
                                                        <label>Dear Silver Member</label>
                                                    </button>
                                                    <p>{50 - loyalP} to GOLD</p>
                                                    <p>YOUR MEMBER BENEFITS ARE:</p>
                                                    <ul>
                                                        <li>spotify premium free for 1 year</li>
                                                    </ul>
                                                </div>
                                            </Tilt>
                                        )}
                                        {loyalP >= 50 && loyalP < 75 && (
                                            <Tilt>
                                                <div
                                                    className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                                                    <button className={styles.gold}>
                                                        <label>Dear Gold Member</label>
                                                    </button>
                                                    <br />
                                                    <p>{75 - loyalP} to PLATINUM</p>
                                                    <p>YOUR MEMBER BENEFITS ARE:</p>
                                                    <ul>
                                                        <li>Spotify premium free for 1 year</li>
                                                        <li>NetFlix premium free for 6 months</li>
                                                    </ul>
                                                </div>
                                            </Tilt>
                                        )}
                                        {loyalP > 75 && (
                                            <Tilt>
                                                <div
                                                    className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                                                    <button className={styles.gold}>
                                                        <label>Dear Platinum Member</label>
                                                    </button>
                                                    <p>YOUR MEMBER BENEFITS ARE:</p>
                                                    <ul>
                                                        <li>Spotify premium free for 1 year</li>
                                                        <li>NetFlix premium free for 6 months</li>
                                                        <li>Custom CUAMRP Merch</li>
                                                        <li>
                                                            Invitation to Platinum Exclusive Events
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Tilt>
                                        )}
                                    </>
                                    ){'}'}
                                </>
                            )}
                        </section>
                    </div>
                )}
            </>
        );
    }
    return <a href="/api/auth/signin">SIGN IN</a>;
};

export default UserHome;
