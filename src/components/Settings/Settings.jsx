import React from "react";
import styles from "./Settings.module.css"
import { connect } from "react-redux";
import { changeThemeCreator } from "../../redux/settings-reducer";

const Settings = (props) => {

    const setTheme = (themeType) => {
        props.changeThemeCreator(themeType)
    }

    return (
        <div className={ styles.settingsBlock }>
            <h1>SETTINGS</h1>
            <label htmlFor="selectThemeDark">Dark Theme</label>
            <input onChange = { () => {setTheme("DARK")}}
                type="radio" 
                id="selectThemeDark" 
                name="theme"
            />
            <label htmlFor="selectThemeLight">Light Theme</label>
            <input onChange = { () => {setTheme("LIGHT")} }
                type="radio" 
                id="selectThemeLight" 
                name="theme"
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        themeType: state.settings.themeType
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeTheme: (themeType) => {
//             dispatch(changeThemeCreator(themeType))
//         }
//     }
// }

export default connect(mapStateToProps, {changeThemeCreator})(Settings);