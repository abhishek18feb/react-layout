import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';

class Admin extends Component {
	render(){
        console.log(this.props.match.path);
		return (
			<div>
                This is routing page
                <Route exact={true} path={`${this.props.match.path}/dashboard`} 
                    component={withRouter(Dashboard)} />
            </div>
		)
	}
}

export default Admin;
