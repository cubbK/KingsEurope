import React from 'react';
import styles from './styles.scss'
import CardKing from './components/CardKing/index.jsx';
import wiki from 'wikijs';

import firebase from 'firebase/app';
import 'firebase/database';


export default class Main extends React.Component {
    constructor() {
        super();
        this.firebaseApp = firebase.initializeApp({
            apiKey: " AIzaSyAAamirHLaO4bbyCl6Cq5z3YJxw9xbIYeI",
            databaseURL: "https://kingseurope-f4ddf.firebaseio.com/",
        });

        this.database = firebase.database();

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
        this.database.ref('/cards').once('value').then(snapshot => {
            this.setState({
                data: snapshot.val()
            })
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.cards}>
                    {this.showCards()}
                </div>
                <div className={styles.filter}>

                </div>
            </div>
        );
    }
}