import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Select from 'react-select';

const AddressComp = ({billingAddress,shippingAddress,setBillingAddress,setShippingAddress,copyShippingAddress}) =>{
    const countries = [
        {value: 'India', label:'India'},
        {value: 'Bhutan', label:'Bhutan'},
        {value: 'Japan', label:'Japan'}
    ]
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    Billing Address
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-attension" label="Attension" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Select
                                value={billingAddress.country}
                                onChange={
                                            event=>{
                                                let country=event.value
                                                setBillingAddress({...billingAddress, country:country})
                                            }
                                        }
                                options={countries}
                                placeholder="Country"
                                fullWidth
                                id="ba-country"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 1" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 2" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-city" label="City" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-state" label="State" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-zip-code" label="Zip Code" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-phone" label="Phone" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-fax" label="Fax" fullWidth />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    Shipping Address
                    <input type="button" value="Copy Billing Address" onClick={copyShippingAddress} />
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-attension" label="Attension" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Select
                                // value={selectedOption}
                                // onChange={this.handleSelectChange}
                                options={countries}
                                placeholder="Country"
                                fullWidth
                                id="ba-country"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 1" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 2" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-city" label="City" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-state" label="State" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-zip-code" label="Zip Code" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-phone" label="Phone" fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-fax" label="Fax" fullWidth />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AddressComp;