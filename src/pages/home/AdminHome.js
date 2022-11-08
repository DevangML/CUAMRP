import React from 'react';
import styles from '../../../styles/main.module.css';

const TeeacherHome = ({ role, users }) => {
    if (role && role === 'Admin') {
        return (
            <div className={(styles.contentcontainer, styles.tbg)}>
                <section>
                    {users !== null &&
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
                    <div className={styles.contentwrapper}>
                        <div className={styles.tabs}>
                            <div className={styles.categories}>
                                <a href="/users/Register">
                                    <h2 className={styles.ttabs}>Add Users</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
    return <a href="/api/auth/signin">SIGN IN</a>;
};

export default TeeacherHome;
