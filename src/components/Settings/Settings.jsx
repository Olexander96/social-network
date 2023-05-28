import React from "react";
import styles from "./Settings.module.css"
import { connect } from "react-redux";
import { changeThemeCreator } from "../../redux/settings-reducer";
import classNames from 'classnames';

const Settings = (props) => {

    const setTheme = (themeType) => {
        props.changeThemeCreator(themeType)
    }

    return (
        <div className={ classNames(styles.settingsBlock, {[styles.settingsBlockDark]: props.themeType === 'DARK'})  }>
            <h1>SETTINGS</h1>
            <label htmlFor="selectThemeDark">
                <input onChange = { () => {setTheme("DARK")}}
                    type="radio" 
                    id="selectThemeDark" 
                    name="theme"
                />
            Dark Theme</label>
            <label htmlFor="selectThemeLight">
                <input onChange = { () => {setTheme("LIGHT")} }
                    type="radio" 
                    id="selectThemeLight" 
                    name="theme"
                />
            Light Theme</label>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        themeType: state.settings.themeType
    }
}

export default connect(mapStateToProps, {changeThemeCreator})(Settings);