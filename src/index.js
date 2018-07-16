import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

class ErrorWindow extends React.Component{
render(){
    return(
        <div className = 'window-container'>

        <div className = 'info'>
        <div className='info-icon'>
        <ion-icon name="information-circle-outline"></ion-icon>
        </div>
        <div className = 'info-bold'>
        </div>
        User Pending action
        </div>

        <div className = 'warning'>
        <div className = 'warning-icon'>
        <ion-icon name="alert"></ion-icon>
        </div>
        <div className = 'warning-bold'>
        </div>
        User has to be admin
        </div>

        <div className = 'error'>
        <div className = 'error-icon'>
        <ion-icon name="remove-circle"></ion-icon>
        </div>
        <div className = 'error-bold'>
        </div>
        Internal server error
        </div>

        <div className = 'success'>
        <div className = 'success-icon'>
        <ion-icon name="checkmark-circle"></ion-icon>
        </div>
        <div className = 'success-bold'>
        </div>
        Updated members status
        </div>
        
        </div>
    )
}
}


ReactDOM.render(<ErrorWindow />, document.getElementById('root'));

