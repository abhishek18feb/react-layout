import React, {Component} from 'react';
import {Route} from 'react-router';
import Dashboard from './Component/Dashboard/Dashboard';
import Vendor from './Component/Vendors/Vendors';
import AdminLogin from './Layout/Login/Login';

class Admin extends Component {
	render(){
       
		return (
			<div>
                <Route exact={true} path={`${this.props.match.path}/dashboard`} 
                    component={Dashboard} />
                <Route path={`${this.props.match.path}/vendor`} 
                    component={Vendor} />
				<Route exact={true} path={`${this.props.match.path}/`} component={AdminLogin} />
            </div>
		)
	}
}

export default Admin;
