import React from 'react';
import styles from './styles.scss'
import CardKing from './components/CardKing/index.jsx';
import Header from '../../coponents/Header/index.jsx';
import Footer from '../../coponents/Footer/index.jsx';
import ReactPaginate from 'react-paginate';

import firebase from 'firebase/app';
import 'firebase/database';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: undefined,
            paginator: {
                total: 20,
                display: 7,
                number: 7,
            }
        }
    }

    showCards() {
        if (this.state.data == undefined) {
            return (<CardKing />);
        } else {
            const vals = Object
                .keys(this.state.data)
                .map(key => this.state.data[key]);
            return (
                <div>
                    {vals.map((val, index) => {
                        return (<CardKing data={val} key={index} />)
                    })}
                </div>
            )
        }
    }

    async componentWillMount() {
        if (!firebase.apps.length) {
            this.firebaseApp = firebase.initializeApp({ apiKey: " AIzaSyAAamirHLaO4bbyCl6Cq5z3YJxw9xbIYeI", databaseURL: "https://kingseurope-f4ddf.firebaseio.com/" });
        }
        this.database = firebase.database();
        this
            .database
            .ref('/cards')
            .once('value')
            .then(snapshot => {
                this.setState({
                    data: snapshot.val()
                })
            });
    }

    handlePageClick(data) {
        console.log("yay");
    }

    render() {
        return (
            <main>
                <Header />
                <div className={styles.container}>
                    <div className={styles.cards}>
                        {this.showCards()}
                    </div>
                    <div className={styles.filter}></div>
                </div>
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={5}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
                <Footer />
            </main >
        );
    }
}