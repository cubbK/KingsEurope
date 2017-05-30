import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import styles from './styles.scss';

//Material ui components require obj styling, thus imported styles do not work.

export default class CardKing extends React.Component {
    render() {
        return (
            <Paper zDepth={3} className={styles.card}>
                <Avatar
                    src="http://images.npg.org.uk/800_800/7/0/mw03070.jpg"
                    size={140}
                    style={{ border: 0, objectFit: 'cover' }}
                />
                <div className={styles.content}>
                    <div className={styles.title}>
                        Sigismund III Vasa
                    </div>
                    <div className={styles.titles}>
                        King of Poland, Grand Duke of Lithuania, King of Sweden
                    </div>
                </div>
                <a href="" className={styles.readMore}>
                    
                    read more
                </a>
            </Paper>
        );
    }
}