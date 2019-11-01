import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';

const VendorComp=({salutation, classes, vendorFields, setVendor})=>{
    return(
        <React.Fragment>
            <Grid item xs={12} md={4}>
                <TextField
                    id="standard-select-salutation"
                    select
                    label="Salutation"
                    className={classes.textField}
                    value={vendorFields.salutation}
                    onChange={event=>{
                        setVendor({...vendorFields, salutation:event.target.value})
                    }}
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
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField required id="firstName" label="First Name" 
                    value={vendorFields.firstName}
                    onChange={event=>{
                        setVendor({...vendorFields, firstName:event.target.value})
                    }}
                    fullWidth />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField required id="lastName" label="Last Name" 
                    value={vendorFields.lastName}
                    onChange={event=>{
                        setVendor({...vendorFields, lastName:event.target.value})
                    }}
                fullWidth />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField
                    required
                    id="vendor-display-name"
                    label="Vendor Display Name"
                    helperText="Vendor Display Name"
                    value={vendorFields.displayName}
                    onChange={event=>{
                        setVendor({...vendorFields, displayName:event.target.value})
                    }}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField required id="vendor-email" label="Vendor Email" 
                    value={vendorFields.vendorEmail}
                    onChange={event=>{
                        setVendor({...vendorFields, vendorEmail:event.target.value})
                    }}
                    fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField required id="work-phone" label="Work Phone" 
                    value={vendorFields.workPhone}
                    onChange={event=>{
                        setVendor({...vendorFields, workPhone:event.target.value})
                    }}
                    fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField required id="mobile" label="Mobile" 
                    value={vendorFields.mobile}
                    onChange={event=>{
                        setVendor({...vendorFields, mobile:event.target.value})
                    }}
                    fullWidth />
            </Grid>
            {/* <Grid item xs={12} md={2}>Add More Details</Grid> */}
            <Grid item xs={12} md={6}>
                <Grid container  alignItems="flex-end">
                    <Grid item>
                        <AccountCircle />
                    </Grid>
                    <Grid item>
                        <TextField id="input-with-icon-grid" label="Skype Contact" 
                            value={vendorFields.skype}
                            onChange={event=>{
                                setVendor({...vendorFields, skype:event.target.value})
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField required id="designation" label="Designation" 
                    value={vendorFields.designation}
                    onChange={event=>{
                        setVendor({...vendorFields, designation:event.target.value})
                    }}
                    fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField required id="department" label="Department" 
                    value={vendorFields.department}
                    onChange={event=>{
                        setVendor({...vendorFields, department:event.target.value})
                    }}
                    fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField required id="website" label="Website" 
                    value={vendorFields.website}
                    onChange={event=>{
                        setVendor({...vendorFields, website:event.target.value})
                    }}
                    fullWidth />
            </Grid>                
        </React.Fragment>
    )
}

export default VendorComp;