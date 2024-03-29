import React, {useState} from 'react';
import Layout from '../../../Layout/Backend/Backend';
import Container from '@material-ui/core/Container';
import useStyles from '../../../Hooks/useStyle';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Tabs from '../../../UI/Tabs/Tabs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Select from 'react-select';
import ContactPersonsComp from '../ContactPersons';
import AddressComp from '../AddressComp';
import VendorComp from '../VendorComp';
import './Add.css';


const Add = props =>{
    console.log(props);
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const salutation = [
        {
          value: 'Mr.',
          label: 'Mr.',
        },
        {
          value: 'Mrs.',
          label: 'Mrs.',
        },
        {
          value: 'Ms.',
          label: 'Miss.',
        },
        {
          value: 'Dr.',
          label: 'Dr.',
        },
      ];
    const currencis = [
        { value: 'INR', label: 'INR-Rupees' },
        { value: 'USD', label: 'USD-Dollars' },
        { value: 'EUR', label: 'EUR-Euro' },
      ];
    const paymentTerms = [
        { value: 'INR', label: 'INR-Rupees' },
        { value: 'USD', label: 'USD-Dollars' },
        { value: 'EUR', label: 'EUR-Euro' },
    ];


    const [values, setValues] = React.useState({
            name: 'Cat in the Hat',
            age: '',
            multiline: 'Controlled',
            salutation: '',
    });
    
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const contactPersons = { Salutation: '', firstName: '', lastName:'', email:'', workPhone:'', mobile:'' };
    const [contactPersonState, setContactPersons] = useState([
        {...contactPersons}
    ]);
 
    /**Code for the adding contact person */
    const addContactPerson = () => {
        setContactPersons([...contactPersonState, {...contactPersons}]);
    };
    const removeContactPerson = index =>{
        //console.log(index);
        console.log('Contact Person Remove Called at index '+index)
        let updatedContacts = [...contactPersonState];
        
        updatedContacts.splice(index,1);
        console.log(updatedContacts);
        setContactPersons(updatedContacts);
    }
    const handleContactPersonChange = (e) => {
        console.log(e.target.value);
        console.log((e.target.name).split("-"))
        let [name, id] = (e.target.name).split("-");
        // console.log(e.target);
        const updatedContacts = [...contactPersonState];
        updatedContacts[id][name] = e.target.value;
        setContactPersons(updatedContacts);
    };
    /**  Code for the Address Fields */
    const addressFields = {country:'India', street1:'', street2:'', city:'', state:'', zipCode:'', phone:'', fax:''};
    const [billingAddress, setBillingAddress] = useState(addressFields);
    const [shippingAddress, setShippingAddress] = useState(addressFields);
    const copyShippingAddress =() =>{
        //console.log('copying billing address')
        setShippingAddress(billingAddress);
    }
    /** Code for Vendors Field */
    const [vendorFields, setVendor] = useState({salutation:'', firstName:'', lastName:'', companyName:'', displayName:''
    ,vendorEmail:'', workPhone:'', mobile:'', skype:'', designation:'', department:'', website:''});

    return (
        <Layout title="Add Vendor">
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h6" gutterBottom>
                    Add New Vendor
                </Typography>
                <Grid container spacing={3}>
                    <VendorComp salutation={salutation} classes={classes} 
                                vendorFields={vendorFields} setVendor={setVendor} />
                    <Grid item xs={12} md={12}>
                        <Tabs>
                            <div label="Other Details">
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        <Select
                                            // value={selectedOption}
                                            // onChange={this.handleSelectChange}
                                            options={currencis}
                                            placeholder="Select Currency"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Select
                                            // value={selectedOption}
                                            // onChange={this.handleSelectChange}
                                            options={paymentTerms}
                                            placeholder="Payment Terms"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container  alignItems="flex-end">
                                            <Grid item>
                                                <AccountCircle />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="Facebook" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Grid container  alignItems="flex-end">
                                            <Grid item>
                                                <AccountCircle />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="Gmail" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                </Grid>
                            </div>
                            <div label="Address">
                                <AddressComp 
                                    billingAddress={billingAddress} 
                                    shippingAddress={shippingAddress}
                                    setBillingAddress={setBillingAddress}
                                    setShippingAddress={setShippingAddress}    
                                    copyShippingAddress={copyShippingAddress}
                                />
                            </div>
                            <div label="Contact Persons">
                                <Grid container spacing={3}>
                                    <input type="button" value="Add New Persone" onClick={addContactPerson} />
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
                                                return (<ContactPersonsComp key={`cat-${idx}`}
                                                    idx={idx} 
                                                    contactPersonState={contactPersonState} 
                                                    handleContactPersonChange={handleContactPersonChange} 
                                                    removeContactPerson={removeContactPerson}
                                                    salutation={salutation} />)
                                            })
                                        }
                                        </TableBody>
                                    </Table>
                                </Grid>
                            </div>
                            <div label="Custom Fields">
                                Start adding custom fields for your contacts by going to Settings  Preferences  Customers and Vendors. You can add as many as Ten extra fields, as well as refine the address format of your customers from there.
                            </div>
                            <div label="Reporting Tags">
                                You've not created any Reporting Tags. Start creating reporting tags by going to More Settings  Reporting Tags in Zoho Books
                            </div>
                            <div label="Remarks">
                                <Grid item xs={12} md={8}>
                                    <TextareaAutosize aria-label="Remarks" rows={5} style={{ width:"100%" }} placeholder="remark" />
                                </Grid>
                            </div>
                        </Tabs>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                            label="Remember credit card details for next time"
                        />
                    </Grid>
                </Grid> 
            </Container>
        </Layout>
    )
}

export default Add;