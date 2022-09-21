import Navbar from 'components/Navbar/Navbar';
import Svg from 'components/svg';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.headerTitle}>Online store</div>
      <Navbar />
      <div className={classes.headerSettings}>
        <div className={classes.currency}>$USD</div>
        <div className={classes.headerBtns}>
          <div className={classes.svgBox}>
            <Svg id="search" />
          </div>
          <Link to="/login">
            <div className={classes.svgBox}>
              <Svg id="login" />
            </div>
          </Link>
          <Link to="/bag">
            <div className={classes.svgBox}>
              <Svg id="bag" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
