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
                                defaultValue={billingAddress.country}
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
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 1" 
                                value={billingAddress.street1} 
                                onChange={
                                    event=>{
                                        let street1=event.target.value
                                        //console.log(event.target.value) 
                                        setBillingAddress({...billingAddress, street1:street1})
                                    }
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 2" 
                                value={billingAddress.street2} 
                                onChange={
                                    event=>{
                                        let street2=event.target.value
                                        //console.log(event.target.value) 
                                        setBillingAddress({...billingAddress, street2:street2})
                                    }
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-city" label="City" 
                                        value={billingAddress.city} 
                                        onChange={
                                            event=>{
                                                let city=event.target.value
                                                //console.log(event.target.value) 
                                                setBillingAddress({...billingAddress, city:city})
                                            }
                                        }
                                        fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-state" label="State" 
                                value={billingAddress.state} 
                                onChange={
                                    event=>{
                                        let state=event.target.value
                                        //console.log(event.target.value) 
                                        setBillingAddress({...billingAddress, state:state})
                                    }
                                }
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-zip-code" label="Zip Code" 
                                value={billingAddress.zipCode} 
                                onChange={
                                    event=>{
                                        let zipCode=event.target.value
                                        //console.log(event.target.value) 
                                        setBillingAddress({...billingAddress, zipCode:zipCode})
                                    }
                                }
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-phone" label="Phone" 
                                value={billingAddress.phone} 
                                onChange={
                                    event=>{
                                        let phone=event.target.value
                                        //console.log(event.target.value) 
                                        setBillingAddress({...billingAddress, phone:phone})
                                    }
                                }
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-fax" label="Fax" 
                                value={billingAddress.fax} 
                                onChange={
                                    event=>{
                                        let fax=event.target.value
                                        //console.log(event.target.value) 
                                        setBillingAddress({...billingAddress, fax:fax})
                                    }
                                }
                            fullWidth />
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
                                defaultValue={shippingAddress.country}
                                value={shippingAddress.country}
                                onChange={
                                    event=>{
                                        let country=event.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, country:country})
                                    }
                                }
                                options={countries}
                                placeholder="Country"
                                fullWidth
                                id="ba-country"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 1" 
                                value={shippingAddress.street1} 
                                onChange={
                                    event=>{
                                        let street1=event.target.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, street1:street1})
                                    }
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextareaAutosize aria-label="Address" rows={3} style={{ width:"100%" }} placeholder="Street 2" 
                                value={shippingAddress.street2} 
                                onChange={
                                    event=>{
                                        let street2=event.target.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, street2:street2})
                                    }
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-city" label="City" fullWidth 
                                value={shippingAddress.city} 
                                onChange={
                                    event=>{
                                        let city=event.target.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, city:city})
                                    }
                                }
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-state" label="State" 
                                value={shippingAddress.state} 
                                onChange={
                                    event=>{
                                        let state=event.target.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, state:state})
                                    }
                                }
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-zip-code" label="Zip Code" 
                                value={shippingAddress.zipCode} 
                                onChange={
                                    event=>{
                                        let zipCode=event.target.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, zipCode:zipCode})
                                    }
                                }
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-phone" label="Phone" 
                                value={shippingAddress.phone} 
                                onChange={
                                    event=>{
                                        let phone=event.target.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, phone:phone})
                                    }
                                }
                            fullWidth />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField required id="ba-fax" label="Fax" 
                                value={shippingAddress.fax} 
                                onChange={
                                    event=>{
                                        let fax=event.target.value
                                        //console.log(event.target.value) 
                                        setShippingAddress({...shippingAddress, fax:fax})
                                    }
                                }
                            fullWidth />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AddressComp;