import React from 'react';

export default function ListTitles(props) {
    return (
        <ul>
            {props.titles.map((val, index) => {
                return (
                    <li key={index}>{val}</li>
                )
            })}
        </ul>
    );
}