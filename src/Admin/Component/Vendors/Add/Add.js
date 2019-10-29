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
import MenuItem from '@material-ui/core/MenuItem';
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
    const countries = [
        {value: 'India', label:'India'},
        {value: 'Bhutan', label:'Bhutan'},
        {value: 'Japan', label:'Japan'}
    ]

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
    return (
        <Layout title="Add Vendor">
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h6" gutterBottom>
                    Add New Vendor
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="standard-select-salutation"
                            select
                            label="Salutation"
                            className={classes.textField}
                            value={values.salutation}
                            onChange={handleChange('salutation')}
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
                        <TextField required id="cardNumber" label="Card number" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField required id="cardNumber" label="Card number" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            id="vendor-display-name"
                            label="Vendor Display Name"
                            helperText="Vendor Display Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField required id="vendor-email" label="Vendor Email" fullWidth />
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <TextField required id="work-phone" label="Work Phone" fullWidth />
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <TextField required id="mobile" label="Mobile" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={2}>Add More Details</Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container  alignItems="flex-end">
                            <Grid item>
                                <AccountCircle />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Skype Contact" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField required id="designation" label="Designation" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField required id="department" label="Department" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField required id="website" label="Website" fullWidth />
                    </Grid>
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
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}>
                                        Billing Address
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
                                    <Grid item xs={12} md={6}>
                                        Shipping Address
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
                                Nothing to see here, this tab is <em>extinct</em>!
                            </div>
                            <div label="Reporting Tags">
                                Nothing to see here, this tab is <em>extinct</em>!
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