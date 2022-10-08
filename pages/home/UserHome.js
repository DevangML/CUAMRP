import React from 'react';
import styles from '../../styles/main.module.css';

function UserHome({ role }) {
  if (role && role === 'User') {
    return (
      <div className={styles.contentcontainer}>
        <nav>
          <ul>
            <li>
              <img src='/cart.svg' alt='cart' />
            </li>
          </ul>
        </nav>
        <section>
          <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/timetable/Timetable">
                  <h2>TIMETABLE</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/attendance/AttendanceViewer">
                  <h2>Attendance</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/collab/Collab">
                  <h2>ACADEMICS</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/marks/MarksViewer">
                  <h2>MARKSHEET</h2>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
}

export default UserHome;
