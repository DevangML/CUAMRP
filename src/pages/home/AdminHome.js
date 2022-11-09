import React, { useState } from 'react';
import styles from '../../../styles/main.module.css';
import Image from 'next/image';
import image from '../../../images/left_arrow.png';

const TeeacherHome = ({ role, users }) => {
    const [clicked, setClicked] = useState(false);
    const [crud, setCrud] = useState(false);
    if (role && role === 'Admin') {
        return (
            <div className={(styles.contentcontainer, styles.tbg)}>
                <center>
                    <h1>WELCOME TO CUAMRP ADMINISTRATOR</h1>
                    <h3>PLEASE CHOOSE YOUR DESIRED OPERATION TYPE</h3>
                </center>
                <section>
                    {clicked === false && crud === false && (
                        <div className={styles.contentwrapper}>
                            <div className={styles.tabs}>
                                <div className={styles.categories}>
                                    <a
                                        href="/users/UserManagement"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setClicked(true);
                                        }}>
                                        <h2 className={styles.ttabs}>EXISTINNG USERS</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {clicked &&
                        users !== null &&
                        users.map((element) => (
                            <div className={styles.contentwrapper}>
                                <div className={styles.tabs}>
                                    <div className={styles.categories}>
                                        <a href="/users/UserManagement">
                                            <h2 className={styles.ttabs}>{element.name}</h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {clicked === false && crud === false && (
                        <div
                            className={styles.contentwrapper}
                            onClick={(e) => {
                                e.preventDefault();
                                setCrud(true);
                            }}>
                            <div className={styles.tabs}>
                                <div className={styles.categories}>
                                    <a href="/users/Crud.js">
                                        <h2 className={styles.ttabs}>CRUD USERS</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {clicked === false && crud === true && (
                        <div className={styles.contentwrapper}>
                            <div className={styles.tabs}>
                                <div className={styles.categories}>
                                    <a href="/users/Register">
                                        <h2 className={styles.ttabs}>Add Users</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {clicked === false && crud === true && (
                        <div className={styles.contentwrapper}>
                            <div className={styles.tabs}>
                                <div className={styles.categories}>
                                    <a href="/users/Update">
                                        <h2 className={styles.ttabs}>Update User</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {clicked === false && crud === true && (
                        <div className={styles.contentwrapper}>
                            <div className={styles.tabs}>
                                <div className={styles.categories}>
                                    <a href="/users/Delete">
                                        <h2 className={styles.ttabs}>Delete User</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                    {(clicked === true || crud === true) && (
                        <div
                            className={styles.contentwrapper}
                            onClick={(e) => {
                                e.preventDefault();
                                setClicked(false);
                                crud === true && setCrud(false);
                            }}>
                            <Image quality={100} src={image} alt="Back" width={96} height={96} />
                        </div>
                    )}
                </section>
            </div>
        );
    }
    return <a href="/api/auth/signin">SIGN IN</a>;
};

export default TeeacherHome;
