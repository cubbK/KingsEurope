import React from 'react';
import styles from './styles.scss';

export default function Images(props) {
    return (
        <div className={styles.mainBox}>
            {props.images && props.images.map((el, index) => {
              return(
                  <div key={index} className={styles.image}>
                      <img src={el} alt=""/>
                  </div>
              );
            })}
        </div>
    );
}