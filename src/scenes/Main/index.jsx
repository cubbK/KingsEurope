import React from 'react';
import styles from './styles.scss'
import CardKing from './components/CardKing/index.jsx';
import wiki from 'wikijs';

export default class Main extends React.Component {
    constructor() {
        super();
        this.names = ['Zygmunt III Wasa', 'Vladislav IV Wasa'];
        this.state = {
            data: undefined
        }
    }

    //There is no guarantee of synchronous operation of calls to setState and calls may be batched for performance gains.
    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async fetchWiki(name) {
        const searchResults = await wiki().search(name);
        const foundName = await searchResults.results[0];
        const data = await wiki().page(foundName);
        return data;
    }

    async componentDidMount() {
        let dataList = []
        for (let i = 0; i < this.names.length; i++) {
            const data = await this.fetchWiki(this.names[i]);
            dataList.push(data);
        }
        await this.setStateAsync({ data: dataList });
    }

    showCards() {
        const cards = this.names.map((name, id) => {
            const data = this.state.data;
            if (data != undefined) {
                return (
                    <CardKing key={id} data={data[id]} />
                );
            }

        });
        return cards;
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