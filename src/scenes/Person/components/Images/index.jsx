import React from 'react';
import styles from './styles.scss';
import Masonry from 'react-masonry-component';

export default function Images(props) {
    return (
        <Masonry className={styles.mainBox}>
            {props.images && props.images.map((el, index) => {
              return(
                  <div key={index} className={styles.image}>
                      <img src={el} alt=""/>
                  </div>
              );
            })}
        </Masonry>      
    );
}