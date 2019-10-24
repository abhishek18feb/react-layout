import React from 'react';

const FrontLayout = props =>{
    return (
        <React.Fragment>
            This is front layout
            {props.children}
        </React.Fragment>
    )
}

export default FrontLayout;