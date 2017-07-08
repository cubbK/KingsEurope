import React from 'react';
import styles from './styles.scss';
const { Requester } = require("node-duckduckgo");
const requester = new Requester("KingsEurope");

export default class Images extends React.Component {
    componentWillMount() {
        requester.request("SIGISMUND III VASA", (err, response, body) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(body);
        });
        console.log("mounted")
    }
    render() {
        return(
            <div className={styles.mainBox}>
                1
            </div>
        )
    }
}