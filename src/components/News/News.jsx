import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './News.module.css';
import { getNewsThunkCreator } from '../../redux/news-reducer';
import classNames from 'classnames';

const News = (props) => {

    useEffect(() => {
        // props.getNewsThunkCreator();
    }, [props])

    const newsArr = props.newsList.map(item => {

        let data = item.publishedAt.split('T')[0].split('-').reverse().join('.');

        return (
            <li className={styles.newsItem} key={props.newsList.indexOf(item)} >
                <div className={styles.newsItemUpperBlock}>
                    <h2>{item.title}</h2>
                    <img src={item.urlToImage} alt="news-logo" />
                    <p>{item.description}</p>
                </div>
                <div className={styles.newsItemDownBlock}>
                    <span>{ data } </span>
                    <span> { item.author }</span>
                    <a href={ item.url } target="_blank" rel="noreferrer">Link</a>
                </div>
            </li>
        )
    });

    return (
        <div className={ classNames(styles.newsBlock, {[styles.newsBlockDark]: props.themeType === 'DARK'}) }>
            <h1>NEWS:</h1>
            <ul className={styles.newsListBlock}>
                {newsArr}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        newsList: state.news.newsList,
        themeType: state.settings.themeType
    }
};

const NewsContainer = connect(mapStateToProps, { getNewsThunkCreator })(News)

export default NewsContainer;