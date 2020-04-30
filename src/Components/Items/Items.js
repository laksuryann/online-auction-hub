import React from 'react';
import styles from './Items.module.css';

const Items = (props) => {

    return (   
              <span className={styles.Card} onClick={props.clicked}>
              <h2>{props.name}</h2>
              <img className={styles.Image} src={props.image} alt="frame"></img>
              </span>
    );
};

export default Items;