import React, { useEffect }  from "react";
import { connect } from 'react-redux';
import styles from './News.module.css';
import { getNewsThunkCreator } from "../../redux/news-reducer";

const News = (props) => {

    useEffect(() => {
        props.getNewsThunkCreator();
    }, [props])

    const newsArr = props.newsList.map(item => {
        
        return (
            <div className={ styles.newsItem }>
                <h3>{ item.title }</h3>
                <img src={ item.urlToImage } alt="news-logo" />
                <p>{ item.description }</p>
                <div className={ styles.newsItemDownBlock }>
                    <span>{ item.publishedAt }</span>
                    <span>author: { item.author }</span>
                    <a href={ item.url }>more info</a>
                </div>
            </div>
        ) 
    });

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
};

const NewsContainer = connect(mapStateToProps, { getNewsThunkCreator })(News)

export default NewsContainer;