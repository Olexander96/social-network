import React from 'react';
import styles from './Preloader.module.css'
import preloaderIcon from '../../../assets/images/preloader.svg'

const Preloader = (props) => {
    return (
        <img className={ styles.preloaderIcon } src={preloaderIcon} alt='loading'/>
    )
}

export default Preloader;