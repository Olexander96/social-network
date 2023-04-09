import React from 'react';
import pi from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: "Yo"
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render () {
        return (
            <div>
                { this.state.editMode 
                    ? <div>  
                        <input 
                            autoFocus={true} 
                            onBlur={ this.deactivateEditMode } // коли натиснув поза інпутом
                            value={ this.props.status }
                        />
                      </div>
                    : <div>
                        <span className={pi.profileStatus} onDoubleClick={ this.activateEditMode } >{ this.props.status }</span>
                      </div>
                }
            </div>
        )
    }
}
    

export default ProfileStatus;
