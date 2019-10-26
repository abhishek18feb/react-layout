import React from 'react';
import {Route} from 'react-router-dom';
import List from './List/List';
import Add from './Add/Add';



const Vendor = props =>{
    console.log(props.match.path);
    
    return (
        <React.Fragment>
            <Route exact={true} path={`${props.match.path}/add`} component={Add} />
            <Route path={`${props.match.path}`} component={List} />
        </React.Fragment>
    )
}

export default Vendor; 