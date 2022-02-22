import React from 'react';

function Steps(props) {
    return(
        <div className='box col-sm-3 col-6'>
         <span class="material-icons" style={{fontSize: '100', color: props.color}}>{props.icon}</span>
         <p>{props.value} {props.unit}</p>
        </div>

    )
}

export default Steps;