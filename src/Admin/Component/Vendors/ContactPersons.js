import React from 'react';
import PropTypes from 'prop-types';

const ContactPersons = ({idx, contactPersons, handleContactPersonChange}) =>{
    return (
        <React.Fragment>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Salutation</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Email Address</TableCell>
                        <TableCell align="right">Work Phone</TableCell>
                        <TableCell align="right">Mobile</TableCell>
                        <TableCell align="right">X</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    contactPersonState.map((val, idx) => {
                        const salutation = `Salutation-${idx}`;
                        const firstName = `firstName-${idx}`;
                        const lastName = `lastName-${idx}`;
                        const email = `email-${idx}`;
                        const workPhone = `workPhone-${idx}`;
                        const mobile = `mobile-${idx}`;
                        return (
                        <TableRow key={`cat-${idx}`}>
                            <TableCell component="th" scope="row">
                                <TextField
                                        id={salutation}
                                        name={salutation}
                                        data-idx={idx}
                                        select
                                        label="Salutation"
                                        className="Salutation"
                                        value={contactPersons[idx].Salutation}
                                        onChange={handleContactPersonChange}
                                        SelectProps={{
                                        MenuProps: {
                                            className: classes.menu,
                                        },
                                        }}
                                        helperText="Please select Salutation"
                                        margin="normal"
                                        fullWidth
                                    >{salutation.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <TextField required name={firstName} 
                                            className="firstName"
                                            data-idx={idx} 
                                            id={firstName} label="First Name" 
                                            value={contactPersons[idx].firstName}
                                            onChange={handleContactPersonChange}  fullWidth />
                            </TableCell>
                            <TableCell align="right">a</TableCell>
                            <TableCell align="right">a</TableCell>
                            <TableCell align="right">j</TableCell>
                            <TableCell align="right">o</TableCell>
                        
                        </TableRow>
                        );      
                    })
                    }
                    
                </TableBody>
            </Table>
        </React.Fragment>
    )
}

export default ContactPersons;