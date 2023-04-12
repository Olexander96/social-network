import React from 'react';
import pi from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status); //після того як ввели статус і клацнули курсор поза інпутом (onBlur) то робиться запит API і те що ми ввели відкравляється на сервер
    }

    onChangedStatus = (event) => { // коли ми пічатаємо статус то він записується в локальний стейт
        this.setState({
            status: event.currentTarget.value
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) { //ми порівнюємо початковий статус з тим який ввели, якщо різні то перезаписуємо його глобально і перемальвуємо компоненту
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return (
            <div>
                { this.state.editMode 
                    ? <div>  
                        <input 
                            autoFocus={ true } 
                            onBlur={ this.deactivateEditMode } // коли натиснув поза інпутом
                            value={ this.state.status }
                            onChange={ this.onChangedStatus }
                        />
                      </div>
                    : <div>
                        <span 
                            className={pi.profileStatus} 
                            onDoubleClick={ this.activateEditMode } 
                        >{ this.props.status || "no status"}</span>
                      </div> //тут показуємо статус який прийде з стейта по API 
                }
            </div>
        )
    }
}
    

export default ProfileStatus;
