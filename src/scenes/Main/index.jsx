import React from 'react';
import styles from './styles.scss'
import CardKing from './components/CardKing/index.jsx';
export default class Main extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <div className={styles.cards}>
                    <CardKing/>
                    <CardKing/>
                </div>
                <div className={styles.filter}>

                </div>
            </div> 
        );
    }
}