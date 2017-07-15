import React from 'react';
import styles from './styles.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Header from '../../coponents/Header/index.jsx';
import Footer from '../../coponents/Footer/index.jsx';

import firebase from 'firebase/app';
import 'firebase/database';

import InfoList from './components/ListTitles/index.jsx';
import Images from './components/Images/index.jsx';

export default class Person extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null,
            detailed: null
        }
    }

    componentWillMount() {
        if (!firebase.apps.length) {
            this.firebaseApp = firebase.initializeApp({apiKey: " AIzaSyAAamirHLaO4bbyCl6Cq5z3YJxw9xbIYeI", databaseURL: "https://kingseurope-f4ddf.firebaseio.com/"});
        }
        this.database = firebase.database();
        this.id = this.props.match.params.id;

        this
            .database
            .ref('/detailed/' + this.id)
            .once('value')
            .then(snapshot => {
                this.setState({
                    detailed: snapshot.val()
                })
            });
        this
            .database
            .ref('/cards/' + this.id)
            .once('value')
            .then(snapshot => {
                this.setState({
                    data: snapshot.val()
                })
            });

    }

    render() {
        const data = this.state.data;
        const detailed = this.state.detailed;
        return (
            <div>
                <Header/>
                <div className={styles.personZone}>
                    <div className={styles.upperPart}>
                        <Paper zDepth={3} className={styles.mainInfo}>
                            <h1 className={styles.title}>
                                {data && data.name}
                            </h1>
                            {data && <InfoList titles={data.titles}/>}
                            <div className={styles.desc}>
                                {detailed && detailed.desc}
                            </div>
                        </Paper>
                        <div className={styles.photos}>
                            <Images images={detailed && detailed.images}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
