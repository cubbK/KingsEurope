import React from 'react';
import styles from './styles.scss';

export default function ListTitles(props) {
    return (
        <ul className={styles.list}>
            {props.titles.map((val, index) => {
                return (
                    <li className={styles.item} key={index}>{val}</li>
                )

            })}
        </ul>
    );
}