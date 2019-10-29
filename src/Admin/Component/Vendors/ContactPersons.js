import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import useStyles from '../../Hooks/useStyle';
import MenuItem from '@material-ui/core/MenuItem';

const ContactPersonsComp = ({idx, contactPersonState, handleContactPersonChange, removeContactPerson, salutation}) =>{
    const salut = `Salutation-${idx}`;
    const firstName = `firstName-${idx}`;
    const lastName = `lastName-${idx}`;
    const email = `email-${idx}`;
    const workPhone = `workPhone-${idx}`;
    const mobile = `mobile-${idx}`;
    const classes = useStyles();
    return (
        <React.Fragment>
              <TableRow key={`cat-${idx}`}>
                    <TableCell component="th" scope="row">
                        <TextField
                                id={salut}
                                name={salut}
                                dataset={idx}
                                select
                                label="Salutation"
                                className="Salutation"
                                value={contactPersonState[idx].Salutation}
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
                                    dataset={idx} 
                                    id={firstName} label="First Name" 
                                    value={contactPersonState[idx].firstName}
                                    onChange={handleContactPersonChange}  fullWidth />
                    </TableCell>
                    <TableCell align="right">
                        <TextField required name={lastName} 
                                    className="lastName"
                                    data-idx={idx} 
                                    id={lastName} label="Last Name" 
                                    value={contactPersonState[idx].lastName}
                                    onChange={handleContactPersonChange}  fullWidth />
                    </TableCell>
                    <TableCell align="right">
                                <TextField required name={email} 
                                    className="email"
                                    data-idx={idx} 
                                    id={email} label="Email" 
                                    value={contactPersonState[idx].email}
                                    onChange={handleContactPersonChange}  fullWidth />
                    </TableCell>
                    <TableCell align="right">
                        <TextField required name={workPhone} 
                                    className="workPhone"
                                    data-idx={idx} 
                                    id={workPhone} label="Work Phone" 
                                    value={contactPersonState[idx].workPhone}
                                    onChange={handleContactPersonChange}  fullWidth />
                        </TableCell>
                    <TableCell align="right">
                        <TextField required name={mobile} 
                            className="mobile"
                            data-idx={idx} 
                            id={mobile} label="Mobile" 
                            value={contactPersonState[idx].mobile}
                            onChange={handleContactPersonChange}  fullWidth />
                    </TableCell>
                    <TableCell><input type="button" value="Remove Person" onClick={(index)=>removeContactPerson(idx)} /></TableCell>
                </TableRow>
                    
                                            
        </React.Fragment>
    )
}

export default ContactPersonsComp;