import React from 'react';
import Edit from '../Edit/Edit';
import Layout from '../../../Layout/Backend/Backend';
import {Route} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import useStyles from '../../../Hooks/useStyle';
import clsx from 'clsx';
import MaterialTable from 'material-table';


const List = props =>{
    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Phone', field: 'phone', type: 'numeric' },
          { title:'Website', field:'website'},
          {
            title: 'City',
            field: 'City',
            lookup: { 201301: 'Noida', 471525: 'Chandla' },
          },
        ],
        data: [
          { name: 'Mehmet', email: 'Baran', phone: 1987, website:'abc@gmail.com',City: 471525 },
          {
            name: 'Zerya Betül',
            email: 'Baran',
            phone: 2017,
            website:'abc@gmail.com',
            City: 201301,
          },
        ],
      });
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Layout title="Vendors">
            <Container maxWidth="lg" className={classes.container}>
                <MaterialTable
                title="Editable Example"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.splice(data.indexOf(oldData), 1);
                        setState({ ...state, data });
                        }, 600);
                    }),
                }}
                />
                <Edit />
               {/* <Route 
                    path={props.match.path + '/edit/:id'} 
                    component={Edit}
                />  */}
            </Container>
        </Layout>
    )
}

export default List;