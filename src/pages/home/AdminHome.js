import React, { useState } from 'react';
import styles from '../../../styles/main.module.css';
import Image from 'next/image';
import image from '../../../images/left_arrow.png';
import UserManagement from '../users/UserManagement';

const AdminHome = ({ role, users }) => {
    const [clicked, setClicked] = useState(false);
    const [crud, setCrud] = useState(false);
    const [userclick, setUserclick] = useState(false);
    const [data, setData] = useState({
        customerId: '',
        churn: '',
        email: '',
        loyaltyPoints: '',
        memberTier: '',
        CreditScore: '',
        Age: '',
        Tenure: '',
        Balance: '',
        NumOfProducts: '',
        HasCrCard: '',
        IsActiveMember: '',
        EstimatedSalary: '',
        France: '',
        Germany: '',
        Spain: '',
        Female: '',
        Male: '',
    });

    console.log(`users are: ${users}`);
    let userss = Array.from(users);

    if (role && role === 'Admin') {
        return (
            <>
                {!userclick && (
                    <div className={(styles.contentcontainer, styles.tbg)}>
                        <center>
                            <h1>WELCOME TO CUAMRP ADMINISTRATOR</h1>
                            <h3>PLEASE CHOOSE YOUR DESIRED OPERATION TYPE</h3>
                        </center>

                        <section>
                            {clicked === false && crud === false && (
                                <div
                                    className={styles.contentwrapper}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setClicked(true);
                                    }}>
                                    <div className={styles.tabs}>
                                        <div className={styles.categories}>
                                            <a>
                                                <h2 className={styles.ttabs}>EXISTING USERS</h2>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {clicked &&
                                !userclick &&
                                users !== null &&
                                userss.map((element) => (
                                    <div
                                        className={styles.contentwrapper}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setUserclick(true);
                                            setData({
                                                customerId: element.customerId,
                                                churn: element.churn,
                                                email: element.email,
                                                loyaltyPoints: element.loyaltyPoints,
                                                memberTier: element.memberTier,
                                                CreditScore: element.CreditScore,
                                                Age: element.Age,
                                                Tenure: element.Tenure,
                                                Balance: element.Balance,
                                                NumOfProducts: element.NumOfProducts,
                                                HasCrCard: element.HasCrCard,
                                                IsActiveMember: element.IsActiveMember,
                                                EstimatedSalary: element.EstimatedSalary,
                                                France: element.France,
                                                Germany: element.Germany,
                                                Spain: element.Spain,
                                                Female: element.France,
                                                Male: element.Male
                                            });
                                            console.log(`Users inside it is: ${element}`);
                                        }}>
                                        <div className={styles.tabs}>
                                            <div className={styles.categories}>
                                                <h2 className={styles.ttabs}>
                                                    {element.customerId}
                                                </h2>
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
                                    <Image
                                        quality={100}
                                        src={image}
                                        alt="Back"
                                        width={96}
                                        height={96}
                                    />
                                </div>
                            )}
                        </section>
                    </div>
                )}
                {userclick && <UserManagement data={data} />}
            </>
        );
    }
    return <a href="/api/auth/signin">SIGN IN</a>;
};

export default AdminHome;
