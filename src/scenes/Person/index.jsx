import React from 'react';
import styles from './styles.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class Person extends React.Component {
    render() {
        return (
            <div className={styles.personZone}>

                <div className={styles.upperPart}>
                    <Paper zDepth={3} className={styles.mainInfo}>
                        <h1 className={styles.title}>
                            Sigismund III Vasa
                        </h1>
                        <ul className={styles.infoList}>
                            <li>

                            </li>
                        </ul>
                    </Paper>
                    <div className={styles.photos}>2</div>
                </div>
            </div>
        )
    }
}