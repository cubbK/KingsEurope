import React from 'react';
import styles from './styles.scss'
import CardKing from './components/CardKing/index.jsx';
import wiki from 'wikijs';

export default class Main extends React.Component {
    constructor() {
        super();
        this.names = ['Zygmunt III Wasa', 'Vladislav IV Wasa'];
    }

    getWiki(name) {
        wiki().search(name)
            .then(data => data.results[0])
            .then(name => wiki().page(name))
            .then(data => data.info()) 
            .then(console.log)


    }

    render() {
        { this.getWiki(this.names[1]) }
        return (
            <div className={styles.container}>
                <div className={styles.cards}>
                    <CardKing />
                    <CardKing />
                </div>
                <div className={styles.filter}>

                </div>
            </div>
        );
    }
}