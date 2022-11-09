import React, { useState } from 'react';
import styles from '../../../styles/user-mgmt.module.css';
import Tilt from 'react-parallax-tilt';
import { toast } from 'react-toastify';
import Image from 'next/image';
import image from '../../../images/left_arrow.png';

const LowChurn = ({ email, loyaltyPoints }) => {
    const [loyal, setLoyal] = useState(false);
    const [member, setMember] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [ben, setBen] = useState(false);

    const [loyalp, setLoyalp] = useState({ loyaltyPoints: '' });
    const [memberp, setMemberp] = useState({ memberTier: '' });
    const emailp = email;

    const lchangeHandler = (e) => {
        e.preventDefault();
        setLoyalp({ loyaltyPoints: e.target.value });
    };

    const lsubmitHandler = async (e) => {
        e.preventDefault();

        const res = await fetch(`/api/user/users?email=${email}&field=loyal`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loyalp),
        });

        const resp = await res.json();
        console.log(resp);
        res.status === 200 &&
            toast('LOYALTY POINTS ADDED SUCCESSFULLY', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success',
            }) &&
            e.target.reset();
    };

    const mchangeHandler = (e) => {
        e.preventDefault();
        setMemberp({ memberTier: e.target.value });
    };

    const msubmitHandler = async (e) => {
        e.preventDefault();

        const res = await fetch(`/api/user/users?email=${emailp}&field=member`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(memberp),
        });

        const resp = await res.json();
        console.log(resp);
        res.status === 200 &&
            toast('MEMBERSHIP TIER UPDATED SUCCESSFULLY', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success',
            }) &&
            e.target.reset();
        res.status === 500 &&
            toast(`${JSON.stringify(resp)}`, {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success',
            }) &&
            e.target.reset();
    };
    return (
        <section className={styles.cont}>
            {!clicked && (
                <>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setClicked(true);
                            setLoyal(true);
                        }}>
                        ADD LOYALTY POINTS
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setClicked(true);
                            setMember(true);
                        }}>
                        UPDATE MEMBERSHIP TIER
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setClicked(true);
                            setBen(true);
                        }}>
                        BENEFITS MANAGEMENT
                    </button>
                </>
            )}
            {clicked && ben && (
                <>
                    {loyaltyPoints >= 25 && loyaltyPoints < 50 && (
                        <Tilt>
                            <div
                                className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                                <h2>Silver Section</h2>
                                <p>{50 - loyaltyPoints} to GOLD</p>
                                <p>YOUR MEMBER BENEFITS ARE:</p>
                                <ul>
                                    <li>spotify premium free for 1 year</li>
                                </ul>
                            </div>
                        </Tilt>
                    )}
                    {loyaltyPoints >= 50 && loyaltyPoints < 75 && (
                        <Tilt>
                            <div
                                className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                                <h2>Gold Section</h2>
                                <p>{75 - loyaltyPoints} to PLATINUM</p>
                                <p>YOUR MEMBER BENEFITS ARE:</p>
                                <ul>
                                    <li>Spotify premium free for 1 year</li>
                                    <li>NetFlix premium free for 6 months</li>
                                </ul>
                            </div>
                        </Tilt>
                    )}
                    {loyaltyPoints > 75 && (
                        <Tilt>
                            <div
                                className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                                <h2>Dear Platinum Section</h2>
                                <p>YOUR MEMBER BENEFITS ARE:</p>
                                <ul>
                                    <li>Spotify premium free for 1 year</li>
                                    <li>NetFlix premium free for 6 months</li>
                                    <li>Custom CUAMRP Merch</li>
                                    <li>Invitation to Platinum Exclusive Events</li>
                                </ul>
                            </div>
                        </Tilt>
                    )}
                </>
            )}
            {clicked && loyal && (
                <Tilt>
                    <div
                        className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                        <form
                            className="h-full flex flex-col justify-evenly items-center"
                            onSubmit={lsubmitHandler}>
                            <div className="text-white font-poppins text-2xl tracking-widest">
                                ADD LOYALTY POINTS
                            </div>
                            <input
                                type="text"
                                placeholder="Add Loyalty Points"
                                className="input-text"
                                name="loyalty"
                                onChange={lchangeHandler}
                            />
                            <input
                                type="Submit"
                                className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
                            />
                        </form>
                    </div>
                </Tilt>
            )}
            {clicked && member && (
                <Tilt>
                    <div
                        className={`container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm ${styles.tilt}`}>
                        <form
                            className="h-full flex flex-col justify-evenly items-center"
                            onSubmit={msubmitHandler}>
                            <div className="text-white font-poppins text-2xl tracking-widest">
                                <center>MEMBERSHIP TIER UPDATION</center>
                            </div>
                            <input
                                type="text"
                                placeholder="CHANGE MEMBERSHIP TIER"
                                className="input-text"
                                name="member"
                                onChange={mchangeHandler}
                            />
                            <input
                                type="Submit"
                                className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
                            />
                        </form>
                    </div>
                </Tilt>
            )}
            {clicked && (member || loyal || ben) && (
                <div
                    className={styles.contentwrapper}
                    onClick={(e) => {
                        e.preventDefault();
                        setClicked(false);
                        setMember(false);
                        setLoyal(false);
                        setBen(false);
                    }}>
                    <Image quality={100} src={image} alt="Back" width={96} height={96} />
                </div>
            )}
        </section>
    );
};

export default LowChurn;
