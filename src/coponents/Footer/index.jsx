import React from 'react';
import styles from './styles.scss';

export default function Footer(props) {
    return (
        <footer className={styles.mainBox}>
            <a
                href="https://github.com/cubbic/KingsEurope"
                target="_blank"
                className={styles.link}>
                View on GitHub
            </a>
        </footer>
    );
}