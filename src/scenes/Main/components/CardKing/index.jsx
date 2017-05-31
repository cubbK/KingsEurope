import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import styles from './styles.scss';

//Material ui components require obj styling, thus imported styles do not work.

export default class CardKing extends React.Component {
    constructor() {
        super();
        this.state = {
            info: undefined
        }
    }

    getTitles(info) {
        const allowed = ['succession', 'succession1', 'succession2', 'succession3'];

        //filters the info obj to contain only list of succesions
        const filtered = Object.keys(info)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
                obj[key] = info[key];
                return obj;
            }, {});

        let titlesString = '';
        Object.keys(filtered).forEach(key => {
            if (typeof filtered[key] == 'string') {
                titlesString += filtered[key] + ', ';
            } else {
                filtered[key].forEach(el=>{
                    titlesString += el + ', ';
                });
            }
        });
        titlesString = titlesString.slice(0, -2);
        return titlesString;
    }

    async componentDidMount() {
        const info = await this.props.data.info();
        const titles = this.getTitles(info);

        this.setState({
            info: info,
            name: info.name,
            titles: titles
        });
    }

    render() {
        let info;
        if (this.state.info != undefined) {
            info = this.state.info;
            console.log(info);
        }


        return (
            <Paper zDepth={3} className={styles.card}>
                <Avatar
                    src="http://images.npg.org.uk/800_800/7/0/mw03070.jpg"
                    size={140}
                    style={{ border: 0, objectFit: 'cover' }}
                />
                <div className={styles.content}>
                    <div className={styles.title}>
                        {this.state.name || '...'}
                    </div>
                    <div className={styles.titles}>
                        {this.state.titles || '...'}
                    </div>
                </div>
                <a href="" className={styles.readMore}>

                    read more
                </a>
            </Paper>
        );
    }
}