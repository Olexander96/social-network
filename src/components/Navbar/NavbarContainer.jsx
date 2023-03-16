import Navbar from './Navbar'
import {connect} from 'react-redux';


// const NavbarContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//             {value => {
//                 return <Navbar sidebar= { value.getState().sidebar} />
//             }
//         }
//         </StoreContext.Consumer>
        
//     )
// }

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer; 
