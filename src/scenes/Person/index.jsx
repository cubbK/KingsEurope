import React from 'react';
import styles from './styles.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import firebase from 'firebase/app';
import 'firebase/database';

import InfoList from './InfoList/index.jsx';

export default class Person extends React.Component {
    constructor() {
        super();

    }

    getName() {
        const name = this.props.match.params.id.replace(/-/g, ' ');
        return name;
    }

    componentWillMount() {
        if(!firebase.apps.length) {
            this.firebaseApp = firebase.initializeApp({
                apiKey: " AIzaSyAAamirHLaO4bbyCl6Cq5z3YJxw9xbIYeI",
                databaseURL: "https://kingseurope-f4ddf.firebaseio.com/",
            });
        }
        this.database = firebase.database();
    }

    render() {
        return (
            <div className={styles.personZone}>
                <div className={styles.upperPart}>
                    <Paper zDepth={3} className={styles.mainInfo}>
                        <h1 className={styles.title}>
                            {this.getName()}
                        </h1>
                        <InfoList/>
                    </Paper>
                    <div className={styles.photos}>Photos </div>
                </div>
            </div>
        )
    }
}