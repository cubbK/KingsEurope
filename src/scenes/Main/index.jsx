import React from 'react';
import styles from './styles.scss'
import CardKing from './components/CardKing/index.jsx';
import {Paper} from 'material-ui';

import firebase from 'firebase/app';
import 'firebase/database';


export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: undefined
        }
    }

    showCards() {
        if (this.state.data == undefined) {
            return (
                <CardKing />
            );
        } else {
            //
            const vals = Object.keys(this.state.data).map(key => this.state.data[key]); 
            return (
                <div>
                    {vals.map((val, index)=>{
                        return (
                            <CardKing data={val} key={index}/>
                        )
                    })}
                </div>
            )
        }
    }

    async componentWillMount() {
        if(!firebase.apps.length) {
            this.firebaseApp = firebase.initializeApp({
                apiKey: " AIzaSyAAamirHLaO4bbyCl6Cq5z3YJxw9xbIYeI",
                databaseURL: "https://kingseurope-f4ddf.firebaseio.com/",
            });
        }
        this.database = firebase.database();
        this.database.ref('/cards').once('value').then(snapshot => {
            this.setState({
                data: snapshot.val()
            })
        });
    }

    render() {
        return (
           
            <div className={styles.container}>
                <Paper zDepth={1} className={styles.header} >
                    <h1 className={styles.title} >Rulers of Europe</h1>
                    <div className={styles.desc}>
                        The abridged list includes above all those kings and queens whose rule affected the arts of Europe in important ways and whose names are most commonly raised in art historical discussion.
                    </div>
                </Paper>
                 
                <div className={styles.cards}>
                    {this.showCards()}
                </div>
                <div className={styles.filter}>

                </div>
            </div>
        );
    }
}