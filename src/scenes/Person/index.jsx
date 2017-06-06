import React from 'react';
import styles from './styles.scss';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import InfoList from './InfoList/index.jsx';

export default class Person extends React.Component {
    wiki() {
        
        return "123";
    }

    getName() {
        const name = this.props.match.params.name.replace(/-/g, ' ');
        console.log(name);
    }

    componentDidMount() {
        this.getName();
    }

    render() {
        return (
            <div className={styles.personZone}>
                <div className={styles.upperPart}>
                    <Paper zDepth={3} className={styles.mainInfo}>
                        <h1 className={styles.title}>
                            Sigismund III Vasa
                        </h1>
                        <InfoList/>
                        {this.wiki()}
                    </Paper>
                    <div className={styles.photos}>2</div>
                </div>
            </div>
        )
    }
}