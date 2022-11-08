import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import styles from '../../../styles/user-mgmt.module.css';

const HighChurn = () => {
    return (
        <section className={styles.cont}>
            <Tilt>
                <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                    <a href="/users/LowChurn">LOW CHURN MGMT</a>
                    <a href="/users/HighChurn">HIGH CHURN MGMT</a>
                </div>
            </Tilt>
        </section>
    );
};

export default HighChurn;
