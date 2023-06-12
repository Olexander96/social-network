import React from "react";
import {connect} from 'react-redux';
import styles from './News.module.css';

const News = (props) => {
    const newsArr = props.newsList.map(item => <div key={props.newsList.indexOf(item+1)}></div>)

    return (
        <div className={ styles.newsBlock}>
            <h2>News:</h2>
            { newsArr }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList
    }
}

const NewsContainer = connect(mapStateToProps,{})(News)

export default NewsContainer;