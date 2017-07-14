import React from 'react';
import {Paper} from 'material-ui';
import styles from './styles.scss';

export default function Header(props) {
    return(
        <div className={styles.mainBox}>
            <div className={styles.container}>
                <h1 className={styles.title}>Rulers of Europe</h1>
            </div>
        </div>
    );
    
}